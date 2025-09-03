"use client"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full px-10 py-5 flex justify-between items-center z-[1000] bg-gradient-to-b from-black/90 to-transparent">
      <div></div>
      <div className="flex items-center">
        <img 
          src="/velvet-logo.jpeg" 
          alt="Velvet Logo"
          className="h-36 w-auto"
        />
      </div>
    </nav>
  )
}