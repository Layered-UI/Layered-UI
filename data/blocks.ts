import fs from 'fs'
import path from 'path'

export interface Block {
    slug: string
    title: string
    category: string
    preview: string
    code: Promise<string>
    relatedCode?: { label: string; code: string }[]
}

async function loadCode(filePath: string): Promise<string> {
    const fullPath = path.join(process.cwd(), filePath)
    return fs.promises.readFile(fullPath, 'utf-8')
}

export const blocks: Block[] = [
    {
        slug: 'hero-section',
        title: 'one',
        category: 'hero-section',
        preview: '/preview/hero-section/one',
        get code() { return loadCode('app/preview/hero-section/one/page.tsx') },
    },
    {
        slug: 'hero-section',
        title: 'two',
        category: 'hero-section',
        preview: '/preview/hero-section/two',
        get code() { return loadCode('app/preview/hero-section/two/page.tsx') },
    },
    {
        slug: 'hero-section',
        title: 'three',
        category: 'hero-section',
        preview: '/preview/hero-section/three',
        get code() { return loadCode('app/preview/hero-section/three/page.tsx') },
    },

    {
        slug: 'navbar',
        title: 'one',
        category: 'navbar',
        preview: '/preview/navbar/one',
        get code() { return loadCode('app/preview/navbar/one/page.tsx') },
    },
    {
        slug: 'navbar',
        title: 'two',
        category: 'navbar',
        preview: '/preview/navbar/two',
        get code() { return loadCode('app/preview/navbar/two/page.tsx') },
    },
    {
        slug: 'navbar',
        title: 'three',
        category: 'navbar',
        preview: '/preview/navbar/three',
        get code() { return loadCode('app/preview/navbar/three/page.tsx') },
    },

    {
        slug: 'logo-cloud',
        title: 'one',
        category: 'logo-cloud',
        preview: '/preview/logo-cloud/one',
        get code() { return loadCode('app/preview/logo-cloud/one/page.tsx') },
    },
    {
        slug: 'logo-cloud',
        title: 'five',
        category: 'logo-cloud',
        preview: '/preview/logo-cloud/five',
        get code() { return loadCode('app/preview/logo-cloud/five/page.tsx') },
    },
    {
        slug: 'logo-cloud',
        title: 'six',
        category: 'logo-cloud',
        preview: '/preview/logo-cloud/six',
        get code() { return loadCode('app/preview/logo-cloud/six/page.tsx') },
    },

    {
        slug: 'features',
        title: 'one',
        category: 'features',
        preview: '/preview/features/one',
        get code() { return loadCode('app/preview/features/one/page.tsx') },
    },
    {
        slug: 'features',
        title: 'two',
        category: 'features',
        preview: '/preview/features/two',
        get code() { return loadCode('app/preview/features/two/page.tsx') },
    },
    {
        slug: 'features',
        title: 'four',
        category: 'features',
        preview: '/preview/features/four',
        get code() { return loadCode('app/preview/features/four/page.tsx') },
    },

    {
        slug: 'how-it-works',
        title: 'one',
        category: 'how-it-works',
        preview: '/preview/how-it-works/one',
        get code() { return loadCode('app/preview/how-it-works/one/page.tsx') },
    },

    {
        slug: 'integrations',
        title: 'one',
        category: 'integrations',
        preview: '/preview/integrations/one',
        get code() { return loadCode('app/preview/integrations/one/page.tsx') },
    },
    {
        slug: 'integrations',
        title: 'two',
        category: 'integrations',
        preview: '/preview/integrations/two',
        get code() { return loadCode('app/preview/integrations/two/page.tsx') },
    },

    {
        slug: 'bento',
        title: 'one',
        category: 'bento',
        preview: '/preview/bento/one',
        get code() { return loadCode('app/preview/bento/one/page.tsx') },
    },

    {
        slug: 'stats',
        title: 'one',
        category: 'stats',
        preview: '/preview/stats/one',
        get code() { return loadCode('app/preview/stats/one/page.tsx') },
    },
    {
        slug: 'stats',
        title: 'five',
        category: 'stats',
        preview: '/preview/stats/five',
        get code() { return loadCode('app/preview/stats/five/page.tsx') },
    },
    {
        slug: 'stats',
        title: 'six',
        category: 'stats',
        preview: '/preview/stats/six',
        get code() { return loadCode('app/preview/stats/six/page.tsx') },
    },

    {
        slug: 'team',
        title: 'four',
        category: 'team',
        preview: '/preview/team/four',
        get code() { return loadCode('app/preview/team/four/page.tsx') },
    },

    {
        slug: 'testimonials',
        title: 'one',
        category: 'testimonials',
        preview: '/preview/testimonials/one',
        get code() { return loadCode('app/preview/testimonials/one/page.tsx') },
    },
    {
        slug: 'testimonials',
        title: 'six',
        category: 'testimonials',
        preview: '/preview/testimonials/six',
        get code() { return loadCode('app/preview/testimonials/six/page.tsx') },
    },
    {
        slug: 'testimonials',
        title: 'eight',
        category: 'testimonials',
        preview: '/preview/testimonials/eight',
        get code() { return loadCode('app/preview/testimonials/eight/page.tsx') },
    },
    {
        slug: 'testimonials',
        title: 'nine',
        category: 'testimonials',
        preview: '/preview/testimonials/nine',
        get code() { return loadCode('app/preview/testimonials/nine/page.tsx') },
    },

    {
        slug: 'footer',
        title: 'two',
        category: 'footer',
        preview: '/preview/footer/two',
        get code() { return loadCode('app/preview/footer/two/page.tsx') },
    },
    {
        slug: 'footer',
        title: 'three',
        category: 'footer',
        preview: '/preview/footer/three',
        get code() { return loadCode('app/preview/footer/three/page.tsx') },
    },
    {
        slug: 'footer',
        title: 'five',
        category: 'footer',
        preview: '/preview/footer/five',
        get code() { return loadCode('app/preview/footer/five/page.tsx') },
    },
    {
        slug: 'footer',
        title: 'six',
        category: 'footer',
        preview: '/preview/footer/six',
        get code() { return loadCode('app/preview/footer/six/page.tsx') },
    },

    {
        slug: 'pricing',
        title: 'one',
        category: 'pricing',
        preview: '/preview/pricing/one',
        get code() { return loadCode('app/preview/pricing/one/page.tsx') },
    },
    {
        slug: 'pricing',
        title: 'two',
        category: 'pricing',
        preview: '/preview/pricing/two',
        get code() { return loadCode('app/preview/pricing/two/page.tsx') },
    },
    {
        slug: 'pricing',
        title: 'three',
        category: 'pricing',
        preview: '/preview/pricing/three',
        get code() { return loadCode('app/preview/pricing/three/page.tsx') },
    },
    {
        slug: 'pricing',
        title: 'four',
        category: 'pricing',
        preview: '/preview/pricing/four',
        get code() { return loadCode('app/preview/pricing/four/page.tsx') },
    },

    {
        slug: 'faqs',
        title: 'one',
        category: 'faqs',
        preview: '/preview/faqs/one',
        get code() { return loadCode('app/preview/faqs/one/page.tsx') },
    },
    {
        slug: 'faqs',
        title: 'two',
        category: 'faqs',
        preview: '/preview/faqs/two',
        get code() { return loadCode('app/preview/faqs/two/page.tsx') },
    },
    {
        slug: 'faqs',
        title: 'three',
        category: 'faqs',
        preview: '/preview/faqs/three',
        get code() { return loadCode('app/preview/faqs/three/page.tsx') },
    },

    {
        slug: 'comparator',
        title: 'one',
        category: 'comparator',
        preview: '/preview/comparator/one',
        get code() { return loadCode('app/preview/comparator/one/page.tsx') },
    },

    {
        slug: 'cta',
        title: 'one',
        category: 'cta',
        preview: '/preview/cta/one',
        get code() { return loadCode('app/preview/cta/one/page.tsx') },
    },
    {
        slug: 'cta',
        title: 'two',
        category: 'cta',
        preview: '/preview/cta/two',
        get code() { return loadCode('app/preview/cta/two/page.tsx') },
    },
    {
        slug: 'cta',
        title: 'five',
        category: 'cta',
        preview: '/preview/cta/five',
        get code() { return loadCode('app/preview/cta/five/page.tsx') },
    },

    {
        slug: 'login',
        title: 'one',
        category: 'login',
        preview: '/preview/login/one',
        get code() { return loadCode('app/preview/login/one/page.tsx') },
    },
    {
        slug: 'login',
        title: 'two',
        category: 'login',
        preview: '/preview/login/two',
        get code() { return loadCode('app/preview/login/two/page.tsx') },
    },

    {
        slug: '404',
        title: 'one',
        category: '404',
        preview: '/preview/404/one',
        get code() { return loadCode('app/preview/404/one/page.tsx') },
    },

]

export const categories = [...new Set(blocks.map((b) => b.category))]
