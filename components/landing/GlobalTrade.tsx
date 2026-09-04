import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function GlobalTrade() {
  const tradeHubs = [
    { title: "North America Hub", desc: "Cross-border sourcing & distribution routes", x: "24%", y: "36%" },
    { title: "Europe & UK Gateway", desc: "Industrial and luxury goods exchange", x: "49%", y: "28%" },
    { title: "Middle East Logistics", desc: "Central trade crossroads and logistics conduit", x: "61%", y: "42%" },
    { title: "Asia Pacific Corridor", desc: "Manufacturing heartland and high-volume trade", x: "78%", y: "48%" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-dark-mesh relative overflow-hidden text-white">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-175 rounded-full border border-blue-500/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-237.5 h-237.5 rounded-full border border-blue-500/5 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          theme="dark"
          badge="Border-Free Commerce"
          title="Connecting Businesses Across Borders"
          description="UBS Global is designed to help buyers and sellers discover international opportunities and build connections across markets."
        />

        {/* World Map & Connection Graphic Container */}
        <div className="relative mt-8 rounded-3xl bg-[#0F2154]/60 border border-blue-400/20 backdrop-blur-xl p-8 sm:p-12 shadow-2xl overflow-hidden">
          {/* Stylized World Map Silhouette SVG */}
          <div className="relative w-full aspect-2/1 min-h-75 sm:min-h-105 flex items-center justify-center">
            <svg
              viewBox="0 0 1000 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full opacity-40 object-contain select-none pointer-events-none"
              aria-hidden="true"
            >
              {/* World Continents simplified stylized paths */}
              {/* North America */}
              <path
                d="M120,110 C150,90 220,80 270,120 C300,150 290,200 250,230 C210,250 180,310 160,330 C150,300 130,240 100,200 C80,160 90,130 120,110 Z"
                fill="#1DA1FF"
                fillOpacity="0.25"
                stroke="#1DA1FF"
                strokeWidth="1.5"
              />
              {/* South America */}
              <path
                d="M230,300 C270,320 300,360 290,410 C270,470 230,480 210,430 C190,390 200,340 230,300 Z"
                fill="#1DA1FF"
                fillOpacity="0.2"
                stroke="#1DA1FF"
                strokeWidth="1.5"
              />
              {/* Europe */}
              <path
                d="M450,110 C500,100 550,120 540,170 C520,200 480,210 440,190 C420,160 430,130 450,110 Z"
                fill="#0B4DFF"
                fillOpacity="0.3"
                stroke="#0B4DFF"
                strokeWidth="1.5"
              />
              {/* Africa */}
              <path
                d="M470,220 C530,220 560,260 550,330 C530,390 490,430 460,390 C430,340 440,260 470,220 Z"
                fill="#1DA1FF"
                fillOpacity="0.22"
                stroke="#1DA1FF"
                strokeWidth="1.5"
              />
              {/* Asia */}
              <path
                d="M580,100 C680,80 820,110 850,180 C870,240 820,300 750,290 C680,270 630,290 600,240 C570,180 560,130 580,100 Z"
                fill="#0B4DFF"
                fillOpacity="0.3"
                stroke="#0B4DFF"
                strokeWidth="1.5"
              />
              {/* Australia */}
              <path
                d="M780,340 C840,330 870,370 850,420 C810,440 760,420 750,380 C750,350 760,340 780,340 Z"
                fill="#1DA1FF"
                fillOpacity="0.25"
                stroke="#1DA1FF"
                strokeWidth="1.5"
              />

              {/* Connecting Trade Flight / Shipping Arcs */}
              <path
                d="M220,170 Q350,80 480,150"
                stroke="#00D2FF"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-pulse"
              />
              <path
                d="M480,150 Q600,120 720,180"
                stroke="#00D2FF"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-pulse"
              />
              <path
                d="M520,290 Q650,220 780,350"
                stroke="#1DA1FF"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M220,170 Q400,280 520,290"
                stroke="#1DA1FF"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Glowing Trade Node Badges */}
            <div className="absolute top-1/4 left-[20%] sm:left-[22%] -translate-x-1/2 flex flex-col items-center group">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-white shadow-lg"></span>
              </span>
              <span className="mt-2 text-[10px] sm:text-xs font-bold text-white bg-dark-blue/90 px-2.5 py-1 rounded-full border border-blue-400/30 whitespace-nowrap shadow-md">
                North America Market
              </span>
            </div>

            <div className="absolute top-[28%] left-[48%] -translate-x-1/2 flex flex-col items-center group">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary border-2 border-white shadow-lg"></span>
              </span>
              <span className="mt-2 text-[10px] sm:text-xs font-bold text-white bg-dark-blue/90 px-2.5 py-1 rounded-full border border-blue-400/30 whitespace-nowrap shadow-md">
                Europe Hub
              </span>
            </div>

            <div className="absolute top-[38%] left-[61%] -translate-x-1/2 flex flex-col items-center group">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-white shadow-lg"></span>
              </span>
              <span className="mt-2 text-[10px] sm:text-xs font-bold text-white bg-dark-blue/90 px-2.5 py-1 rounded-full border border-blue-400/30 whitespace-nowrap shadow-md">
                Middle East Corridor
              </span>
            </div>

            <div className="absolute top-[44%] left-[76%] -translate-x-1/2 flex flex-col items-center group">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary border-2 border-white shadow-lg"></span>
              </span>
              <span className="mt-2 text-[10px] sm:text-xs font-bold text-white bg-dark-blue/90 px-2.5 py-1 rounded-full border border-blue-400/30 whitespace-nowrap shadow-md">
                Asia Pacific Markets
              </span>
            </div>
          </div>

          {/* Trade Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
            {tradeHubs.map((hub, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                  {hub.title}
                </div>
                <div className="text-xs text-blue-100/75 leading-relaxed">
                  {hub.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
