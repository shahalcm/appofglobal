import React from "react";
import Link from "next/link";
import { GOOGLE_PLAY_URL } from "@/lib/constants";

type ButtonVariant = "primary" | "secondary" | "outline" | "glass" | "google-play" | "dark";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isExternal?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  fullWidth = false,
  className = "",
  children,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-3.5 py-1.5 text-xs sm:text-sm gap-2",
    md: "px-5 py-2.5 text-sm sm:text-base gap-2.5 shadow-sm",
    lg: "px-7 py-3.5 text-base sm:text-lg font-semibold gap-3 shadow-md",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-[#0B4DFF] hover:bg-[#083ecd] text-white shadow-blue-500/25 hover:shadow-blue-500/40 hover:shadow-lg focus-visible:ring-[#0B4DFF]",
    secondary:
      "bg-[#1DA1FF] hover:bg-[#0d8fe6] text-white shadow-sky-500/20 hover:shadow-sky-500/35 hover:shadow-lg focus-visible:ring-[#1DA1FF]",
    outline:
      "border border-[#0B4DFF]/30 text-[#0B4DFF] hover:bg-[#EAF4FF] hover:border-[#0B4DFF] focus-visible:ring-[#0B4DFF]",
    glass:
      "bg-white/80 backdrop-blur-md border border-white/60 text-[#0A1A44] hover:bg-white hover:shadow-md focus-visible:ring-white",
    dark:
      "bg-[#0A1A44] hover:bg-[#07122e] text-white shadow-slate-900/20 hover:shadow-slate-900/30 hover:shadow-lg focus-visible:ring-[#0A1A44]",
    "google-play":
      "bg-[#0A1A44] hover:bg-[#061130] text-white border border-white/15 shadow-xl hover:shadow-2xl hover:border-white/30 focus-visible:ring-[#1DA1FF]",
  };

  const widthStyle = fullWidth ? "w-full" : "";
  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`;

  if (href) {
    const isGooglePlay = href === GOOGLE_PLAY_URL;
    const isActuallyExternal = isExternal ?? (isGooglePlay || href.startsWith("http"));

    return (
      <a
        href={href}
        className={combinedClassName}
        target={isActuallyExternal ? "_blank" : undefined}
        rel={isActuallyExternal ? "noopener noreferrer" : undefined}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

// Google Play icon SVG
export function GooglePlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.609 1.814C3.23 2.222 3 2.81 3 3.557v16.886c0 .747.23 1.335.609 1.743l.08.07 9.471-9.471v-.228L3.689 1.744l-.08.07z"
        fill="#00D2FF"
      />
      <path
        d="M17.314 16.942l-4.154-4.156v-.228l4.154-4.156.096.055 4.922 2.796c1.406.799 1.406 2.106 0 2.905l-4.922 2.796-.096-.012z"
        fill="#FFCE00"
      />
      <path
        d="M13.16 12.558l-9.471 9.471c.491.52 1.306.582 2.227.06l11.494-6.529-4.25-3.002z"
        fill="#FF334B"
      />
      <path
        d="M13.16 12.198l4.25-3.002L5.916 2.667c-.921-.522-1.736-.46-2.227.06l9.471 9.471z"
        fill="#00E676"
      />
    </svg>
  );
}
