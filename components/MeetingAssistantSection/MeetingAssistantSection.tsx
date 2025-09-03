"use client"

import { useEffect, useRef } from "react"

export function MeetingAssistantSection() {
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
      className="relative z-60 min-h-screen text-white overflow-hidden rounded-t-[40px] shadow-2xl card-stack-section" 
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 30%, #60a5fa 70%, #93c5fd 100%)',
        marginTop: '-40px',
        boxShadow: '0 -20px 60px rgba(0, 0, 0, 0.8)'
      }}>
      
      {/* Background Effects - Professional Blue/Gray Theme */}
      <div className="absolute inset-0 overflow-hidden">        
        {/* Central Atmospheric Light - Professional Theme */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] blur-[100px] animate-rotate-slow"
          style={{
            background: 'radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, rgba(96, 165, 250, 0.2) 15%, rgba(59, 130, 246, 0.15) 30%, rgba(30, 58, 138, 0.1) 50%, transparent 70%)'
          }}
        />
        
        {/* Secondary Light Ring - Blue */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] blur-[60px] animate-pulse-gentle"
          style={{
            background: 'radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, rgba(59, 130, 246, 0.15) 25%, rgba(30, 58, 138, 0.1) 50%, transparent 70%)'
          }}
        />
        
        {/* Floating Elements - Professional Theme */}
        <div className="absolute top-[22%] right-[18%] w-6 h-6 border-2 border-blue-300/40 rounded-full animate-pulse shadow-[0_0_20px_rgba(147,197,253,0.4)] opacity-50"></div>
        <div className="absolute top-[78%] left-[12%] w-8 h-8 bg-blue-400/20 rounded-full animate-bounce-slow shadow-[0_0_25px_rgba(96,165,250,0.3)] opacity-40"></div>
        
        {/* Subtle Stars */}
        <div className="absolute top-[28%] left-[20%] w-2 h-2 bg-white/50 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)] animate-twinkle opacity-40"></div>
        <div className="absolute top-[68%] right-[25%] w-1.5 h-1.5 bg-white/40 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.5)] animate-twinkle-delay opacity-50"></div>
      </div>

      {/* Meeting Assistant Content */}
      <div className="relative z-10 min-h-screen px-10 flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Actual Screenshot */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
              <div className="relative transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-3 border border-white/5 shadow-2xl">
                  <img 
                    src="/meeting-assistant-screenshot.png" 
                    alt="Velvet Meeting Assistant in action - AI coaching overlay during video call"
                    className="rounded-2xl shadow-2xl w-full max-w-[800px] h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium mb-6">
                  MEETING ASSISTANT
                </span>
              </div>
              
              <h2 className="text-[clamp(40px,6vw,72px)] font-bold leading-[0.9] mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-blue-200 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                  Your intelligent<br />
                  meeting assistant
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl leading-[1.4] text-white/90 mb-8 font-light max-w-[600px]">
                When asked about your experience, Velvet provides <strong className="text-blue-200">detailed, professional responses</strong> in <span className="bg-blue-500/20 px-2 py-1 rounded-md text-blue-200 font-medium">real-time</span>. Perfect for <span className="bg-indigo-500/20 px-2 py-1 rounded-md text-indigo-200 font-medium">technical interviews</span> and challenging questions.
              </p>
              
              <p className="text-lg text-white/80 mb-10 font-light max-w-[600px] italic">
                Completely <span className="bg-gradient-to-r from-blue-400/20 to-indigo-400/20 px-3 py-1 rounded-full text-blue-200 font-medium">invisible in screen share</span> - your secret interview coach.
              </p>

              {/* Example Quote */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10 border border-blue-300/20 max-w-[600px]">
                <p className="text-xl text-blue-100 font-light italic text-center">
                  "I've worked with microservices using Docker and Kubernetes.<br />
                  <span className="text-blue-200 font-medium">We use API gateways for routing and service discovery..."</span>
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-10">
                <div className="text-left">
                  <span className="block text-4xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent mb-1">Real-time</span>
                  <span className="text-sm text-white/70 font-medium">Transcription</span>
                </div>
                <div className="text-left">
                  <span className="block text-4xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent mb-1">Invisible</span>
                  <span className="text-sm text-white/70 font-medium">To others</span>
                </div>
                <div className="text-left">
                  <span className="block text-4xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent mb-1">Smart</span>
                  <span className="text-sm text-white/70 font-medium">Answers</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}