"use client"

import { useEffect, useRef } from "react"

export function UnifiedBrainSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={sectionRef}
      className="relative z-70 min-h-screen text-white overflow-hidden rounded-t-[40px] shadow-2xl card-stack-section" 
      style={{
        background: 'linear-gradient(135deg, #581c87 0%, #7c3aed 30%, #a855f7 70%, #d8b4fe 100%)',
        marginTop: '-40px',
        boxShadow: '0 -20px 60px rgba(0, 0, 0, 0.9)'
      }}>
      
      {/* Background Effects - Warm Purple/Pink Theme */}
      <div className="absolute inset-0 overflow-hidden">        
        {/* Central Atmospheric Light - Purple Theme */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] blur-[100px] animate-rotate-slow"
          style={{
            background: 'radial-gradient(circle, rgba(216, 180, 254, 0.4) 0%, rgba(168, 85, 247, 0.3) 15%, rgba(124, 58, 237, 0.2) 30%, rgba(88, 28, 135, 0.1) 50%, transparent 70%)'
          }}
        />
        
        {/* Secondary Light Ring - Violet */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] blur-[60px] animate-pulse-gentle"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(124, 58, 237, 0.2) 25%, rgba(88, 28, 135, 0.1) 50%, transparent 70%)'
          }}
        />
        
        {/* Floating Elements - Neural Theme */}
        <div className="absolute top-[18%] right-[15%] w-8 h-8 border-2 border-purple-300/40 rounded-full animate-pulse shadow-[0_0_25px_rgba(216,180,254,0.4)] opacity-60"></div>
        <div className="absolute top-[80%] left-[8%] w-6 h-6 bg-violet-400/30 rounded-full animate-bounce-slow shadow-[0_0_20px_rgba(168,85,247,0.3)] opacity-50"></div>
        
        {/* Neural Network Stars */}
        <div className="absolute top-[25%] left-[22%] w-2 h-2 bg-white/70 rounded-full shadow-[0_0_18px_rgba(255,255,255,0.8)] animate-twinkle opacity-60"></div>
        <div className="absolute top-[70%] right-[28%] w-1.5 h-1.5 bg-white/60 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.7)] animate-twinkle-delay opacity-70"></div>
      </div>

      {/* Unified Brain Content */}
      <div className="relative z-10 min-h-screen px-10 flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-200 text-sm font-medium mb-6">
                  UNIFIED BRAIN SYSTEM
                </span>
              </div>
              
              <h2 className="text-[clamp(40px,6vw,72px)] font-bold leading-[0.9] mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-purple-200 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                  An AI that<br />
                  truly learns you
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl leading-[1.4] text-white/90 mb-8 font-light max-w-[600px]">
                Builds your unique <span className="bg-purple-500/20 px-2 py-1 rounded-md text-purple-200 font-medium">neural map</span> from <strong className="text-purple-200">1,832+ behavioral patterns</strong>. Discovers you're <span className="bg-violet-500/20 px-2 py-1 rounded-md text-violet-200 font-medium">67% more focused at 9-11 AM</span>, learns that 5-minute breaks work best, adapts everything to your <span className="bg-pink-500/20 px-2 py-1 rounded-md text-pink-200 font-medium">brain's rhythm</span>.
              </p>
              
              <p className="text-lg text-white/80 mb-10 font-light max-w-[600px] italic">
                <span className="bg-gradient-to-r from-purple-400/20 to-violet-400/20 px-3 py-1 rounded-full text-purple-200 font-medium">247 patterns learned</span> and growing. <span className="bg-gradient-to-r from-violet-400/20 to-pink-400/20 px-3 py-1 rounded-full text-violet-200 font-medium">94.2% success rate</span>.
              </p>

              {/* Learning Stats */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10 border border-purple-300/20 max-w-[600px]">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-purple-200 mb-1">67%</span>
                    <span className="text-sm text-white/70 font-medium">More focused 9-11 AM</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-purple-200 mb-1">5 min</span>
                    <span className="text-sm text-white/70 font-medium">Optimal break length</span>
                  </div>
                </div>
              </div>

              {/* Main Stats */}
              <div className="flex flex-wrap gap-8 mb-10">
                <div className="text-left">
                  <span className="block text-4xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-1">1,832+</span>
                  <span className="text-sm text-white/70 font-medium">Behavioral patterns</span>
                </div>
                <div className="text-left">
                  <span className="block text-4xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-1">247</span>
                  <span className="text-sm text-white/70 font-medium">Patterns learned</span>
                </div>
                <div className="text-left">
                  <span className="block text-4xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-1">94.2%</span>
                  <span className="text-sm text-white/70 font-medium">Success rate</span>
                </div>
              </div>
              
            </div>

            {/* Right: Behavioral Analysis Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
              <div className="relative transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-3 border border-white/5 shadow-2xl">
                  <img 
                    src="/behavioral-analysis.png" 
                    alt="Velvet's Behavioral Analysis dashboard showing focus patterns and productivity insights"
                    className="rounded-2xl shadow-2xl w-full max-w-[500px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}