"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button, { GooglePlayIcon } from "@/components/ui/Button";
import { GOOGLE_PLAY_URL } from "@/lib/constants";

interface ScreenTab {
  id: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  highlights: string[];
  mockupContent: React.ReactNode;
}

export default function AppShowcase() {
  const [activeTab, setActiveTab] = useState("home");

  const screens: ScreenTab[] = [
    {
      id: "home",
      name: "App Home",
      badge: "Main Interface",
      headline: "Intuitive Dashboard for Global Commerce",
      description:
        "Access trending products, global suppliers, recent inquiries, and quick trade actions right from your phone's home screen.",
      highlights: [
        "Curated international trade categories",
        "Instant search across cross-border catalogs",
        "Verified seller highlight badges",
        "Direct access to your ongoing negotiations",
      ],
      mockupContent: (
        <div className="h-full w-full bg-[#07122e] text-white p-4 pt-8 flex flex-col justify-between overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="relative w-7 h-7 rounded bg-white/10 overflow-hidden">
                <Image src="/logo/icon.png" alt="Icon" fill className="object-contain" />
              </div>
              <span className="text-xs font-bold tracking-wider text-white">UBS GLOBAL</span>
            </div>
            <span className="text-[10px] bg-[#0B4DFF]/40 text-[#1DA1FF] px-2 py-0.5 rounded border border-[#1DA1FF]/30">
              Live App
            </span>
          </div>

          {/* Search bar inside mockup */}
          <div className="my-3 bg-white/10 rounded-xl px-3 py-2 flex items-center gap-2 text-slate-300 text-xs border border-white/10">
            <svg className="w-4 h-4 text-[#1DA1FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search global products, brands, suppliers...</span>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-3 gap-2 my-2">
            <div className="bg-white/5 rounded-xl p-2 text-center border border-white/5 hover:border-[#1DA1FF]/40 transition-colors">
              <div className="relative h-12 w-full rounded-lg overflow-hidden mb-1">
                <Image src="/images/oils.jpg" alt="Oils" fill className="object-cover" />
              </div>
              <span className="text-[10px] font-semibold text-slate-200">Industrial Oils</span>
            </div>
            <div className="bg-white/5 rounded-xl p-2 text-center border border-white/5 hover:border-[#1DA1FF]/40 transition-colors">
              <div className="relative h-12 w-full rounded-lg overflow-hidden mb-1">
                <Image src="/images/perfumes.jpg" alt="Perfumes" fill className="object-cover" />
              </div>
              <span className="text-[10px] font-semibold text-slate-200">Perfumes</span>
            </div>
            <div className="bg-white/5 rounded-xl p-2 text-center border border-white/5 hover:border-[#1DA1FF]/40 transition-colors">
              <div className="relative h-12 w-full rounded-lg overflow-hidden mb-1">
                <Image src="/images/spare_parts.png" alt="Parts" fill className="object-cover" />
              </div>
              <span className="text-[10px] font-semibold text-slate-200">Spare Parts</span>
            </div>
          </div>

          {/* Featured Listing Card */}
          <div className="bg-gradient-to-br from-[#0B4DFF]/25 to-white/5 rounded-2xl p-3 border border-[#0B4DFF]/30 my-2">
            <div className="flex items-center justify-between text-[10px] mb-1">
              <span className="text-[#1DA1FF] font-bold">PROMOTED TRADE OFFER</span>
              <span className="text-emerald-400 font-semibold">Verified Export</span>
            </div>
            <div className="text-xs font-bold text-white mb-1">Commercial Lubricants & Synthetic Base</div>
            <div className="text-[10px] text-slate-300">Minimum Order: 50 Drums | Immediate Shipment</div>
          </div>

          {/* Bottom Dock */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-around text-[9px] text-slate-400">
            <span className="text-[#1DA1FF] font-bold">Home</span>
            <span>Markets</span>
            <span>Messages</span>
            <span>Orders</span>
          </div>
        </div>
      ),
    },
    {
      id: "product",
      name: "Product Details",
      badge: "Sourcing Catalog",
      headline: "Comprehensive Specifications & Verified Stock",
      description:
        "Inspect product imagery, bulk quantity requirements, export certifications, and directly query manufacturers before placing purchase orders.",
      highlights: [
        "High-definition gallery for item inspection",
        "Transparent export specifications & packaging details",
        "Direct RFQ and bulk inquiry initiation",
        "Verified seller certifications and ratings",
      ],
      mockupContent: (
        <div className="h-full w-full bg-[#07122e] text-white p-4 pt-8 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-xs font-bold text-white">Product Overview</span>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              Verified Stock
            </span>
          </div>

          {/* Product Hero Image */}
          <div className="relative h-44 w-full rounded-2xl overflow-hidden my-3 border border-white/10">
            <Image src="/images/oils.jpg" alt="Product View" fill className="object-cover" />
            <div className="absolute bottom-2 left-2 bg-[#0A1A44]/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-semibold text-white">
              Export Grade A
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-bold text-white">Full Synthetic Engine Lubricant 5W-30</div>
            <div className="text-[11px] text-slate-300">Origin: Certified International Refinery</div>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="bg-white/10 px-2 py-1 rounded text-slate-200">ISO 9001 Certified</span>
              <span className="bg-white/10 px-2 py-1 rounded text-slate-200">Direct Factory Price</span>
            </div>
          </div>

          {/* Quick Action Button in Mockup */}
          <div className="mt-3 pt-3 border-t border-white/10 flex gap-2">
            <button className="flex-1 bg-[#0B4DFF] hover:bg-[#083ecd] text-white py-2 rounded-xl text-xs font-bold transition-colors">
              Chat With Supplier
            </button>
            <button className="px-3 bg-white/10 text-white rounded-xl text-xs font-medium border border-white/10">
              Bookmark
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "seller",
      name: "Seller Dashboard",
      badge: "Merchant Operations",
      headline: "Full-Scale Cross-Border Management",
      description:
        "Manage incoming inquiries from overseas buyers, add new product listings, oversee shipment orders, and track revenue performance.",
      highlights: [
        "Rapid product creation with multi-currency pricing",
        "Order status tracking from payment to dispatch",
        "Customer message notifications in real-time",
        "Comprehensive store profile customisation",
      ],
      mockupContent: (
        <div className="h-full w-full bg-[#07122e] text-white p-4 pt-8 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <div className="text-[10px] text-slate-400">Seller Merchant Portal</div>
              <div className="text-xs font-bold text-white">Global Distribution Hub</div>
            </div>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">
              Store Active
            </span>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 gap-2 my-3">
            <div className="bg-white/5 rounded-xl p-2.5 border border-white/10">
              <div className="text-[10px] text-slate-400">Total Products</div>
              <div className="text-base font-extrabold text-[#1DA1FF]">48 Listings</div>
            </div>
            <div className="bg-white/5 rounded-xl p-2.5 border border-white/10">
              <div className="text-[10px] text-slate-400">Active Inquiries</div>
              <div className="text-base font-extrabold text-emerald-400">12 Pending</div>
            </div>
          </div>

          {/* Action List */}
          <div className="space-y-2">
            <div className="bg-white/5 rounded-xl p-2.5 border border-white/5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1DA1FF]" />
                <span className="font-medium text-slate-200">Automotive Spare Parts Kit</span>
              </div>
              <span className="text-[10px] text-slate-400">2 Inquiries</span>
            </div>
            <div className="bg-white/5 rounded-xl p-2.5 border border-white/5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-medium text-slate-200">Luxury Fragrance Concentrates</span>
              </div>
              <span className="text-[10px] text-emerald-400">Order Placed</span>
            </div>
          </div>

          {/* Bottom Add Product Button */}
          <button className="w-full bg-gradient-to-r from-[#0B4DFF] to-[#1DA1FF] text-white py-2.5 rounded-xl text-xs font-bold shadow-md">
            + Add New Product Listing
          </button>
        </div>
      ),
    },
    {
      id: "messaging",
      name: "Direct Messaging",
      badge: "Real-Time Chat",
      headline: "Secure Trade Conversations & Negotiations",
      description:
        "Negotiate terms, confirm shipping paperwork, share product photos, and finalize trade agreements with built-in instant messaging.",
      highlights: [
        "Direct buyer-seller instant communication channel",
        "Document & invoice sharing support",
        "Unread notification alerts",
        "Protected conversation history",
      ],
      mockupContent: (
        <div className="h-full w-full bg-[#07122e] text-white p-4 pt-8 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#0B4DFF] flex items-center justify-center text-[10px] font-bold">
                ES
              </div>
              <div>
                <div className="text-xs font-bold text-white">Elite Sourcing Ltd</div>
                <div className="text-[9px] text-emerald-400">● Online | Supplier</div>
              </div>
            </div>
            <span className="text-[10px] text-slate-400">Inquiry #829</span>
          </div>

          {/* Chat Messages */}
          <div className="my-auto space-y-2.5 text-[11px]">
            <div className="bg-white/10 rounded-2xl rounded-tl-sm p-2.5 max-w-[80%] text-slate-200">
              Hello, we are interested in 200 units of your industrial oil line. Can you confirm port CIF pricing?
            </div>
            <div className="bg-[#0B4DFF] text-white rounded-2xl rounded-tr-sm p-2.5 max-w-[80%] ml-auto text-right">
              Yes, our export batch is certified and ready for dispatch. Sharing proforma invoice now.
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-2 flex items-center gap-2 max-w-[85%] ml-auto text-[10px]">
              <svg className="w-4 h-4 text-[#1DA1FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="truncate">Specification_Quote_2026.pdf</span>
            </div>
          </div>

          {/* Chat Input */}
          <div className="pt-2 border-t border-white/10 flex items-center gap-2">
            <div className="flex-1 bg-white/10 rounded-xl px-3 py-2 text-xs text-slate-400">
              Type your message...
            </div>
            <button className="w-8 h-8 rounded-xl bg-[#0B4DFF] flex items-center justify-center text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      ),
    },
  ];

  const currentScreen = screens.find((s) => s.id === activeTab) || screens[0];

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <Container>
        <SectionHeading
          badge="App Interface"
          title="Everything You Need. One Global Platform."
          description="Explore the mobile interface built specifically for high-efficiency global trade, from product inspection to merchant order fulfillment."
        />

        {/* Tab Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {screens.map((screen) => (
            <button
              key={screen.id}
              onClick={() => setActiveTab(screen.id)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === screen.id
                  ? "bg-[#0B4DFF] text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 text-[#0A1A44]/80 hover:bg-slate-200"
              }`}
            >
              {screen.name}
            </button>
          ))}
        </div>

        {/* Showcase Display Card */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Details */}
          <div className="lg:col-span-7">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#0B4DFF] bg-[#EAF4FF] border border-[#0B4DFF]/15 mb-4">
              {currentScreen.badge}
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1A44] mb-4">
              {currentScreen.headline}
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              {currentScreen.description}
            </p>

            <div className="space-y-3 mb-8">
              {currentScreen.highlights.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0B4DFF] text-white flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium text-sm sm:text-base">{point}</span>
                </div>
              ))}
            </div>

            <Button
              href={GOOGLE_PLAY_URL}
              variant="google-play"
              size="md"
              icon={<GooglePlayIcon className="w-5 h-5" />}
            >
              Get UBS Global on Google Play
            </Button>
          </div>

          {/* Right Phone Mockup Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[280px] sm:w-[310px] h-[580px] bg-[#0A1A44] rounded-[48px] p-3 shadow-2xl border-4 border-[#1c2c5c] ring-1 ring-slate-200">
              {/* Dynamic Island */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700 mr-2" />
                <div className="w-2 h-2 rounded-full bg-blue-950" />
              </div>

              {/* Dynamic Mockup Screen Content */}
              <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                {currentScreen.mockupContent}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
