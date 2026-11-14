import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { OurStorySection } from "@/components/sections/OurStorySection";
import { MilestonesSection } from "@/components/sections/MilestonesSection";
import { CreditImpactSection } from "@/components/sections/CreditImpactSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { GlobalStageSection } from "@/components/sections/GlobalStageSection";
import { MoniebookSection } from "@/components/sections/MoniebookSection";
import { DistributionMapSection } from "@/components/sections/DistributionMapSection";
import { SpendingHabitsSection } from "@/components/sections/SpendingHabitsSection";
import { SavingsSection } from "@/components/sections/SavingsSection";
import { PaymentEverydaySection } from "@/components/sections/PaymentEverydaySection";
import { DreamTeamSection } from "@/components/sections/DreamTeamSection";
import { WinningStreakSection } from "@/components/sections/WinningStreakSection";
import { DownloadSection } from "@/components/sections/DownloadSection";

export default function HomePage() {
  return (
    <main className="w-full relative overflow-x-hidden">
      {/* 1. Hero Section - Decade of Impact */}
      <HeroSection />

      {/* 2. Our Story - A decade of powering payments */}
      <OurStorySection />

      {/* 3. 2025 was our 10th year - Milestones & Stats */}
      <MilestonesSection />

      {/* 4. But this growth isn't just about us - ₦1 Trillion Credit */}
      <CreditImpactSection />

      {/* 5. Our impact cut across multiple industries */}
      <IndustriesSection />

      {/* 6. We took our mission to the global stage - MonieWorld UK */}
      <GlobalStageSection />

      {/* 7. We launched Moniebook */}
      <MoniebookSection />

      {/* 8. Nigeria's largest distributor of financial services - Coverage Map */}
      <DistributionMapSection />

      {/* 9. Here's how Nigerians moved money this year - Spending Habits */}
      <SpendingHabitsSection />

      {/* 10. What Nigerians are saving for - Savings Breakdown */}
      <SavingsSection />

      {/* 11. Powering how Nigerians pay everyday - Cards, POS, Transfers */}
      <PaymentEverydaySection />

      {/* 12. 10 years of building the dream team - DreamMakers Gallery */}
      <DreamTeamSection />

      {/* 13. And we've kept a winning streak - Prestigious Awards */}
      <WinningStreakSection />

      {/* 14. Download the Review & Footer */}
      <DownloadSection />
    </main>
  );
}
