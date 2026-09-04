import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button, { GooglePlayIcon } from "@/components/ui/Button";
import { GOOGLE_PLAY_URL } from "@/lib/constants";

export default function DownloadCTA() {
  return (
    <section className="py-20 sm:py-28 bg-brand-dark relative overflow-hidden text-white">
      {/* Background Glowing Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/30 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/25 blur-3xl rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="rounded-3xl bg-linear-to-br from-[#0F2154] to-dark-blue border border-blue-400/20 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping" />
              <span>Available Now on Android</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Your Global Business Journey Starts Here.
            </h2>

            <p className="text-base sm:text-lg text-blue-100/80 max-w-xl font-normal leading-relaxed mb-8 sm:mb-10 mx-auto lg:mx-0">
              Download UBS Global today and explore a connected platform designed for buyers, sellers,
              and international business opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                href={GOOGLE_PLAY_URL}
                variant="google-play"
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 bg-dark-blue hover:bg-black border-2 border-white/20 shadow-2xl"
                icon={<GooglePlayIcon className="w-7 h-7" />}
              >
                Get It on Google Play
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-xs text-blue-200/60">
              <span>✓ Free to download</span>
              <span>✓ Verified business accounts</span>
              <span>✓ Cross-border ready</span>
            </div>
          </div>

          {/* Right Phone Visual Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-65 sm:w-72.5 h-130 bg-[#050E26] rounded-[42px] p-2.5 shadow-2xl border-4 border-secondary/40 ring-4 ring-primary/20">
              {/* Screen Content inside mockup */}
              <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-linear-to-b from-primary/30 to-dark-blue p-5 flex flex-col justify-between text-white border border-white/10">
                {/* Logo top */}
                <div className="flex items-center justify-center pt-6">
                  <div className="relative w-36 h-12">
                    <Image
                      src="/logo/ubs-splash-logo.png"
                      alt="UBS Global"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Center Badge */}
                <div className="text-center my-auto space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 mx-auto flex items-center justify-center p-2 border border-white/20 shadow-inner">
                    <div className="relative w-full h-full">
                      <Image
                        src="/logo/icon.png"
                        alt="UBS Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    UBS GLOBAL APP
                  </h4>
                  <p className="text-[11px] text-blue-200/80 leading-relaxed px-2">
                    International Importing & Exporting Platform
                  </p>
                </div>

                {/* Bottom CTA Mockup indicator */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center border border-white/10">
                  <div className="text-[11px] font-semibold text-white">Tap to install from Google Play</div>
                  <div className="text-[9px] text-emerald-400 mt-0.5">● Official Release 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
