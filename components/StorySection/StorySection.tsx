"use client"

import { useEffect, useRef } from "react"

export function StorySection() {
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
      className="relative z-10 min-h-screen text-white overflow-hidden rounded-t-[40px] shadow-2xl card-stack-section" 
      style={{
        background: 'linear-gradient(135deg, #1a0d2e 0%, #2d1b69 50%, #0f0f23 100%)',
        marginTop: '-40px',
        boxShadow: '0 -20px 60px rgba(0, 0, 0, 0.5)'
      }}>
      {/* Background Effects - Enhanced with Purple Theme */}
      <div className="absolute inset-0 overflow-hidden">        
        {/* Central Atmospheric Light - Purple Theme */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] blur-[100px] animate-rotate-slow"
          style={{
            background: 'radial-gradient(circle, rgba(139, 69, 199, 0.6) 0%, rgba(88, 28, 135, 0.5) 15%, rgba(59, 7, 100, 0.4) 30%, rgba(30, 27, 75, 0.3) 50%, transparent 70%)'
          }}
        />
        
        {/* Secondary Light Ring - Purple */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] blur-[60px] animate-pulse-gentle"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(124, 58, 237, 0.3) 25%, rgba(88, 28, 135, 0.2) 50%, transparent 70%)'
          }}
        />
        
        {/* Light Rays - Purple Conic */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] blur-[80px] animate-rotate-reverse"
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(139, 69, 199, 0.12), transparent, rgba(168, 85, 247, 0.1), transparent, rgba(124, 58, 237, 0.08), transparent)'
          }}
        />
        
        {/* Breathing Pulse Layer - Deep Purple */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[40px] animate-pulse-gentle"
          style={{
            background: 'radial-gradient(circle, rgba(88, 28, 135, 0.5) 0%, rgba(59, 7, 100, 0.4) 30%, rgba(30, 27, 75, 0.3) 60%, transparent 80%)'
          }}
        />
        
        {/* Additional Central Glow - Bright Purple */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] blur-[20px] animate-pulse-gentle opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(139, 69, 199, 0.4) 40%, transparent 70%)'
          }}
        />
        
        {/* Top Corner Glow - Purple Blend */}
        <div 
          className="absolute top-0 left-0 w-[400px] h-[400px] blur-[60px] opacity-40"
          style={{
            background: 'radial-gradient(circle at bottom right, rgba(139, 69, 199, 0.3) 0%, rgba(88, 28, 135, 0.2) 30%, rgba(30, 27, 75, 0.1) 50%, transparent 70%)'
          }}
        />
        
        {/* Bottom Right Corner Glow - Dark Purple */}
        <div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] blur-[80px] opacity-50"
          style={{
            background: 'radial-gradient(circle at top left, rgba(59, 7, 100, 0.4) 0%, rgba(30, 27, 75, 0.3) 30%, rgba(15, 15, 35, 0.2) 50%, transparent 70%)'
          }}
        />
      </div>

      {/* Floating Elements - EXACT same as Hero */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing Floating Orbs with Faded Edges */}
        <div className="absolute top-[80%] left-[80%] w-10 h-10 bg-indigo-400 rounded-full blur-[1px] shadow-[0_0_50px_rgba(99,102,241,0.9)] animate-float-fast opacity-70"></div>
        <div className="absolute top-[85%] right-[60%] w-6 h-6 bg-emerald-400 rounded-full blur-[1px] shadow-[0_0_36px_rgba(52,211,153,0.9)] animate-float-slow opacity-70"></div>
        
        {/* Glowing Geometric Shapes */}
        <div className="absolute top-[25%] right-[25%] w-8 h-8 border-2 border-purple-400 rotate-45 animate-spin-slow shadow-[0_0_25px_rgba(168,85,247,0.8)] opacity-60"></div>
        <div className="absolute top-[40%] left-[85%] w-7 h-7 bg-gradient-to-br from-purple-400 to-blue-400 rotate-12 animate-bounce-slow shadow-[0_0_30px_rgba(139,69,199,0.7)] opacity-70"></div>
        <div className="absolute top-[55%] left-[25%] w-4 h-10 bg-cyan-400/60 rotate-45 animate-spin-slow shadow-[0_0_20px_rgba(34,211,238,0.8)] opacity-60"></div>
        
        {/* Enhanced Star Dust Effect */}
        <div className="absolute top-[10%] left-[30%] w-2 h-2 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)] animate-twinkle opacity-90"></div>
        <div className="absolute top-[35%] right-[40%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)] animate-twinkle-delay opacity-85"></div>
        <div className="absolute top-[65%] left-[70%] w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_25px_rgba(255,255,255,1)] animate-twinkle opacity-95"></div>
      </div>

      {/* Story Content - Centered Modern Layout */}
      <div className="relative z-10 min-h-screen px-10 flex items-center justify-center pt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-[clamp(48px,10vw,96px)] font-bold leading-[0.9] mb-16 tracking-tight">
            <span className="bg-gradient-to-r from-purple-200 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient-shift">
              Your brain isn't broken.<br />
              Your tools are.
            </span>
          </h1>
          
          {/* Problem vs Solution Cards - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {/* Problem Column */}
            <div className="bg-white/5 backdrop-blur-md border border-red-400/20 p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-white/10 hover:border-red-400/30 hover:-translate-y-1">
              <div className="text-4xl mb-4">😵‍💫</div>
              <h3 className="text-xl font-semibold text-white mb-4">The Daily Struggle</h3>
              <p className="text-white/80 leading-[1.5] font-light">
                "I'll just quickly check email..." <br />
                <em className="text-white/60">*3 hours and 47 browser tabs later*</em> <br />
                "Wait, what was I supposed to be doing?"
              </p>
            </div>

            {/* Solution Column */}
            <div className="bg-white/5 backdrop-blur-md border border-purple-400/20 p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-white/10 hover:border-purple-400/30 hover:-translate-y-1">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-xl font-semibold text-white mb-4">What You Deserve</h3>
              <p className="text-white/80 leading-[1.5] font-light">
                An AI companion that notices when you're spiraling,
                breaks big scary tasks into tiny victories,
                and celebrates every win along the way.
              </p>
            </div>
          </div>

          {/* Stats Section - Centered */}
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <div className="text-center">
              <span className="block text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">3.2 minutes</span>
              <span className="text-sm text-white/70 font-medium">Early spiral detection</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">94.2%</span>
              <span className="text-sm text-white/70 font-medium">Task completion rate</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">2-5 min</span>
              <span className="text-sm text-white/70 font-medium">Perfect micro-steps</span>
            </div>
          </div>

          {/* CTA Section - Centered */}
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl leading-[1.4] text-white/90 mb-12 font-light">
              Ready for tools that finally understand your brain?
            </p>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center justify-center gap-3 px-12 py-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-md border border-purple-400/30 text-white rounded-full text-lg font-semibold transition-all duration-300 shadow-[0_8px_32px_rgba(168,85,247,0.3)] hover:from-purple-500/40 hover:to-pink-500/40 hover:shadow-[0_12px_40px_rgba(168,85,247,0.4)] hover:-translate-y-1"
            >
              <span>Join 2,847 minds on the waitlist</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}