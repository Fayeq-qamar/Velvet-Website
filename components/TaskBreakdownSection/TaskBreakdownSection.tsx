"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function TaskBreakdownSection() {
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
      className="relative z-20 min-h-screen text-white overflow-hidden rounded-t-[40px] shadow-2xl card-stack-section" 
      style={{
        background: 'linear-gradient(135deg, #0f4c75 0%, #3282b8 50%, #0f3460 100%)',
        marginTop: '-40px',
        boxShadow: '0 -20px 60px rgba(0, 0, 0, 0.6)'
      }}>
      
      {/* Background Effects - Teal/Cyan Theme */}
      <div className="absolute inset-0 overflow-hidden">        
        {/* Central Atmospheric Light - Teal Theme */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] blur-[100px] animate-rotate-slow"
          style={{
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.4) 0%, rgba(6, 182, 212, 0.3) 15%, rgba(8, 145, 178, 0.2) 30%, rgba(15, 76, 117, 0.1) 50%, transparent 70%)'
          }}
        />
        
        {/* Secondary Light Ring - Cyan */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] blur-[60px] animate-pulse-gentle"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(8, 145, 178, 0.2) 25%, rgba(15, 76, 117, 0.1) 50%, transparent 70%)'
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-[20%] right-[15%] w-8 h-8 border-2 border-cyan-400/40 rotate-45 animate-spin-slow shadow-[0_0_25px_rgba(6,182,212,0.4)] opacity-40"></div>
        <div className="absolute top-[75%] left-[10%] w-6 h-6 bg-teal-400/30 rotate-12 animate-bounce-slow shadow-[0_0_20px_rgba(20,184,166,0.4)] opacity-50"></div>
        
        {/* Star Dust */}
        <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-white/70 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-twinkle opacity-60"></div>
        <div className="absolute top-[60%] right-[25%] w-1.5 h-1.5 bg-white/60 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.7)] animate-twinkle-delay opacity-70"></div>
      </div>

      {/* Task Breakdown Content */}
      <div className="relative z-10 min-h-screen px-10 flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Image */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
              <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 shadow-2xl">
                  {/* Your Task Breakdown Interface Mockup */}
                  <div className="w-[500px] h-[650px] rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-600/30 shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="bg-slate-800/80 p-4 border-b border-slate-600/30">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">🧠</span>
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm">Smart Task Breakdown</h3>
                          <p className="text-slate-400 text-xs">Breaking big tasks into micro-steps</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 space-y-4">
                      {/* Original Task */}
                      <div>
                        <p className="text-cyan-400 text-xs font-semibold mb-2">YOUR ORIGINAL TASK</p>
                        <p className="text-white text-sm">"I need to finish my presentation for tomorrow's client meeting"</p>
                      </div>
                      
                      {/* Progress */}
                      <div className="flex items-center justify-between">
                        <p className="text-white font-medium">Micro-Steps (2-5 min each)</p>
                        <p className="text-slate-400 text-sm">1/6 done</p>
                      </div>
                      
                      {/* Steps */}
                      <div className="space-y-2">
                        {/* Step 1 - Completed */}
                        <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                              <span className="text-white text-xs">✓</span>
                            </div>
                            <span className="text-white text-sm line-through">Open PowerPoint and create title slide</span>
                          </div>
                          <p className="text-slate-400 text-xs ml-7 mt-1">⏱ 3 min • 📊 PowerPoint</p>
                        </div>
                        
                        {/* Step 2 */}
                        <div className="bg-slate-700/50 border border-slate-600/30 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-slate-600 rounded border-2 border-slate-500"></div>
                            <span className="text-white text-sm">Write down 3 main points you want to cover</span>
                          </div>
                          <p className="text-slate-400 text-xs ml-7 mt-1">⏱ 5 min • 📝 Notes</p>
                        </div>
                        
                        {/* Step 3 */}
                        <div className="bg-slate-700/50 border border-slate-600/30 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-slate-600 rounded border-2 border-slate-500"></div>
                            <span className="text-white text-sm">Find one relevant image from your files</span>
                          </div>
                          <p className="text-slate-400 text-xs ml-7 mt-1">⏱ 4 min • 🔍 Finder</p>
                        </div>
                        
                        {/* Step 4 */}
                        <div className="bg-slate-700/50 border border-slate-600/30 rounded-lg p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 bg-slate-600 rounded border-2 border-slate-500"></div>
                            <span className="text-white text-sm">Create slide 2 with your first main point</span>
                          </div>
                          <p className="text-slate-400 text-xs ml-7 mt-1">⏱ 4 min • 📊 PowerPoint</p>
                        </div>
                        
                        {/* Final step preview */}
                        <div className="bg-slate-700/30 border border-slate-600/20 rounded-lg p-2 opacity-60">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-slate-600 rounded border border-slate-500"></div>
                            <span className="text-slate-300 text-xs">Take a 2-minute break - stretch or breathe</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-6">
                  TASK BREAKDOWN SYSTEM
                </span>
              </div>
              
              <h2 className="text-[clamp(40px,6vw,72px)] font-bold leading-[0.9] mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-cyan-200 via-teal-300 to-blue-300 bg-clip-text text-transparent">
                  Big scary tasks become<br />
                  tiny victories
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl leading-[1.4] text-white/85 mb-8 font-light max-w-[600px]">
                "<span className="bg-cyan-500/20 px-2 py-1 rounded-md text-cyan-200 font-medium">Finish presentation</span>" magically transforms into <strong className="text-cyan-300">6 micro-steps</strong> of <span className="bg-teal-500/20 px-2 py-1 rounded-md text-teal-200 font-medium">2-5 minutes</span> each. With smart app suggestions and celebration after every small win.
              </p>
              
              <p className="text-lg text-white/75 mb-10 font-light max-w-[600px]">
                <span className="bg-gradient-to-r from-cyan-400/20 to-teal-400/20 px-3 py-1 rounded-full text-cyan-200 font-medium">Executive dysfunction</span> doesn't stand a chance.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-10">
                <div className="text-left">
                  <span className="block text-4xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent mb-1">94.2%</span>
                  <span className="text-sm text-white/70 font-medium">Task completion rate</span>
                </div>
                <div className="text-left">
                  <span className="block text-4xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent mb-1">2-5 min</span>
                  <span className="text-sm text-white/70 font-medium">Perfect micro-steps</span>
                </div>
                <div className="text-left">
                  <span className="block text-4xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent mb-1">6 steps</span>
                  <span className="text-sm text-white/70 font-medium">Average breakdown</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}