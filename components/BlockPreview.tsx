'use client'

import React, { createContext, useContext, useState, useRef, useEffect } from 'react'
import { Check, Code2, Copy, Eye, Maximize, Terminal, Smartphone, Tablet, Monitor, RefreshCw, ExternalLink } from 'lucide-react'
import { Panel, PanelGroup, PanelResizeHandle, type ImperativePanelGroupHandle } from 'react-resizable-panels'
import { Separator } from '@/components/ui/separator'
import { useCopyToClipboard } from '@/hooks/useClipboard'
import { useMedia } from 'use-media'
import { Button } from './ui/button'
import { cn, titleToNumber } from '@/lib/utils'
import CodeBlock from './code-block'
import Link from 'next/link'
import { OpenInV0Button } from './open-in-v0'
import { isUrlCached } from '@/lib/serviceWorker'
import { motion, AnimatePresence } from 'motion/react'
import { HeartIcon, type HeartIconHandle } from '@/components/animation-logos/HeartIcon'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

// --- Types & Context ---

type ViewMode = 'preview' | 'code'

interface BlockPreviewContextValue {
    mode: ViewMode
    setMode: (mode: ViewMode) => void
    width: number
    setWidth: (width: number) => void
    iframeHeight: number
    setIframeHeight: (height: number) => void
    shouldLoadIframe: boolean
    setShouldLoadIframe: (load: boolean) => void
    cachedHeight: number | null
    isIframeCached: boolean
    // FIX: Track whether the iframe has fully loaded so opacity can flip correctly
    iframeLoaded: boolean
    loved: boolean
    setLoved: (loved: boolean | ((prev: boolean) => boolean)) => void
    reload: () => void
    reloadKey: number
    title: string
    category: string
    preview: string
    code?: string
    terminalCode: string
    copied: boolean
    copy: (e?: React.MouseEvent) => void
    cliCopied: boolean
    cliCopy: (e?: React.MouseEvent) => void
    handleLove: () => void
    heartIconRef: React.RefObject<HeartIconHandle | null>
    resizablePanelRef: React.RefObject<ImperativePanelGroupHandle | null>
    iframeRef: React.RefObject<HTMLIFrameElement | null>
    blockRef: React.RefObject<HTMLDivElement | null>
}

const BlockPreviewContext = createContext<BlockPreviewContextValue | null>(null)

function useBlockPreview() {
    const context = useContext(BlockPreviewContext)
    if (!context) throw new Error('useBlockPreview must be used within a BlockPreviewProvider')
    return context
}

// --- Provider ---

const DEFAULT_SIZE = 100
const SM_SIZE = 30
const MD_SIZE = 62
const LG_SIZE = 82

const getCacheKey = (src: string) => `iframe-cache-${src}`

