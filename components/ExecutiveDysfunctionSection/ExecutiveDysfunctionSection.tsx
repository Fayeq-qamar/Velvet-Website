"use client"

import { useEffect, useRef } from "react"

export function ExecutiveDysfunctionSection() {
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
      className="relative z-30 min-h-screen text-white overflow-hidden rounded-t-[40px] shadow-2xl card-stack-section" 
      style={{
        background: 'linear-gradient(135deg, #7c2d12 0%, #ea580c 30%, #f97316 70%, #fb923c 100%)',
        marginTop: '-40px',
        boxShadow: '0 -20px 60px rgba(0, 0, 0, 0.7)'
      }}>
      
      {/* Background Effects - Warm Orange/Pink Theme */}
      <div className="absolute inset-0 overflow-hidden">        
        {/* Central Atmospheric Light - Warm Theme */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] blur-[100px] animate-rotate-slow"
          style={{
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.4) 0%, rgba(249, 115, 22, 0.3) 15%, rgba(234, 88, 12, 0.2) 30%, rgba(124, 45, 18, 0.1) 50%, transparent 70%)'
          }}
        />
        
        {/* Secondary Light Ring - Orange */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] blur-[60px] animate-pulse-gentle"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, rgba(234, 88, 12, 0.2) 25%, rgba(124, 45, 18, 0.1) 50%, transparent 70%)'
          }}
        />
        
        {/* Floating Elements - Calming */}
        <div className="absolute top-[25%] right-[20%] w-6 h-6 border-2 border-orange-300/40 rounded-full animate-pulse shadow-[0_0_20px_rgba(251,146,60,0.4)] opacity-50"></div>
        <div className="absolute top-[70%] left-[15%] w-8 h-8 bg-orange-400/20 rounded-full animate-bounce-slow shadow-[0_0_25px_rgba(249,115,22,0.3)] opacity-60"></div>
        
        {/* Gentle Star Dust */}
        <div className="absolute top-[35%] left-[25%] w-2 h-2 bg-white/60 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.7)] animate-twinkle opacity-50"></div>
        <div className="absolute top-[55%] right-[30%] w-1.5 h-1.5 bg-white/50 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.6)] animate-twinkle-delay opacity-60"></div>
      </div>

      {/* Executive Dysfunction Content */}
      <div className="relative z-10 min-h-screen px-10 flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full text-orange-200 text-sm font-medium mb-6">
                  EXECUTIVE DYSFUNCTION EMERGENCY
                </span>
              </div>
              
              <h2 className="text-[clamp(40px,6vw,72px)] font-bold leading-[0.9] mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-orange-200 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
                  Crisis support<br />
                  before you crash
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl leading-[1.4] text-white/90 mb-8 font-light max-w-[600px]">
                Detects <span className="bg-orange-500/25 px-2 py-1 rounded-md text-orange-200 font-medium">distraction spirals</span> <strong className="text-orange-200">3.2 minutes</strong> before they overwhelm you. Gentle <span className="bg-amber-500/20 px-2 py-1 rounded-md text-amber-200 font-medium">breathing guides</span>, grounding techniques, and caring interventions.
              </p>
              
              <p className="text-lg text-white/80 mb-8 font-light max-w-[600px] italic">
                Never <span className="bg-red-500/20 px-2 py-1 rounded-md text-red-200 font-medium line-through">pushy</span>, always <span className="bg-gradient-to-r from-orange-400/20 to-amber-400/20 px-3 py-1 rounded-full text-orange-200 font-medium">understanding</span>.
              </p>

              {/* Empathetic Quote */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10 border border-orange-300/20 max-w-[600px]">
                <p className="text-xl text-orange-100 font-light italic text-center">
                  "This is temporary. You're not broken.<br />
                  <span className="text-orange-200 font-medium">We'll get through this together."</span>
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-10">
                <div className="text-left">
                  <span className="block text-4xl font-bold bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent mb-1">3.2 min</span>
                  <span className="text-sm text-white/70 font-medium">Early detection</span>
                </div>
                <div className="text-left">
                  <span className="block text-4xl font-bold bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent mb-1">5 options</span>
                  <span className="text-sm text-white/70 font-medium">Gentle support</span>
                </div>
                <div className="text-left">
                  <span className="block text-4xl font-bold bg-gradient-to-r from-orange-200 to-amber-200 bg-clip-text text-transparent mb-1">Always</span>
                  <span className="text-sm text-white/70 font-medium">Understanding</span>
                </div>
              </div>
              
            </div>

            {/* Right: Interface Mockup */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
              <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-2xl">
                  {/* Executive Dysfunction Emergency Interface */}
                  <div className="w-[500px] h-[700px] rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-600/40 shadow-2xl overflow-hidden">
                    {/* Header with brain icon */}
                    <div className="bg-slate-800/90 p-6 text-center border-b border-slate-600/30">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🧠</span>
                      </div>
                      <h3 className="text-white font-bold text-lg mb-1">Executive Dysfunction Detected</h3>
                      <p className="text-slate-400 text-sm">I'm here to help you through this moment</p>
                    </div>
                    
                    {/* Pattern Detection */}
                    <div className="p-4 border-b border-slate-600/20">
                      <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4">
                        <p className="text-red-300 text-xs font-semibold mb-2">PATTERN DETECTED</p>
                        <p className="text-white text-sm leading-relaxed">
                          You've been switching between tasks rapidly and opening/closing apps repeatedly. This looks like a distraction spiral - your brain is overwhelmed.
                        </p>
                      </div>
                    </div>
                    
                    {/* Gentle Support Options */}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-blue-400 text-lg">💙</span>
                        <p className="text-white font-semibold">Gentle Support Options</p>
                      </div>
                      
                      <div className="space-y-3">
                        {/* 5-Minute Reset */}
                        <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-4 hover:bg-blue-500/30 transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                              <span className="text-sm">🧘</span>
                            </div>
                            <div>
                              <p className="text-white font-medium text-sm">5-Minute Reset</p>
                              <p className="text-slate-300 text-xs">Step away, breathe deeply, ground yourself</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Brain Dump */}
                        <div className="bg-purple-500/20 border border-purple-400/30 rounded-xl p-4 hover:bg-purple-500/30 transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                              <span className="text-sm">📝</span>
                            </div>
                            <div>
                              <p className="text-white font-medium text-sm">Brain Dump</p>
                              <p className="text-slate-300 text-xs">Write down everything racing through your mind</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Pick Just One Thing */}
                        <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-4 hover:bg-green-500/30 transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                              <span className="text-sm">🎯</span>
                            </div>
                            <div>
                              <p className="text-white font-medium text-sm">Pick Just One Thing</p>
                              <p className="text-slate-300 text-xs">Choose the smallest, most urgent task</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Distraction Shield */}
                        <div className="bg-orange-500/20 border border-orange-400/30 rounded-xl p-4 hover:bg-orange-500/30 transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                              <span className="text-sm">🛡️</span>
                            </div>
                            <div>
                              <p className="text-white font-medium text-sm">Distraction Shield</p>
                              <p className="text-slate-300 text-xs">Close unnecessary apps and notifications</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Talk It Through */}
                        <div className="bg-cyan-500/20 border border-cyan-400/30 rounded-xl p-3 hover:bg-cyan-500/30 transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                              <span className="text-xs">💬</span>
                            </div>
                            <div>
                              <p className="text-white font-medium text-xs">Talk It Through</p>
                              <p className="text-slate-300 text-xs">Tell me what's overwhelming you right now</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}