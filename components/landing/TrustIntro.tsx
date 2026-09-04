import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function TrustIntro() {
  const introPillars = [
    {
      title: "Global Marketplace",
      desc: "Cross-border product discovery bridging regional manufacturers and international distributors.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: "Direct Communication",
      desc: "Instant buyer and seller messaging enabling swift trade discussions and negotiations without barriers.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "End-to-End Business Flow",
      desc: "Integrated product catalogs, verified business profiles, order records, and mobile-first account management.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-50/70 border-y border-slate-100">
      <Container>
        <SectionHeading
          badge="Connected International Trade"
          title="One Platform. Global Business Opportunities."
          description="UBS Global brings buyers and sellers together through a connected international marketplace designed for product discovery, communication, business management, and global trade opportunities."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {introPillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#0B4DFF]/30 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] text-[#0B4DFF] group-hover:bg-[#0B4DFF] group-hover:text-white transition-colors flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A1A44] mb-3 group-hover:text-[#0B4DFF] transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
