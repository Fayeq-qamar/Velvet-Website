"use client"

import { useEffect } from "react"

interface ThankYouModalProps {
  isOpen: boolean
  onClose: () => void
  name: string
  email: string
}

export function ThankYouModal({ isOpen, onClose, name, email }: ThankYouModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      
      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        onClose()
      }, 5000)
      
      return () => {
        clearTimeout(timer)
        document.body.style.overflow = 'unset'
      }
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-[#1a1a1a]/95 to-[#0f0f0f]/95 backdrop-blur-md rounded-2xl p-8 mx-4 max-w-md w-full border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white/90 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Success icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-500/20 border border-green-400/30 flex items-center justify-center">
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            {name ? `Thank you, ${name}!` : 'Thank you for joining!'}
          </h2>
          <p className="text-white/80 mb-4">
            Welcome to the Velvet waitlist. We've sent a confirmation to:
          </p>
          <p className="text-blue-300 font-medium mb-6 bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
            {email}
          </p>
          <p className="text-white/70 text-sm">
            {name ? `${name}, you'll` : "You'll"} be among the first to know when Velvet launches.
            <br />
            <span className="text-purple-300">Soft support for sharp minds.</span>
          </p>
        </div>

        {/* Progress indicator */}
        <div className="mt-6 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse" 
               style={{ animation: 'shrink 5s linear forwards' }} />
        </div>
        <p className="text-xs text-white/50 text-center mt-2">Auto-closing in 5 seconds</p>
      </div>

      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  )
}