"use client"

import { useEffect, useRef } from "react"

export function SocialDecoderSection() {
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
      className="relative z-40 min-h-screen text-white overflow-hidden rounded-t-[40px] shadow-2xl card-stack-section" 
      style={{
        background: 'linear-gradient(135deg, #064e3b 0%, #059669 30%, #10b981 70%, #34d399 100%)',
        marginTop: '-40px',
        boxShadow: '0 -20px 60px rgba(0, 0, 0, 0.8)'
      }}>
      
      {/* Background Effects - Green/Teal Theme */}
      <div className="absolute inset-0 overflow-hidden">        
        {/* Central Atmospheric Light - Green Theme */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] blur-[100px] animate-rotate-slow"
          style={{
            background: 'radial-gradient(circle, rgba(52, 211, 153, 0.4) 0%, rgba(16, 185, 129, 0.3) 15%, rgba(5, 150, 105, 0.2) 30%, rgba(6, 78, 59, 0.1) 50%, transparent 70%)'
          }}
        />
        
        {/* Secondary Light Ring - Emerald */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] blur-[60px] animate-pulse-gentle"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(5, 150, 105, 0.2) 25%, rgba(6, 78, 59, 0.1) 50%, transparent 70%)'
          }}
        />
        
        {/* Floating Elements - Communication Theme */}
        <div className="absolute top-[30%] right-[10%] w-6 h-6 border-2 border-emerald-300/40 rounded-full animate-pulse shadow-[0_0_20px_rgba(52,211,153,0.4)] opacity-60"></div>
        <div className="absolute top-[65%] left-[8%] w-8 h-8 bg-green-400/20 rounded-full animate-bounce-slow shadow-[0_0_25px_rgba(16,185,129,0.3)] opacity-50"></div>
        
        {/* Communication Stars */}
        <div className="absolute top-[25%] left-[15%] w-2 h-2 bg-white/60 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.7)] animate-twinkle opacity-50"></div>
        <div className="absolute top-[75%] right-[20%] w-1.5 h-1.5 bg-white/50 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.6)] animate-twinkle-delay opacity-60"></div>
      </div>

      {/* Social Decoder Content - Full Width Layout */}
      <div className="relative z-10 min-h-screen px-10 py-20">
        <div className="max-w-8xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-emerald-200 text-sm font-medium mb-6">
                SOCIAL DECODER
              </span>
            </div>
            
            <h2 className="text-[clamp(40px,6vw,72px)] font-bold leading-[0.9] mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-emerald-200 via-green-300 to-teal-300 bg-clip-text text-transparent">
                Decode neurotypical communication<br />
                with confidence
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl leading-[1.4] text-white/90 mb-6 font-light max-w-[800px] mx-auto">
              <strong className="text-emerald-200">87% accurate</strong> <span className="bg-emerald-500/20 px-2 py-1 rounded-md text-emerald-200 font-medium">tone detection</span> and <span className="bg-green-500/20 px-2 py-1 rounded-md text-green-200 font-medium">subtext translation</span>. Plus response suggestions that sound <span className="bg-gradient-to-r from-emerald-400/20 to-green-400/20 px-3 py-1 rounded-full text-emerald-200 font-medium">authentically like you</span>, not like a robot.
            </p>
            
            {/* Example Translation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-emerald-300/20 max-w-[900px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-emerald-200 text-sm font-semibold mb-1">ORIGINAL</p>
                  <p className="text-white/90 italic">"Interesting presentation..."</p>
                </div>
                <div>
                  <p className="text-amber-200 text-sm font-semibold mb-1">TRANSLATION</p>
                  <p className="text-white/90">"Polite criticism"</p>
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-semibold mb-1">SUGGESTED RESPONSE</p>
                  <p className="text-white/90">"What would you improve?"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Large Interface Mockup - Creative Full-Width Layout */}
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
              
              {/* Social Decoder Interface - Large Format */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-600/40 rounded-3xl shadow-2xl overflow-hidden">
                
                {/* Video Call Interface */}
                <div className="relative">
                  {/* Header Bar */}
                  <div className="bg-slate-800/90 px-6 py-4 border-b border-slate-600/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-sm">🗣️</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">Social Decoder</h3>
                        <p className="text-slate-400 text-xs">Understanding neurotypical communication</p>
                      </div>
                    </div>
                    <div className="text-emerald-400 text-xs font-mono">LIVE ANALYSIS</div>
                  </div>
                  
                  {/* Main Interface - Split Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                    
                    {/* Left: Video Call Interface */}
                    <div className="bg-slate-900/50 border-r border-slate-600/30 relative">
                      {/* Video Call Window */}
                      <div className="relative h-full">
                        {/* Video Feed */}
                        <div className="bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 h-full rounded-tl-3xl flex items-center justify-center relative overflow-hidden">
                          
                          {/* Person in video call */}
                          <div className="relative z-10">
                            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/20">
                              <span className="text-4xl">👔</span>
                            </div>
                          </div>

                          {/* Video Call UI Elements */}
                          {/* Top bar with name */}
                          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1">
                            <p className="text-white font-medium text-sm">Sarah Mitchell</p>
                            <p className="text-green-400 text-xs flex items-center gap-1">
                              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                              Speaking
                            </p>
                          </div>

                          {/* Video quality indicator */}
                          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1">
                            <div className="flex items-center gap-1">
                              <div className="w-1 h-3 bg-green-400 rounded-full"></div>
                              <div className="w-1 h-4 bg-green-400 rounded-full"></div>
                              <div className="w-1 h-3 bg-green-400 rounded-full"></div>
                              <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
                            </div>
                          </div>

                          {/* Speech bubble with the message */}
                          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-sm px-4">
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl rounded-bl-sm px-4 py-3 shadow-lg border border-white/20">
                              <p className="text-slate-800 text-sm font-medium leading-relaxed">"Yeah, that presentation was... interesting. Really bold choices you made there!"</p>
                              <div className="flex justify-between items-center mt-2">
                                <span className="text-slate-600 text-xs">Sarah Mitchell</span>
                                <span className="text-slate-500 text-xs">2:34 PM</span>
                              </div>
                            </div>
                            {/* Speech bubble pointer */}
                            <div className="absolute -bottom-1 left-8 w-3 h-3 bg-white/95 rotate-45 border-r border-b border-white/20"></div>
                          </div>

                          {/* Bottom video call controls */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center justify-center gap-4">
                              {/* Microphone */}
                              <button className="w-10 h-10 bg-slate-600 hover:bg-slate-500 rounded-full flex items-center justify-center transition-colors">
                                <span className="text-white text-sm">🎤</span>
                              </button>
                              
                              {/* Camera */}
                              <button className="w-10 h-10 bg-slate-600 hover:bg-slate-500 rounded-full flex items-center justify-center transition-colors">
                                <span className="text-white text-sm">📹</span>
                              </button>
                              
                              {/* Screen share */}
                              <button className="w-10 h-10 bg-slate-600 hover:bg-slate-500 rounded-full flex items-center justify-center transition-colors">
                                <span className="text-white text-sm">🖥️</span>
                              </button>
                              
                              {/* End call */}
                              <button className="w-10 h-10 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors">
                                <span className="text-white text-sm">📞</span>
                              </button>
                            </div>
                          </div>

                          {/* Live indicator */}
                          <div className="absolute top-16 left-4 bg-red-600 rounded-full px-2 py-1 flex items-center gap-1">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <span className="text-white text-xs font-bold">LIVE</span>
                          </div>

                          {/* Participant count */}
                          <div className="absolute top-16 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1">
                            <span className="text-white text-xs">👥 3 participants</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right: Analysis Panel */}
                    <div className="p-6 space-y-4">
                      
                      {/* Message to Decode */}
                      <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-4">
                        <p className="text-blue-300 text-xs font-semibold mb-2">📝 MESSAGE TO DECODE</p>
                        <p className="text-white text-sm italic">"Yeah, that presentation was... interesting. Really bold choices you made there!"</p>
                        <p className="text-slate-400 text-xs mt-2">From: Sarah (Colleague) • Slack • 2 min ago</p>
                      </div>
                      
                      {/* Analysis Results */}
                      <div className="grid grid-cols-2 gap-3">
                        {/* Actual Tone */}
                        <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-3">
                          <p className="text-red-300 text-xs font-semibold mb-2">🎯 Actual Tone</p>
                          <p className="text-white font-medium text-sm">Sarcastic/Critical</p>
                          <p className="text-slate-300 text-xs mt-1">The word "interesting" + "bold choices" suggests disapproval</p>
                        </div>
                        
                        {/* Confidence Level */}
                        <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-3">
                          <p className="text-green-300 text-xs font-semibold mb-2">📊 Confidence Level</p>
                          <p className="text-white font-medium text-sm">87% confident this is</p>
                          <p className="text-slate-300 text-xs mt-1">polite criticism rather than genuine praise</p>
                        </div>
                      </div>
                      
                      {/* Neurotypical Translation */}
                      <div className="bg-purple-500/20 border border-purple-400/30 rounded-xl p-4">
                        <p className="text-purple-300 text-xs font-semibold mb-2">🧠 Neurotypical Translation</p>
                        <p className="text-white font-medium text-sm mb-2">What they probably mean:</p>
                        <p className="text-slate-300 text-sm">"I didn't like your presentation. I think some of your decisions were questionable, but I'm being polite about it"</p>
                        
                        <div className="mt-3 space-y-2 text-xs">
                          <div className="flex items-start gap-2">
                            <span className="text-yellow-400 mt-0.5">💡</span>
                            <span className="text-slate-300">"Interesting" when said about work often means "strange" or "not good"</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-orange-400 mt-0.5">⚠️</span>
                            <span className="text-slate-300">"Bold choices" can be code for "risky" or "wrong" decisions</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5">📉</span>
                            <span className="text-slate-300">The ellipsis (...) suggests hesitation or disapproval</span>
                          </div>
                        </div>
                        
                        <div className="mt-4 bg-slate-700/50 rounded-lg p-3">
                          <p className="text-slate-400 text-xs mb-1">Analysis Confidence:</p>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-slate-600 rounded-full h-2">
                              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '87%'}}></div>
                            </div>
                            <span className="text-purple-300 text-xs font-bold">87%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Action Bar */}
                  <div className="bg-slate-800/90 px-6 py-4 border-t border-slate-600/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button className="px-4 py-2 bg-blue-600/30 border border-blue-500/50 text-blue-200 rounded-lg text-xs font-medium hover:bg-blue-600/40 transition-colors">
                          Suggest Response
                        </button>
                        <button className="px-4 py-2 bg-emerald-600/30 border border-emerald-500/50 text-emerald-200 rounded-lg text-xs font-medium hover:bg-emerald-600/40 transition-colors">
                          Practice Reply
                        </button>
                      </div>
                      <div className="text-slate-400 text-xs">
                        Real-time analysis • 87% accuracy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-12 mt-16">
            <div className="text-center">
              <span className="block text-4xl font-bold bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent mb-1">87%</span>
              <span className="text-sm text-white/70 font-medium">Communication accuracy</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent mb-1">Real-time</span>
              <span className="text-sm text-white/70 font-medium">Analysis</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold bg-gradient-to-r from-emerald-200 to-green-200 bg-clip-text text-transparent mb-1">Authentic</span>
              <span className="text-sm text-white/70 font-medium">Response style</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}