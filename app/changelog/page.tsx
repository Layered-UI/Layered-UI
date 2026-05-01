import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { CheckCircle2, PlusCircle, ArrowUpCircle } from 'lucide-react'

const changelogData = [
    {
        date: 'May 1, 2026',
        version: 'v1.2.0',
        changes: [
            {
                type: 'Added',
                description: 'New reload button in BlockPreview toolbar to refresh iframe content without page reload.',
                icon: <PlusCircle className="size-4 text-blue-500" />,
            },
            {
                type: 'Improved',
                description: 'Optimized block loading performance with better intersection observer margins and a 5-second forced loading fallback.',
                icon: <ArrowUpCircle className="size-4 text-green-500" />,
            },
            {
                type: 'Fixed',
                description: 'Resolved a TypeError in useClipboard hook when navigator.clipboard is undefined (non-secure contexts). Added fallback copy mechanism.',
                icon: <CheckCircle2 className="size-4 text-orange-500" />,
            },
            {
                type: 'Improved',
                description: 'Enhanced loading screen with prominent animations and progress labels for a more premium feel.',
                icon: <ArrowUpCircle className="size-4 text-green-500" />,
            },
        ],
    },
    {
        date: 'April 25, 2026',
        version: 'v1.1.0',
        changes: [
            {
                type: 'Added',
                description: 'Initial release of Snippets collection starting with premium button designs.',
                icon: <PlusCircle className="size-4 text-blue-500" />,
            },
            {
                type: 'Improved',
                description: 'Dark mode styling across all components for better contrast and accessibility.',
                icon: <ArrowUpCircle className="size-4 text-green-500" />,
            },
        ],
    },
    {
        date: 'April 15, 2026',
        version: 'v1.0.0',
        changes: [
            {
                type: 'Added',
                description: 'Official launch of Layered UI with initial set of Blocks: Hero, Features, and Pricing.',
                icon: <PlusCircle className="size-4 text-blue-500" />,
            },
        ],
    },
]

export default function ChangelogPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background font-sans">
            <SiteHeader />
            
            <main className="flex-1">
                {/* Hero Section */}
                <div className="border-b bg-muted/30 py-16 lg:py-24">
                    <div className="mx-auto max-w-7xl px-4 lg:px-8">
                        <div className="flex flex-col gap-4">
                            <Badge variant="outline" className="w-fit border-primary/20 text-primary bg-primary/5 px-3 py-1">
                                Updates
                            </Badge>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
                                Changelog
                            </h1>
                            <p className="max-w-2xl text-lg text-muted-foreground">
                                Stay up to date with the latest features, improvements, and bug fixes for Layered UI.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Changelog Content */}
                <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-24">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-0 lg:left-[160px] top-0 bottom-0 w-px bg-border hidden sm:block" />

                        <div className="flex flex-col gap-16 lg:gap-24">
                            {changelogData.map((item, index) => (
                                <div key={item.version} className="relative flex flex-col lg:flex-row gap-8 lg:gap-0">
                                    {/* Date Column */}
                                    <div className="lg:w-[160px] lg:pr-12">
                                        <div className="sticky top-24">
                                            <div className="hidden lg:block absolute -right-[5px] top-1.5 size-2 rounded-full bg-border border-4 border-background ring-4 ring-background" />
                                            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                                {item.date}
                                            </span>
                                            <div className="mt-1">
                                                <Badge variant="secondary" className="font-mono text-xs">
                                                    {item.version}
                                                </Badge>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Changes Column */}
                                    <div className="flex-1 lg:pl-16">
                                        <div className="space-y-8">
                                            {item.changes.map((change, cIndex) => (
                                                <div key={cIndex} className="group flex gap-4 p-4 rounded-xl border bg-card hover:bg-muted/30 transition-colors duration-200">
                                                    <div className="mt-1 shrink-0">
                                                        {change.icon}
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className={cn(
                                                                "text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded",
                                                                change.type === 'Added' && "bg-blue-500/10 text-blue-500 border border-blue-500/20",
                                                                change.type === 'Improved' && "bg-green-500/10 text-green-500 border border-green-500/20",
                                                                change.type === 'Fixed' && "bg-orange-500/10 text-orange-500 border border-orange-500/20"
                                                            )}>
                                                                {change.type}
                                                            </span>
                                                        </div>
                                                        <p className="text-foreground leading-relaxed">
                                                            {change.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <SiteFooter />
        </div>
    )
}
