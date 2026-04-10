'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { MoonIcon } from '@/components/animation-logos/moon-icon'
import { SunIcon } from '@/components/animation-logos/sun-icon'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === 'd') {
                setTheme(theme === 'dark' ? 'light' : 'dark')
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [theme, setTheme])

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        variant="ghost"
                        className="size-8 rounded-full"
                    >
                        {mounted && (
                            theme === 'dark'
                                ? <SunIcon size={20} />
                                : <MoonIcon size={20} />
                        )}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Toggle Theme (D)</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}