export const BlockPreviewProvider: React.FC<{
    children: React.ReactNode
    title: string
    category: string
    preview: string
    code?: string
}> = ({ children, title, category, preview, code }) => {
    const [mode, setMode] = useState<ViewMode>('preview')
    const [width, setWidth] = useState(DEFAULT_SIZE)
    const [iframeHeight, setIframeHeight] = useState(0)
    const [shouldLoadIframe, setShouldLoadIframe] = useState(false)
    const [cachedHeight, setCachedHeight] = useState<number | null>(null)
    const [isIframeCached, setIsIframeCached] = useState(false)
    // FIX: Added iframeLoaded state so opacity/visibility logic has a reliable signal
    const [iframeLoaded, setIframeLoaded] = useState(false)
    const [loved, setLoved] = useState(false)
    const [reloadKey, setReloadKey] = useState(0)

    const reload = () => {
        setIframeLoaded(false)
        setReloadKey((prev) => prev + 1)
    }

    const terminalCode = `pnpm dlx shadcn@latest add @layeredui/${category}-${titleToNumber(title)}`

    const { copied, copy } = useCopyToClipboard({ code: code as string, title, category, eventName: 'block_copy' })
    const { copied: cliCopied, copy: cliCopy } = useCopyToClipboard({ code: terminalCode, title, category, eventName: 'block_cli_copy' })

    const resizablePanelRef = useRef<ImperativePanelGroupHandle>(null)
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const blockRef = useRef<HTMLDivElement>(null)
    const heartIconRef = useRef<HeartIconHandle>(null)

    const observer = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setShouldLoadIframe(true)
                    observer.current?.disconnect()
                }
            },
            {
                // FIX: Lower threshold (0 vs 0.1) means it fires as soon as even 1px is visible.
                // On mobile, blocks near the fold with threshold: 0.1 could miss the trigger
                // if the element is partially clipped or the viewport is narrow.
                threshold: 0,
                // FIX: Pre-load iframes 600px before they scroll into view on mobile,
                // reducing the white screen gap between scroll and content appearing.
                rootMargin: '600px 0px',
            }
        )

        if (blockRef.current) observer.current.observe(blockRef.current)
        return () => observer.current?.disconnect()
    }, [])

    useEffect(() => {
        const checkCache = async () => {
            try {
                const isCached = await isUrlCached(preview)
                setIsIframeCached(isCached)
                if (isCached) setShouldLoadIframe(true)
            } catch (error) {
                console.error('Error checking cache status:', error)
            }
        }
        checkCache()

        try {
            const cacheKey = getCacheKey(preview)
            const cached = localStorage.getItem(cacheKey)
            if (cached) {
                const { height, timestamp } = JSON.parse(cached)
                if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
                    setCachedHeight(height)
                    setIframeHeight(height)
                    // FIX: If we have a valid cached height, treat it as already loaded
                    setIframeLoaded(true)
                }
            }
        } catch (error) {
            console.error('Error retrieving cache:', error)
        }
    }, [preview])

    useEffect(() => {
        const iframe = iframeRef.current
        if (!iframe || !shouldLoadIframe) return

        let resizeObserver: ResizeObserver | null = null

        const markLoaded = (iframe: HTMLIFrameElement) => {
            try {
                const doc = iframe.contentWindow?.document
                if (!doc || !doc.body) return

                const updateHeight = () => {
                    // Use scrollHeight of the documentElement for the most accurate full-page measurement
                    const contentHeight = doc.documentElement.scrollHeight
                    const safeHeight = Math.max(contentHeight, 224)

                    setIframeHeight(safeHeight)

                    // Update cache with the latest measurement
                    const cacheKey = getCacheKey(preview)
                    localStorage.setItem(cacheKey, JSON.stringify({
                        height: safeHeight,
                        timestamp: Date.now()
                    }))
                }

                // Initial measurement
                updateHeight()

                // Setup ResizeObserver to catch changes after load (animations, images, etc)
                if (resizeObserver) resizeObserver.disconnect()
                resizeObserver = new ResizeObserver(() => {
                    requestAnimationFrame(updateHeight)
                })
                resizeObserver.observe(doc.body)
            } catch (e) {
                console.error('Error accessing iframe content:', e)
            } finally {
                // Always mark loaded regardless of measurement success to ensure visibility
                setIframeLoaded(true)
            }
        }

        // Catch frames that are already complete
        if (iframe.contentDocument?.readyState === 'complete') {
            markLoaded(iframe)
        }

        const handleLoad = () => markLoaded(iframe)
        iframe.addEventListener('load', handleLoad)

        // Safety net: show the iframe after a delay even if events fail
        const fallbackTimer = setTimeout(() => {
            setIframeLoaded(true)
        }, 5000) // Ensure it shows by 5 seconds at the latest if load event fails

        return () => {
            iframe.removeEventListener('load', handleLoad)
            clearTimeout(fallbackTimer)
            if (resizeObserver) resizeObserver.disconnect()
        }
    }, [shouldLoadIframe, preview, reloadKey])

    const handleLove = () => {
        setLoved((prev) => !prev)
        heartIconRef.current?.startAnimation()
    }

    const value = {
        mode, setMode, width, setWidth, iframeHeight, setIframeHeight,
        shouldLoadIframe, setShouldLoadIframe, cachedHeight, isIframeCached,
        iframeLoaded,
        loved, setLoved, reload, reloadKey, title, category, preview, code, terminalCode,
        copied,
        copy: (e?: any) => copy(e),
        cliCopied,
        cliCopy: (e?: any) => cliCopy(e),
        handleLove, heartIconRef,
        resizablePanelRef, iframeRef, blockRef
    }

    return (
        <BlockPreviewContext.Provider value={value}>
            <section className="group mb-16 border-b [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
                {children}
            </section>
        </BlockPreviewContext.Provider>
    )
}

// --- Sub-components ---

