import Link from 'next/link';

export default function CredentialsHub() {
  return (
    <div className="flex flex-col h-full justify-between">
      {/* Top Subsection: CV */}
      <div className="pb-6 border-b border-zinc-800/50">
        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">Personnel File</h3>
        <a 
          href="/my-cv.pdf" 
          download
          className="flex items-center justify-between w-full p-4 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600/20 transition-all group"
        >
          <span className="font-semibold">Download My CV</span>
          <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
      </div>

      {/* Bottom Subsection: Page Link */}
      <div className="pt-6">
        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">Credentials</h3>
        <Link href="/credentials" className="group block">
          <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-800 hover:border-zinc-600 transition-all">
            <span className="text-zinc-300">View My Certificates</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </Link>
      </div>
    </div>
  );
}