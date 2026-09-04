import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button, { GooglePlayIcon } from "@/components/ui/Button";
import { GOOGLE_PLAY_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-8 pb-20 sm:pt-14 sm:pb-28 lg:pt-20 lg:pb-32 bg-white bg-radial-gradient"
    >
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/70 via-white/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#0B4DFF]/10 via-[#1DA1FF]/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF4FF] border border-[#0B4DFF]/20 text-[#0B4DFF] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DA1FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0B4DFF]"></span>
              </span>
              <span>Official UBS Global Mobile Application</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#0A1A44] leading-[1.1] mb-6">
              Trade Globally. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B4DFF] via-[#1DA1FF] to-[#0A1A44]">
                Grow Without Borders.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#0A1A44]/75 max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10">
              UBS Global connects buyers and sellers worldwide, helping businesses discover products,
              build international connections, manage trade, and grow beyond borders.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                href={GOOGLE_PLAY_URL}
                variant="google-play"
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg font-semibold px-7 py-3.5 shadow-xl hover:shadow-2xl"
                icon={<GooglePlayIcon className="w-6 h-6" />}
              >
                Download on Google Play
              </Button>

              <Button
                href="#features"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg"
              >
                Explore Features
              </Button>
            </div>

            {/* Trust Indicators below CTA */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#0B4DFF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Direct Buyer & Seller Chat</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#0B4DFF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>International Marketplace</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#0B4DFF]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Verified Cross-Border Trade</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup & Floating Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Global Connection Graphic Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
              <div className="w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full border border-blue-200/50 animate-pulse-slow" />
              <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-[#1DA1FF]/30 animate-spin" style={{ animationDuration: "60s" }} />
            </div>

            {/* Smartphone Mockup */}
            <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] bg-[#0A1A44] rounded-[48px] p-3 shadow-2xl ring-1 ring-white/20 border-4 border-[#1c2c5c]">
              {/* Dynamic Island / Speaker */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-700/50 mr-2" />
                <div className="w-2 h-2 rounded-full bg-blue-950" />
              </div>

              {/* Screen Content */}
              <div className="relative w-full h-full bg-[#07122e] rounded-[40px] overflow-hidden flex flex-col justify-between p-5 pt-12 text-white">
                {/* Screen Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 relative rounded-md overflow-hidden bg-white/10 p-0.5">
                      <Image
                        src="/logo/icon.png"
                        alt="UBS Global"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white tracking-wider">UBS GLOBAL</div>
                      <div className="text-[10px] text-blue-300">Import & Export</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#0B4DFF]/40 text-[#1DA1FF] border border-[#1DA1FF]/30">
                    LIVE
                  </span>
                </div>

                {/* App Screen Core UI Preview */}
                <div className="my-auto space-y-3.5">
                  {/* Category Pill Carousel */}
                  <div className="flex items-center gap-2 overflow-hidden text-[10px]">
                    <span className="bg-[#0B4DFF] px-2.5 py-1 rounded-full font-medium text-white shadow-sm">All Markets</span>
                    <span className="bg-white/10 px-2.5 py-1 rounded-full text-slate-300">Oils</span>
                    <span className="bg-white/10 px-2.5 py-1 rounded-full text-slate-300">Perfumes</span>
                    <span className="bg-white/10 px-2.5 py-1 rounded-full text-slate-300">Parts</span>
                  </div>

                  {/* Featured Product Card in Mockup */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/10 shadow-lg">
                    <div className="relative h-28 w-full rounded-xl overflow-hidden mb-2">
                      <Image
                        src="/images/oils.jpg"
                        alt="Global Products"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-[#0A1A44]/80 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-medium text-blue-200">
                        Export Ready
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-white">Premium Grade Bulk Oils</div>
                    <div className="flex items-center justify-between text-[11px] mt-1">
                      <span className="text-[#1DA1FF] font-bold">Verified Supplier</span>
                      <span className="text-emerald-400 font-medium">In Stock</span>
                    </div>
                  </div>

                  {/* Seller & Inquiry Mini Widget */}
                  <div className="bg-white/5 rounded-xl p-2.5 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#0B4DFF]/30 flex items-center justify-center text-[10px] font-bold text-[#1DA1FF]">
                        GS
                      </div>
                      <div className="text-[11px]">
                        <div className="font-medium text-white">Global Seller Portal</div>
                        <div className="text-[9px] text-slate-400">Direct Inquiries Active</div>
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>

                {/* Mockup Bottom Bar */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-around text-[9px] text-slate-400">
                  <span className="text-[#1DA1FF] font-semibold flex flex-col items-center">
                    <svg className="w-4 h-4 mb-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    Home
                  </span>
                  <span className="flex flex-col items-center">
                    <svg className="w-4 h-4 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Explore
                  </span>
                  <span className="flex flex-col items-center">
                    <svg className="w-4 h-4 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    Chat
                  </span>
                  <span className="flex flex-col items-center">
                    <svg className="w-4 h-4 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Profile
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Card 1: Global Marketplace */}
            <div className="absolute -top-4 -left-4 sm:-left-12 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-blue-100 hidden sm:flex items-center gap-3 animate-float max-w-[210px] z-20">
              <div className="w-10 h-10 rounded-xl bg-[#EAF4FF] text-[#0B4DFF] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-[#0A1A44]">GLOBAL MARKETPLACE</div>
                <div className="text-[11px] text-[#0B4DFF] font-medium">Connect Worldwide</div>
              </div>
            </div>

            {/* Floating Card 2: Buy & Sell */}
            <div className="absolute top-1/3 -right-4 sm:-right-10 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-blue-100 hidden sm:flex items-center gap-3 animate-float-delayed max-w-[210px] z-20">
              <div className="w-10 h-10 rounded-xl bg-[#EAF4FF] text-[#1DA1FF] flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-[#0A1A44]">BUY & SELL</div>
                <div className="text-[11px] text-[#0B4DFF] font-medium">International Trade</div>
              </div>
            </div>

            {/* Floating Card 3: Secure Communication */}
            <div className="absolute -bottom-6 -left-2 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-blue-100 hidden sm:flex items-center gap-3 animate-float max-w-[220px] z-20">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-bold text-[#0A1A44]">SECURE CHAT</div>
                <div className="text-[11px] text-[#0B4DFF] font-medium">Connect With Confidence</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
