import { Metadata } from "next"
import { HeroSection } from "components/HeroSection/HeroSection"
import { StorySection } from "components/StorySection/StorySection"
import { TaskBreakdownSection } from "components/TaskBreakdownSection/TaskBreakdownSection"
import { ExecutiveDysfunctionSection } from "components/ExecutiveDysfunctionSection/ExecutiveDysfunctionSection"
import { SocialDecoderSection } from "components/SocialDecoderSection/SocialDecoderSection"
import { GentleNudgeSection } from "components/GentleNudgeSection/GentleNudgeSection"
import { MeetingAssistantSection } from "components/MeetingAssistantSection/MeetingAssistantSection"
import { UnifiedBrainSection } from "components/UnifiedBrainSection/UnifiedBrainSection"
import { PersonalStorySection } from "components/PersonalStorySection/PersonalStorySection"

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
      <StorySection />
      <TaskBreakdownSection />
      <ExecutiveDysfunctionSection />
      <SocialDecoderSection />
      <GentleNudgeSection />
      <MeetingAssistantSection />
      <UnifiedBrainSection />
      <PersonalStorySection />
    </>
  )
}
