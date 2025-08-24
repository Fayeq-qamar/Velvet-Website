"use client"

import { Navigation } from "components/Navigation/Navigation"

export function HeroSection() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">        
        {/* Central Atmospheric Light */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] blur-[100px] animate-rotate-slow"
          style={{
            background: 'radial-gradient(circle, rgba(100, 150, 255, 0.8) 0%, rgba(60, 100, 255, 0.6) 15%, rgba(30, 60, 200, 0.4) 30%, rgba(100, 80, 255, 0.2) 50%, transparent 70%)'
          }}
        />
        
        {/* Secondary Light Ring */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] blur-[60px] animate-pulse-gentle"
          style={{
            background: 'radial-gradient(circle, rgba(120, 100, 255, 0.5) 0%, rgba(80, 120, 255, 0.4) 25%, rgba(60, 140, 255, 0.2) 50%, transparent 70%)'
          }}
        />
        
        {/* Light Rays */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] blur-[80px] animate-rotate-reverse"
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(100, 150, 255, 0.15), transparent, rgba(120, 100, 255, 0.15), transparent, rgba(80, 120, 255, 0.12), transparent)'
          }}
        />
        
        {/* Breathing Pulse Layer */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[40px] animate-pulse-gentle"
          style={{
            background: 'radial-gradient(circle, rgba(140, 120, 255, 0.7) 0%, rgba(100, 150, 255, 0.5) 30%, rgba(80, 120, 255, 0.3) 60%, transparent 80%)'
          }}
        />
        
        {/* Additional Central Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] blur-[20px] animate-pulse-gentle opacity-80"
          style={{
            background: 'radial-gradient(circle, rgba(160, 140, 255, 0.8) 0%, rgba(120, 160, 255, 0.6) 40%, transparent 70%)'
          }}
        />
        
        {/* Top Left Corner Glow */}
        <div 
          className="absolute top-0 left-0 w-[400px] h-[400px] blur-[60px] opacity-60"
          style={{
            background: 'radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.4) 0%, rgba(139, 69, 199, 0.3) 30%, rgba(99, 102, 241, 0.2) 50%, transparent 70%)'
          }}
        />
        
        {/* Bottom Right Corner Glow */}
        <div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] blur-[80px] opacity-80"
          style={{
            background: 'radial-gradient(circle at top left, rgba(59, 130, 246, 0.6) 0%, rgba(34, 211, 238, 0.5) 30%, rgba(139, 69, 199, 0.4) 50%, rgba(99, 102, 241, 0.2) 70%, transparent 85%)'
          }}
        />
      </div>

      {/* Floating Elements */}
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
        <div className="absolute top-[90%] right-[80%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_18px_rgba(255,255,255,1)] animate-twinkle-delay opacity-80"></div>
        <div className="absolute top-[45%] left-[45%] w-2 h-2 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)] animate-twinkle opacity-90"></div>
        <div className="absolute top-[25%] left-[75%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_16px_rgba(255,255,255,1)] animate-twinkle-delay opacity-85"></div>
        <div className="absolute top-[75%] left-[35%] w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_22px_rgba(255,255,255,1)] animate-twinkle opacity-95"></div>
        <div className="absolute top-[15%] right-[85%] w-2 h-2 bg-white rounded-full shadow-[0_0_19px_rgba(255,255,255,1)] animate-twinkle-delay opacity-90"></div>
        <div className="absolute top-[85%] left-[55%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_17px_rgba(255,255,255,1)] animate-twinkle opacity-85"></div>
        <div className="absolute top-[50%] right-[30%] w-2 h-2 bg-white rounded-full shadow-[0_0_21px_rgba(255,255,255,1)] animate-twinkle-delay opacity-90"></div>
        <div className="absolute top-[20%] left-[50%] w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_24px_rgba(255,255,255,1)] animate-twinkle opacity-95"></div>
        <div className="absolute top-[95%] right-[45%] w-2 h-2 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)] animate-twinkle-delay opacity-90"></div>
        <div className="absolute top-[12%] left-[80%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_16px_rgba(255,255,255,1)] animate-twinkle opacity-85"></div>
        <div className="absolute top-[38%] left-[20%] w-2 h-2 bg-white rounded-full shadow-[0_0_19px_rgba(255,255,255,1)] animate-twinkle-delay opacity-90"></div>
        <div className="absolute top-[62%] right-[70%] w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_23px_rgba(255,255,255,1)] animate-twinkle opacity-95"></div>
        <div className="absolute top-[88%] left-[25%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_17px_rgba(255,255,255,1)] animate-twinkle-delay opacity-85"></div>
      </div>

      {/* Hero Content - Positioned using Golden Ratio */}
      <div className="relative z-10 min-h-screen px-10 pt-[160px]">
        <div className="max-w-[900px] ml-[4%]">
          <h1 className="text-[clamp(48px,10vw,96px)] font-bold leading-[0.9] mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent animate-gradient-shift">
              Soft support for<br />
              sharp minds
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl leading-[1.4] text-white/85 mb-12 font-light max-w-[580px]">
            Work tools designed for neurodivergent minds.<br />
            <span className="text-white/70">Velvet adapts to how your brain actually works.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <button 
              className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-blue-600/30 backdrop-blur-md border border-blue-400/30 text-white rounded-full text-lg font-semibold transition-all duration-300 shadow-[0_8px_32px_rgba(59,130,246,0.3)] hover:bg-blue-500/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] hover:-translate-y-1 w-[200px]"
            >
              <span className="whitespace-nowrap">JOIN WAITLIST</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            
            <a 
              href="#" 
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-600/20 backdrop-blur-md border border-slate-400/20 text-white no-underline rounded-full text-lg font-medium transition-all duration-300 hover:bg-slate-500/30 hover:border-slate-300/30 w-[180px]"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="whitespace-nowrap">See how it works</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}