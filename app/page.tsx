import { Metadata } from "next"
import { HeroSection } from "components/HeroSection/HeroSection"

export const metadata: Metadata = {
  title: "Velvet - Soft support for sharp minds",
  description: "Work tools designed for neurodivergent minds. Productivity platform with sensory-smart interfaces and focus-first design.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://velvet-app.com/",
    title: "Velvet - Soft support for sharp minds",
    description: "Work tools designed for neurodivergent minds. Productivity platform with sensory-smart interfaces and focus-first design.",
    images: [
      {
        width: 1200,
        height: 630,
        url: "/og-image.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <HeroSection />
    </>
  )
}
