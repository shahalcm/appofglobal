import React from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import TrustIntro from "@/components/landing/TrustIntro";
import Features from "@/components/landing/Features";
import BuyerSeller from "@/components/landing/BuyerSeller";
import HowItWorks from "@/components/landing/HowItWorks";
import GlobalTrade from "@/components/landing/GlobalTrade";
import AppShowcase from "@/components/landing/AppShowcase";
import WhyChoose from "@/components/landing/WhyChoose";
import SecurityTrust from "@/components/landing/SecurityTrust";
import DownloadCTA from "@/components/landing/DownloadCTA";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Sticky Navigation Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Trust / Introduction Section */}
        <TrustIntro />

        {/* 4. App Features Section */}
        <Features />

        {/* 5. Buyers and Sellers Section */}
        <BuyerSeller />

        {/* 6. How It Works Section */}
        <HowItWorks />

        {/* 7. Global Trade Section */}
        <GlobalTrade />

        {/* 8. App Showcase & Screenshots */}
        <AppShowcase />

        {/* 9. Why Choose UBS Global */}
        <WhyChoose />

        {/* 10. Security and Trust */}
        <SecurityTrust />

        {/* 11. Large Download CTA */}
        <DownloadCTA />

        {/* 12. FAQ Section */}
        <FAQ />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
