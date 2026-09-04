import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3.5 transition-all">
          <span
            className={`w-2 h-2 rounded-full ${
              isDark ? "bg-[#1DA1FF] shadow-[0_0_8px_#1DA1FF]" : "bg-[#0B4DFF]"
            }`}
          />
          <span
            className={
              isDark
                ? "text-[#1DA1FF] bg-[#1DA1FF]/10 px-2 py-0.5 rounded-full border border-[#1DA1FF]/20"
                : "text-[#0B4DFF] bg-[#EAF4FF] px-2 py-0.5 rounded-full border border-[#0B4DFF]/15"
            }
          >
            {badge}
          </span>
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.18] ${
          isDark ? "text-white" : "text-[#0A1A44]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg lg:text-xl font-normal leading-relaxed ${
            isDark ? "text-blue-100/80" : "text-[#0A1A44]/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
