"use client"

import { useEffect, useRef } from "react"

export function GentleNudgeSection() {
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
      className="relative z-50 min-h-screen text-white overflow-hidden rounded-t-[40px] shadow-2xl card-stack-section" 
      style={{
        background: 'linear-gradient(135deg, #4338ca 0%, #7c3aed 30%, #a855f7 70%, #c084fc 100%)',
        marginTop: '-40px',
        boxShadow: '0 -20px 60px rgba(0, 0, 0, 0.9)'
      }}>
      
      {/* Background Effects - Purple/Pink Theme */}
      <div className="absolute inset-0 overflow-hidden">        
        {/* Central Atmospheric Light - Purple Theme */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] blur-[100px] animate-rotate-slow"
          style={{
            background: 'radial-gradient(circle, rgba(192, 132, 252, 0.4) 0%, rgba(168, 85, 247, 0.3) 15%, rgba(124, 58, 237, 0.2) 30%, rgba(67, 56, 202, 0.1) 50%, transparent 70%)'
          }}
        />
        
        {/* Secondary Light Ring - Violet */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] blur-[60px] animate-pulse-gentle"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(124, 58, 237, 0.2) 25%, rgba(67, 56, 202, 0.1) 50%, transparent 70%)'
          }}
        />
        
        {/* Floating Elements - Gentle Theme */}
        <div className="absolute top-[20%] right-[12%] w-6 h-6 border-2 border-purple-300/40 rounded-full animate-pulse shadow-[0_0_20px_rgba(192,132,252,0.4)] opacity-60"></div>
        <div className="absolute top-[75%] left-[10%] w-8 h-8 bg-violet-400/20 rounded-full animate-bounce-slow shadow-[0_0_25px_rgba(168,85,247,0.3)] opacity-50"></div>
        
        {/* Caring Stars */}
        <div className="absolute top-[30%] left-[18%] w-2 h-2 bg-white/60 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.7)] animate-twinkle opacity-50"></div>
        <div className="absolute top-[65%] right-[22%] w-1.5 h-1.5 bg-white/50 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.6)] animate-twinkle-delay opacity-60"></div>
      </div>

      {/* Gentle Nudge Content */}
      <div className="relative z-10 min-h-screen px-10 py-20">
        <div className="max-w-8xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-200 text-sm font-medium mb-6">
                GENTLE NUDGE SYSTEM
              </span>
            </div>
            
            <h2 className="text-[clamp(40px,6vw,72px)] font-bold leading-[0.9] mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-purple-200 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                Support that feels like<br />
                a caring friend
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl leading-[1.4] text-white/90 mb-6 font-light max-w-[800px] mx-auto">
              Four types of <span className="bg-purple-500/20 px-2 py-1 rounded-md text-purple-200 font-medium">gentle nudges</span> that <strong className="text-purple-200">learn your boundaries</strong>: <span className="bg-violet-500/20 px-2 py-1 rounded-md text-violet-200 font-medium">focus protection</span>, celebration, <span className="bg-pink-500/20 px-2 py-1 rounded-md text-pink-200 font-medium">break reminders</span>, and grounding.
            </p>
            
            <p className="text-lg text-white/80 mb-12 font-light italic max-w-[600px] mx-auto">
              Always <span className="bg-gradient-to-r from-purple-400/20 to-violet-400/20 px-3 py-1 rounded-full text-purple-200 font-medium">respectful</span>, never <span className="bg-red-500/20 px-2 py-1 rounded-md text-red-200 font-medium line-through">demanding</span>.
            </p>
          </div>

          {/* Three Notification Mockups - Beautiful Layout */}
          <div className="relative mb-16">
            <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative">
              
              {/* Notifications Container - Creative Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                
                {/* Focus Protection Notification */}
                <div className="relative transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/30 to-green-500/30 rounded-2xl blur-lg"></div>
                  <div className="relative bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-6 shadow-xl border border-green-400/20">
                    
                    {/* Icon */}
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">🛡️</span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-white font-bold text-lg mb-2">You're in the zone!</h3>
                    <p className="text-green-100 text-sm mb-4 leading-relaxed">
                      I've noticed you've been focused for 45 minutes. I'm holding your notifications to protect your flow state.
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-xs font-medium transition-colors">
                        Thanks!
                      </button>
                      <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-xs font-medium transition-colors border border-white/20">
                        Settings
                      </button>
                    </div>
                  </div>
                </div>

                {/* Distraction Spiral Notification */}
                <div className="relative transform hover:scale-105 transition-transform duration-300 lg:translate-y-8">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/30 to-amber-500/30 rounded-2xl blur-lg"></div>
                  <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-6 shadow-xl border border-orange-400/20">
                    
                    {/* Icon */}
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">🌀</span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-white font-bold text-lg mb-2">Distraction Spiral Detected</h3>
                    <p className="text-orange-100 text-sm mb-4 leading-relaxed">
                      You've switched between 6 different apps in the last 5 minutes. Your brain seems scattered right now. Let's pause and reset together.
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-amber-800/40 hover:bg-amber-800/60 rounded-lg text-white text-xs font-medium transition-colors">
                        I'm okay
                      </button>
                      <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-xs font-medium transition-colors">
                        Help me focus
                      </button>
                    </div>
                  </div>
                </div>

                {/* Break Reminder Notification */}
                <div className="relative transform hover:scale-105 transition-transform duration-300">
                  <div className="absolute -inset-2 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-2xl blur-lg"></div>
                  <div className="relative bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-6 shadow-xl border border-violet-400/20">
                    
                    {/* Icon */}
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">😌</span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-white font-bold text-lg mb-2">Gentle Reminder</h3>
                    <p className="text-violet-100 text-sm mb-4 leading-relaxed">
                      You've been working for 90 minutes. Research shows breaks boost productivity and creativity.
                    </p>
                    
                    {/* Timer Display */}
                    <div className="bg-white/10 rounded-lg p-3 mb-4 text-center">
                      <div className="text-white text-2xl font-mono mb-1">90:00</div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-xs font-medium transition-colors border border-white/20">
                        5 more min
                      </button>
                      <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-xs font-medium transition-colors">
                        Break time
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example Messages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-300/20">
              <p className="text-purple-200 text-sm font-semibold mb-2">FOCUS PROTECTION</p>
              <p className="text-white font-medium text-lg italic">"You're in the zone! I'll hold your notifications."</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-300/20">
              <p className="text-pink-200 text-sm font-semibold mb-2">CELEBRATION</p>
              <p className="text-white font-medium text-lg italic">"Task complete! That's your 3rd today - you're amazing!"</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <div className="text-center">
              <span className="block text-4xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-1">4 types</span>
              <span className="text-sm text-white/70 font-medium">Gentle nudges</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-1">Learning</span>
              <span className="text-sm text-white/70 font-medium">Your boundaries</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-1">Never</span>
              <span className="text-sm text-white/70 font-medium">Demanding</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}