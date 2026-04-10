'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export const SiteHeader = () => {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const isActive = (path: string) => {
        return pathname === path || pathname.startsWith(`${path}/`)
    }

    const closeMobileMenu = () => setMobileMenuOpen(false)

    return (
        <header className="border-b dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
            <div className="mx-auto flex max-w-7xl justify-between px-4 py-4 sm:px-6 lg:px-4">
                {/* Logo & Desktop Navigation */}
                <div className="flex gap-6">
                    <Link
                        href="/"
                        className="flex w-fit items-center gap-2"
                        onClick={closeMobileMenu}>
                        <Logo />
                        <span className="sr-only font-bold">ns UI</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-1 items-center">
                        <Button asChild size="sm" variant="ghost" className={cn('text-foreground/75 rounded-full', isActive('/hero-section') && 'text-foreground')}>
                            <Link href="/hero-section" className="!text-sm">
                                Blocks
                            </Link>
                        </Button>
                        <div className="relative flex items-center">
                            <Button
                                asChild
                                size="sm"
                                variant="ghost"
                                className={cn('text-foreground/75 rounded-full', isActive('/snippets/button') && 'text-foreground')}>
                                <Link href="/snippets/button" className="!text-sm">
                                    Snippets
                                </Link>
                            </Button>
                            <span className="rounded-full border border-blue-300 bg-blue-200 px-1.5 py-px text-xs text-blue-900 dark:border-red-700 dark:bg-red-500/20 dark:text-red-50">New</span>
                        </div>
                        <Button asChild size="sm" variant="ghost" className={cn('text-foreground/75 rounded-full', isActive('/doc') && 'text-foreground')}>
                            <Link href="/doc" className="!text-sm">
                                Doc
                            </Link>
                        </Button>
                    </nav>
                </div>

                {/* Desktop Right Actions */}
                <div className="hidden md:flex -mr-2 items-center">
                    <Button
                        asChild
                        variant="link"
                        className="text-foreground decoration-primary gap-1">
                        <Link
                            href="https://github.com/KingTroy125/layered-blocks"
                            target="_blank"
                            className="text-sm">
                            GitHub
                            <ArrowUpRight className="!size-3.5 opacity-50" />
                        </Link>
                    </Button>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button & Theme Toggle */}
                <div className="flex md:hidden items-center gap-2">
                    <ThemeToggle />
                    <Button
                        variant="ghost"
                        size="sm"
                        className="h-9 w-9 p-0"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu">
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t">
                    <nav className="flex flex-col px-4 py-3 space-y-1">
                        <Button
                            asChild
                            size="sm"
                            variant="ghost"
                            className={cn('text-foreground/75 justify-start rounded-lg', isActive('/hero-section') && 'text-foreground bg-accent')}
                            onClick={closeMobileMenu}>
                            <Link href="/hero-section" className="!text-sm">
                                Blocks
                            </Link>
                        </Button>
                        <div className="flex items-center gap-2">
                            <Button
                                asChild
                                size="sm"
                                variant="ghost"
                                className={cn('text-foreground/75 justify-start rounded-lg flex-1', isActive('/snippets/button') && 'text-foreground bg-accent')}
                                onClick={closeMobileMenu}>
                                <Link href="/snippets/button" className="!text-sm">
                                    Snippets
                                </Link>
                            </Button>
                            <span className="rounded-full border border-blue-300 bg-blue-200 px-1.5 py-px text-xs text-blue-900 dark:border-red-700 dark:bg-red-500/20 dark:text-red-50">New</span>
                        </div>
                        {/* Added missing Doc link */}
                        <Button
                            asChild
                            size="sm"
                            variant="ghost"
                            className={cn('text-foreground/75 justify-start rounded-lg', isActive('/doc') && 'text-foreground bg-accent')}
                            onClick={closeMobileMenu}>
                            <Link href="/doc" className="!text-sm">
                                Doc
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-foreground/75 justify-start gap-1 rounded-lg"
                            onClick={closeMobileMenu}>
                            <Link
                                href="https://github.com/KingTroy125/layered-blocks"
                                target="_blank"
                                className="text-sm">
                                GitHub
                                <ArrowUpRight className="!size-3.5 opacity-50" />
                            </Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}