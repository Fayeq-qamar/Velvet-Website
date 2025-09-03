"use client"

import { useEffect, useRef } from "react"

export function PersonalStorySection() {
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
      className="relative z-80 min-h-screen text-white overflow-hidden rounded-t-[40px] shadow-2xl card-stack-section" 
      style={{
        background: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 30%, #a855f7 70%, #c084fc 100%)',
        marginTop: '-40px',
        boxShadow: '0 -20px 60px rgba(0, 0, 0, 0.9)'
      }}>
      
      {/* Background Effects - Purple Theme */}
      <div className="absolute inset-0 overflow-hidden">        
        {/* Central Atmospheric Light - Purple Theme */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] blur-[100px] animate-rotate-slow"
          style={{
            background: 'radial-gradient(circle, rgba(192, 132, 252, 0.4) 0%, rgba(168, 85, 247, 0.3) 15%, rgba(124, 58, 237, 0.2) 30%, rgba(76, 29, 149, 0.1) 50%, transparent 70%)'
          }}
        />
        
        {/* Secondary Light Ring - Violet */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] blur-[60px] animate-pulse-gentle"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(124, 58, 237, 0.2) 25%, rgba(76, 29, 149, 0.1) 50%, transparent 70%)'
          }}
        />
        
        {/* Floating Elements - Heart Theme */}
        <div className="absolute top-[20%] right-[12%] w-6 h-6 border-2 border-purple-300/40 rounded-full animate-pulse shadow-[0_0_20px_rgba(192,132,252,0.4)] opacity-60"></div>
        <div className="absolute top-[75%] left-[8%] w-8 h-8 bg-violet-400/20 rounded-full animate-bounce-slow shadow-[0_0_25px_rgba(168,85,247,0.3)] opacity-50"></div>
        
        {/* Heart Stars */}
        <div className="absolute top-[28%] left-[18%] w-2 h-2 bg-white/60 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.7)] animate-twinkle opacity-50"></div>
        <div className="absolute top-[68%] right-[22%] w-1.5 h-1.5 bg-white/50 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.6)] animate-twinkle-delay opacity-60"></div>
      </div>

      {/* Personal Story Content */}
      <div className="relative z-10 min-h-screen px-10 flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-200 text-sm font-medium mb-6">
                PERSONAL STORY
              </span>
            </div>
            
            <h2 className="text-[clamp(40px,6vw,72px)] font-bold leading-[0.9] mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-purple-200 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                Built by someone<br />
                who understands
              </span>
            </h2>
          </div>

          {/* Founder Introduction */}
          <div className="flex items-center justify-center gap-8 mb-16 flex-col lg:flex-row">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="/fayeq-photo.jpg" 
                  alt="Fayeq Qamar, Founder of Velvet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                Fayeq Qamar
              </h3>
              <p className="text-white/80 text-lg font-light">
                Neurodivergent founder, 11 years of struggling, now building solutions
              </p>
            </div>
          </div>

          {/* Story Quote */}
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-300/20 max-w-5xl mx-auto">
              <blockquote className="text-xl md:text-2xl leading-[1.4] text-white/90 italic text-center">
                "For 11 years, I fought with my brain every single day. Tools that worked for everyone else felt like torture for me. I was brilliant at solving complex problems but couldn't manage my own calendar. I could build amazing things but fell apart when someone said<br /><span className="bg-red-500/20 px-2 py-1 rounded-md text-red-200 font-medium">'just focus.'</span>
                <br /><br />
                I tried everything — productivity apps, therapy, medication, motivational videos. Nothing understood that <span className="bg-purple-500/20 px-2 py-1 rounded-md text-purple-200 font-medium">my brain wasn't broken</span>, it was just different. So I built what I desperately needed: <span className="bg-gradient-to-r from-purple-400/20 to-pink-400/20 px-3 py-1 rounded-full text-purple-200 font-medium">an AI companion that gets it.</span>"
              </blockquote>
            </div>
          </div>

          {/* Journey Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 shadow-2xl">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 border-2 border-red-400 rounded-full animate-spin"></div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">The Struggle Years</h4>
                <p className="text-white/80 leading-relaxed font-light">
                  11 years of being told to "just focus harder" while my brain scattered in 47 different directions
                </p>
              </div>
            </div>

            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 shadow-2xl">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">The Realization</h4>
                <p className="text-white/80 leading-relaxed font-light">
                  My brain isn't broken — the tools are. I needed something that understood my patterns, not judged them
                </p>
              </div>
            </div>

            <div className="relative transform hover:scale-105 transition-transform duration-300">
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 shadow-2xl">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 border border-purple-400 rotate-45"></div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">The Mission</h4>
                <p className="text-white/80 leading-relaxed font-light">
                  Building Velvet with every neurodivergent struggle in mind — because we deserve tools that celebrate our minds
                </p>
              </div>
            </div>
          </div>

          {/* Impact Vision */}
          <div className="text-center mb-16">
            <h3 className="text-[clamp(32px,5vw,48px)] font-bold mb-6 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              This is bigger than productivity
            </h3>
            <p className="text-xl md:text-2xl leading-[1.4] text-white/85 mb-10 font-light max-w-4xl mx-auto">
              Every neurodivergent person deserves to feel <span className="bg-purple-500/20 px-2 py-1 rounded-md text-purple-200 font-medium">supported, not fixed</span>. Velvet isn't trying to make you neurotypical — it's designed to help your <span className="bg-pink-500/20 px-2 py-1 rounded-md text-pink-200 font-medium">unique brain thrive</span> exactly as it is. Because the world needs your different perspective, your creative chaos, your brilliant insights.
            </p>

            {/* Impact Stats */}
            <div className="flex flex-wrap justify-center gap-12 mb-16">
              <div className="text-center">
                <span className="block text-4xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-1">2,847+</span>
                <span className="text-sm text-white/70 font-medium">Minds already supported</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-1">11 years</span>
                <span className="text-sm text-white/70 font-medium">Of personal struggle behind this</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent mb-1">∞</span>
                <span className="text-sm text-white/70 font-medium">Potential when minds are supported</span>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-purple-300/20 max-w-4xl mx-auto">
              <h3 className="text-[clamp(28px,4vw,40px)] font-bold text-white mb-6">Ready to thrive, not just survive?</h3>
              <p className="text-xl leading-[1.4] text-white/85 mb-10 font-light">
                Join me and thousands of other neurodivergent minds in proving that with the right support, our different brains are our <span className="bg-gradient-to-r from-purple-400/20 to-pink-400/20 px-3 py-1 rounded-full text-purple-200 font-medium">greatest superpower</span>.
              </p>
              
              <div className="flex justify-center mb-8">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg font-semibold transition-all duration-300 shadow-[0_8px_32px_rgba(168,85,247,0.3)] hover:shadow-[0_12px_40px_rgba(168,85,247,0.4)] hover:-translate-y-1"
                >
                  Join the Velvet Family
                </button>
              </div>
              
              <p className="text-xl italic text-purple-200 font-light">
                — Fayeq Qamar, Founder & Fellow Neurodivergent Mind
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}