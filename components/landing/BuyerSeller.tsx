import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button, { GooglePlayIcon } from "@/components/ui/Button";
import { BUYER_FEATURES, SELLER_FEATURES, GOOGLE_PLAY_URL } from "@/lib/constants";

export default function BuyerSeller() {
  return (
    <section id="buyers" className="py-20 sm:py-28 bg-slate-50/50 relative overflow-hidden">
      {/* Anchor for sellers scrolling */}
      <div id="sellers" className="absolute top-1/2 -translate-y-24" />

      <Container>
        <SectionHeading
          badge="Two-Sided Global Ecosystem"
          title="Empowering Buyers and Sellers Worldwide"
          description="Whether you are sourcing premier international goods or scaling your manufacturing enterprise globally, UBS Global provides dedicated tools tailored to your operational model."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* LEFT SIDE: FOR BUYERS */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient accent top bar */}
            <div className="absolute top-0 inset-x-0 h-2 bg-linear-to-r from-primary to-secondary" />

            <div>
              {/* Badge & Role */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary bg-accent border border-primary/15">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  FOR BUYERS
                </span>
                <span className="text-xs text-slate-400 font-medium">Sourcing & Procurement</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-dark-blue mb-4">
                Discover Opportunities Worldwide
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Source high-demand products directly from international manufacturers and authenticated suppliers with full confidence and zero middleman friction.
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3.5 mb-10">
                {BUYER_FEATURES.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 text-sm sm:text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button
                href={GOOGLE_PLAY_URL}
                variant="primary"
                size="lg"
                fullWidth
                icon={<GooglePlayIcon className="w-5 h-5" />}
              >
                Explore UBS Global
              </Button>
              <p className="text-center text-xs text-slate-400 mt-3">
                Download the mobile app to start exploring products
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: FOR SELLERS */}
          <div className="bg-dark-blue rounded-3xl p-8 sm:p-10 border border-slate-700/60 shadow-2xl text-white flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient accent top bar */}
            <div className="absolute top-0 inset-x-0 h-2 bg-linear-to-r from-secondary to-[#00D2FF]" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 blur-3xl pointer-events-none z-0" />

            <div className="relative z-10">
              {/* Badge & Role */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/15 border border-secondary/25">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  FOR SELLERS
                </span>
                <span className="text-xs text-blue-200/60 font-medium">Export & Cross-Border Sales</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Build Your Business Beyond Borders
              </h3>
              <p className="text-blue-100/70 text-sm sm:text-base leading-relaxed mb-8">
                Expand your customer base to overseas markets. Launch your customized digital storefront, list products, track orders, and receive buyer inquiries directly.
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3.5 mb-10">
                {SELLER_FEATURES.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-100 text-sm sm:text-base font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="relative z-10">
              <Button
                href={GOOGLE_PLAY_URL}
                variant="secondary"
                size="lg"
                fullWidth
                icon={<GooglePlayIcon className="w-5 h-5" />}
              >
                Start Selling
              </Button>
              <p className="text-center text-xs text-blue-200/60 mt-3">
                Register your business store on UBS Global app
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