function BlockPreviewToolbar() {
    const { mode, setMode, title, width, resizablePanelRef, handleLove, loved, heartIconRef, cliCopy, cliCopied, preview, category, reload, iframeLoaded } = useBlockPreview()

    return (
        <div className="relative border-y">
            {/* Background Grid Lines */}
            <div
                aria-hidden
                className="absolute inset-x-4 -top-14 bottom-0 mx-auto max-w-7xl lg:inset-x-0">
                <div className="to-(--color-border) absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent to-75%"></div>
                <div className="to-(--color-border) absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b from-transparent to-75%"></div>
            </div>

            <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between py-1.5 pl-8 pr-6 md:py-2 lg:pl-6 lg:pr-2">
                <div className="-ml-2 flex items-center gap-2">
                    <div className="flex bg-muted/50 p-1 rounded-lg">
                        <Button
                            onClick={() => setMode('preview')}
                            variant={mode === 'preview' ? 'secondary' : 'ghost'}
                            size="sm"
                            className="h-7 gap-2 rounded-md shadow-none px-2"
                        >
                            <Eye className="size-3.5" />
                            <span className="hidden sm:inline text-xs">Preview</span>
                        </Button>
                        <Button
                            onClick={() => setMode('code')}
                            variant={mode === 'code' ? 'secondary' : 'ghost'}
                            size="sm"
                            className="h-7 gap-2 rounded-md shadow-none px-2"
                        >
                            <Code2 className="size-3.5" />
                            <span className="hidden sm:inline text-xs">Code</span>
                        </Button>
                    </div>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    onClick={reload}
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-muted-foreground hover:text-foreground"
                                >
                                    <RefreshCw className={cn("size-3.5 transition-transform", !iframeLoaded && "animate-spin")} />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Reload Preview</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <Separator orientation="vertical" className="mx-2 hidden h-4 lg:block" />
                    <span className="text-sm font-medium truncate max-w-[150px] md:max-w-none capitalize">{title}</span>
                </div>

                <div className="flex items-center gap-2">
                    {/* Desktop-only: viewport resize controls */}
                    <div className="hidden h-8 items-center gap-1 rounded-lg border bg-background/50 px-1 lg:flex">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className={cn("size-6", width <= SM_SIZE && "bg-muted")}
                                        onClick={() => resizablePanelRef.current?.setLayout([SM_SIZE, 100 - SM_SIZE])}
                                    >
                                        <Smartphone className="size-3" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Mobile</TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className={cn("size-6", width > SM_SIZE && width <= MD_SIZE && "bg-muted")}
                                        onClick={() => resizablePanelRef.current?.setLayout([MD_SIZE, 100 - MD_SIZE])}
                                    >
                                        <Tablet className="size-3" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Tablet</TooltipContent>
                            </Tooltip>

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className={cn("size-6", width > LG_SIZE && "bg-muted")}
                                        onClick={() => resizablePanelRef.current?.setLayout([DEFAULT_SIZE, 0])}
                                    >
                                        <Monitor className="size-3" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>Desktop</TooltipContent>
                            </Tooltip>

                            <Separator orientation="vertical" className="h-4 mx-1" />

                            {/* Desktop: ExternalLink inside the viewport control bar */}
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="ghost" size="icon" className="size-6" asChild>
                                            <a href={preview} target="_blank" rel="noreferrer">
                                                <ExternalLink className="size-3" />
                                            </a>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>Open in New Tab</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </TooltipProvider>
                    </div>

                    {/* Mobile/tablet: icon button "Open in New Tab", always visible below lg */}
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="outline" size="icon" className="size-8 lg:hidden" asChild>
                                    <a href={preview} target="_blank" rel="noreferrer">
                                        <ExternalLink className="size-3.5" />
                                    </a>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Open in New Tab</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <Separator orientation="vertical" className="mx-1 hidden h-4 lg:block" />

                    <div className="flex items-center gap-1.5">
                        <Button
                            onClick={cliCopy}
                            size="sm"
                            className="h-8 gap-2 border-dashed bg-muted/30 px-3 font-mono text-xs hover:bg-muted/50"
                            variant="outline"
                        >
                            {cliCopied ? <Check className="size-3" /> : <Terminal className="size-3" />}
                            <span className="hidden xl:block">shadcn add @layeredui/{category}-{titleToNumber(title)}</span>
                            <span className="xl:hidden">CLI</span>
                        </Button>

                        <OpenInV0Button
                            title={title}
                            category={category}
                            block={`${category}-${titleToNumber(title)}`}
                        />

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        onClick={handleLove}
                                        size="icon"
                                        variant="ghost"
                                        className={cn('size-8 transition-colors', loved && 'text-red-500 bg-red-50/50 dark:bg-red-500/10')}>
                                        <HeartIcon
                                            ref={heartIconRef}
                                            size={14}
                                            filled={loved}
                                            className={cn('transition-colors', loved && 'text-red-500')}
                                        />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>{loved ? 'Loved' : 'Love it'}</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}

function BlockPreviewContent() {
    return (
        <div className="relative">
            {/* Background Grid Lines */}
            <div
                aria-hidden
                className="absolute inset-x-4 -bottom-14 mx-auto h-14 max-w-7xl lg:inset-x-0">
                <div className="from-(--color-border) absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b"></div>
                <div className="from-(--color-border) absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 lg:border-r lg:px-0">
                <BlockPreviewView />
                <BlockPreviewCode />
            </div>
        </div>
    )
}

function BlockPreviewView() {
    // FIX: Consume iframeLoaded instead of relying on cachedHeight/isIframeCached for opacity
    const { mode, resizablePanelRef, setWidth, blockRef, shouldLoadIframe, iframeRef, title, category, cachedHeight, iframeHeight, preview, iframeLoaded, reloadKey } = useBlockPreview()
    const isLarge = useMedia('(min-width: 1024px)')

    if (mode !== 'preview') return null

    // FIX: Compute the effective height — fall back to a safe minimum rather than 0
    const effectiveHeight = cachedHeight || iframeHeight || 0

    return (
        <div className="bg-white dark:bg-transparent">
            <PanelGroup
                direction="horizontal"
                ref={resizablePanelRef}
                onLayout={(layout) => setWidth(layout[0])}
            >
                <Panel id="preview-panel" order={1} defaultSize={DEFAULT_SIZE} minSize={SM_SIZE} className="relative border-x">
                    <div ref={blockRef} className="w-full relative">
                        {/* Show spinner while shouldLoadIframe is true but iframe hasn't finished loading yet */}
                        <AnimatePresence>
                            {shouldLoadIframe && !iframeLoaded && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 z-20 gap-3"
                                >
                                    <RefreshCw className="size-6 animate-spin text-muted-foreground" />
                                    <span className="text-xs font-medium text-muted-foreground animate-pulse">Loading Preview...</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {shouldLoadIframe ? (
                            <iframe
                                // FIX: Key now includes category so React never reuses iframes across categories
                                key={`${category}-${title}-iframe-${reloadKey}`}
                                // FIX: Always use "eager" — we already control lazy loading ourselves
                                // via IntersectionObserver + shouldLoadIframe. The browser's native
                                // loading="lazy" adds an extra unpredictable delay on top of ours,
                                // which is what causes the long white screen on mobile.
                                loading="eager"
                                allowFullScreen
                                ref={iframeRef}
                                title={`${category} ${title}`}
                                // FIX: Always set a pixel height from the CSS variable, using effectiveHeight
                                //      The iframe becomes visible only once iframeLoaded is true
                                className={cn(
                                    'block w-full duration-300 transition-opacity min-h-56',
                                    // FIX: Show iframe once iframeLoaded is true (covers all cases:
                                    //      fresh load, cached height, or service worker cache)
                                    iframeLoaded ? 'opacity-100' : 'opacity-0'
                                )}
                                src={preview}
                                style={{
                                    // FIX: Only apply explicit height once we have a real value;
                                    //      otherwise let min-h-56 hold the space during load
                                    height: effectiveHeight > 0 ? `${effectiveHeight}px` : undefined,
                                }}
                            />
                        ) : (
                            <div className="flex min-h-56 items-center justify-center">
                                <RefreshCw className="size-5 animate-spin text-muted-foreground/50" />
                            </div>
                        )}
                    </div>
                </Panel>
                {isLarge && (
                    <>
                        <PanelResizeHandle className="relative w-2 before:absolute before:inset-0 before:m-auto before:h-12 before:w-1 before:rounded-full before:bg-zinc-300 before:transition-[height,background] hover:before:h-16 hover:before:bg-zinc-400 focus:before:bg-zinc-400 dark:before:bg-zinc-600 dark:hover:before:bg-zinc-500 dark:focus:before:bg-zinc-400" />
                        <Panel id="spacer-panel" order={2} defaultSize={0} minSize={0} className="-mr-[0.5px] ml-px" />
                    </>
                )}
            </PanelGroup>
        </div>
    )
}

function BlockPreviewCode() {
    const { mode, code, iframeHeight, copied, copy } = useBlockPreview()

    if (mode !== 'code') return null

    return (
        <div className="bg-white dark:bg-transparent">
            <div className="relative rounded-xl border bg-zinc-950 overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2">
                    <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider">TSX</span>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    onClick={copy}
                                    size="icon"
                                    variant="ghost"
                                    className="h-7 w-7 text-white/70 hover:text-white hover:bg-white/10">
                                    <AnimatePresence mode="wait" initial={false}>
                                        {copied ? (
                                            <motion.div
                                                key="check"
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.5, opacity: 0 }}
                                                transition={{ duration: 0.1 }}
                                            >
                                                <Check className="size-3.5" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="copy"
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.5, opacity: 0 }}
                                                transition={{ duration: 0.1 }}
                                            >
                                                <Copy className="size-3.5" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Button>
                            </TooltipTrigger>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <CodeBlock
                    code={code as string}
                    lang="tsx"
                    maxHeight={Math.max(iframeHeight, 400)}
                    className="!bg-transparent"
                />
            </div>
        </div>
    )
}

// --- Main Component ---

export interface BlockPreviewProps {
    code?: string
    preview: string
    title: string
    category: string
    previewOnly?: boolean
}

export const BlockPreview: React.FC<BlockPreviewProps> = (props) => {
    return (
        <BlockPreviewProvider {...props}>
            <BlockPreviewToolbar />
            <BlockPreviewContent />
        </BlockPreviewProvider>
    )
}

export default BlockPreview
