import CategoryNavigation from '@/components/blocks-nav'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { categories, blocks } from '@/data/blocks'

export default function CategoryLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <SiteHeader />
            <CategoryNavigation 
                currentKitFullName="default"
                currentKitShortName="default"
                allCategories={categories} 
                blocks={blocks.map((b) => ({
                    slug: b.slug,
                    title: b.title,
                    category: b.category,
                    preview: b.preview,
                })) as typeof blocks}
            />
            <main>{children}</main>

            <SiteFooter />
        </>
    )
}
