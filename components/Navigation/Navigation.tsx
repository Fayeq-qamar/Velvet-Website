"use client"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full px-10 py-5 flex justify-between items-center z-[1000] bg-gradient-to-b from-black/90 to-transparent">
      <div className="flex items-center gap-10">
        <a href="#" className="text-2xl font-bold text-white no-underline">
          <span>velvet</span>
        </a>
        <ul className="hidden md:flex gap-8 list-none">
          <li><a href="#" className="text-white/80 no-underline text-[15px] transition-colors hover:text-white">Pricing</a></li>
          <li><a href="#" className="text-white/80 no-underline text-[15px] transition-colors hover:text-white flex items-center gap-1">
            Features <span className="text-[10px] opacity-60">▼</span>
          </a></li>
          <li><a href="#" className="text-white/80 no-underline text-[15px] transition-colors hover:text-white">About</a></li>
          <li><a href="#" className="text-white/80 no-underline text-[15px] transition-colors hover:text-white">Blog</a></li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <a href="#" className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-md text-white no-underline text-sm transition-all hover:bg-white/15">
          <span className="text-yellow-400">⭐</span>
          <span>Star Us</span>
        </a>
        <div className="flex gap-3">
          <a href="#" className="px-5 py-2 rounded-md no-underline text-sm font-medium transition-all bg-transparent text-white border border-white/20 hover:bg-white/10">
            SIGN IN
          </a>
          <a href="#" className="px-5 py-2 rounded-md no-underline text-sm font-medium transition-all bg-white text-black hover:bg-gray-100">
            JOIN WAITLIST
          </a>
        </div>
      </div>
    </nav>
  )
}