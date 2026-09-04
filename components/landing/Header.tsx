"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button, { GooglePlayIcon } from "@/components/ui/Button";
import MobileMenu from "@/components/landing/MobileMenu";
import { NAV_LINKS, GOOGLE_PLAY_URL } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-blue-900/10 py-3"
            : "bg-white/70 backdrop-blur-sm border-b border-slate-100 py-4"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="UBS Global Home"
          >
            <div className="relative h-9 sm:h-10 w-32 sm:w-40 transition-transform group-hover:scale-[1.02]">
              <Image
                src="/logo/logo.png"
                alt="UBS Global Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-[#0A1A44]/80 hover:text-[#0B4DFF] hover:bg-[#EAF4FF]/60 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Button
              href={GOOGLE_PLAY_URL}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex shadow-sm hover:shadow-md"
              icon={<GooglePlayIcon className="w-4 h-4" />}
            >
              Download App
            </Button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-[#0A1A44] hover:bg-[#EAF4FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4DFF]"
              aria-label="Open mobile navigation menu"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
