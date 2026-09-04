import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export default function HowItWorks() {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        );
      case 1:
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        );
      case 2:
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        );
      case 3:
      default:
        return (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        );
    }
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white relative">
      <Container>
        <SectionHeading
          badge="Seamless Process"
          title="How UBS Global Works"
          description="Getting started with international commerce takes just minutes. Follow four straightforward steps to begin expanding your trade horizons."
        />

        {/* 4-Step Process Grid with Progress Line */}
        <div className="relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-primary/10 via-secondary/40 to-primary/10 -translate-y-16 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1 hover:border-primary/30"
              >
                {/* Step badge & circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {getStepIcon(idx)}
                    </svg>
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-dark-blue text-white text-[11px] font-extrabold flex items-center justify-center border-2 border-white">
                    {idx + 1}
                  </span>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold text-primary bg-accent mb-3">
                  {item.highlight}
                </div>

                <h3 className="text-xl font-bold text-dark-blue mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
