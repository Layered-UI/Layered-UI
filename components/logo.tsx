import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn('size-7 w-7', className)}
            viewBox="0 0 489 441"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect 
                x="10" 
                y="10" 
                width="322" 
                height="297" 
                rx="41" 
                stroke="currentColor" 
                strokeWidth="20"
            />
            <rect 
                x="157" 
                y="134" 
                width="322" 
                height="297" 
                rx="41" 
                stroke="currentColor" 
                strokeWidth="20"
            />
            <path 
                d="M167 177C167 154.356 185.356 136 208 136H327V259C327 281.091 309.091 299 287 299H167V177Z" 
                fill="currentColor"
            />
        </svg>
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn('size-7 w-7', className)}
            viewBox="0 0 489 441"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect 
                x="10" 
                y="10" 
                width="322" 
                height="297" 
                rx="41" 
                stroke="currentColor" 
                strokeWidth="20"
            />
            <rect 
                x="157" 
                y="134" 
                width="322" 
                height="297" 
                rx="41" 
                stroke="currentColor" 
                strokeWidth="20"
            />
            <path 
                d="M167 177C167 154.356 185.356 136 208 136H327V259C327 281.091 309.091 299 287 299H167V177Z" 
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    )
}