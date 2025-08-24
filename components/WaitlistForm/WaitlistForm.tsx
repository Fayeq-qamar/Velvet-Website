"use client"

import { useState } from "react"
import { supabase } from "lib/supabase"
import { ThankYouModal } from "components/ThankYouModal/ThankYouModal"

export function WaitlistForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showThankYou, setShowThankYou] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [submittedName, setSubmittedName] = useState("")

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!name.trim()) {
      setError("Please enter your name")
      return
    }

    if (!email.trim()) {
      setError("Please enter your email address")
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }

    // Check if Supabase is configured
    if (!supabase) {
      setError("Waitlist service is currently unavailable. Please try again later.")
      return
    }

    setIsLoading(true)

    try {
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([{ 
          name: name.trim(),
          email: email.toLowerCase().trim() 
        }])

      if (supabaseError) {
        if (supabaseError.code === '23505') { // Unique constraint violation
          setError("This email is already on our waitlist!")
        } else {
          setError("Something went wrong. Please try again.")
        }
        return
      }

      // Success
      setSubmittedEmail(email)
      setSubmittedName(name)
      setShowThankYou(true)
      setName("")
      setEmail("")
      
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-start max-w-md w-full">
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex-1">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 rounded-full text-base font-medium transition-all duration-300 focus:bg-white/15 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/30"
              disabled={isLoading}
            />
          </div>
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 rounded-full text-base font-medium transition-all duration-300 focus:bg-white/15 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/30"
              disabled={isLoading}
            />
          </div>
        </div>
        {error && (
          <p className="text-red-400 text-sm ml-4">{error}</p>
        )}
        
        <div className="w-full flex justify-center sm:justify-start">
          <button
            type="submit"
            disabled={isLoading}
            className="group inline-flex items-center justify-center gap-3 px-8 py-3 bg-blue-600/30 backdrop-blur-md border border-blue-400/30 text-white rounded-full text-base font-semibold transition-all duration-300 shadow-[0_8px_32px_rgba(59,130,246,0.3)] hover:bg-blue-500/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none whitespace-nowrap min-w-[140px]"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Joining...</span>
              </>
            ) : (
              <>
                <span>JOIN WAITLIST</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </>
            )}
          </button>
        </div>
      </form>

      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        name={submittedName}
        email={submittedEmail}
      />
    </>
  )
}