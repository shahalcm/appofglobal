"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Button, { GooglePlayIcon } from "@/components/ui/Button";
import { NAV_LINKS, GOOGLE_PLAY_URL } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-dark-blue/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl z-50 flex flex-col p-6 animate-in slide-in-from-right duration-300">
        {/* Header inside drawer */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0">
              <Image
                src="/logo/icon.png"
                alt="UBS Global"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-extrabold text-dark-blue tracking-tight">
              UBS GLOBAL
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-dark-blue hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 py-6 flex flex-col gap-2 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="px-4 py-3 text-base font-medium text-dark-blue hover:text-primary hover:bg-accent rounded-xl transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Download Button in Drawer */}
        <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
          <Button
            href={GOOGLE_PLAY_URL}
            variant="google-play"
            size="lg"
            fullWidth
            icon={<GooglePlayIcon className="w-5 h-5" />}
          >
            Download on Google Play
          </Button>
          <p className="text-center text-xs text-slate-400">
            Available for Android devices
          </p>
        </div>
      </div>
    </div>
  );
}
