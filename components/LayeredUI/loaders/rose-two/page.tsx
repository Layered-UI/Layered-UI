import { RoseTwoLoader } from '@/components/rose-two-loader'

export default function RoseTwoLoaderDemo() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#050505] text-[#f5f5f5] p-8 gap-12 font-sans">
            <div className="flex flex-col items-center gap-4">
                <div className="w-[min(72vmin,420px)] aspect-square flex items-center justify-center">
                    <RoseTwoLoader size={420} className="text-white" />
                </div>
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold">Rose Two</h1>
                    <p className="text-sm tracking-widest uppercase opacity-60">r = a cos(2θ)</p>
                </div>
            </div>

            <div className="max-w-[720px] w-full p-4 rounded-xl border border-white/10 bg-white/5 font-mono text-xs leading-relaxed text-white/80 whitespace-pre-wrap">
                {`r(t) = (9.2 + 0.60s)(0.72 + 0.28s) cos(2t)\nx(t) = 50 + cos t · r(t) · 3.25\ny(t) = 50 + sin t · r(t) · 3.25`}
            </div>

            <a
                href="https://paidax01.github.io/math-curve-loaders/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 rounded-full border border-white/15 bg-white/5 text-sm transition-all hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5"
            >
                View All
            </a>
        </div>
    )
}
