import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button, { GooglePlayIcon } from "@/components/ui/Button";
import { GOOGLE_PLAY_URL } from "@/lib/constants";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#050D24] text-slate-300 border-t border-slate-800/80 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-10 w-44">
              <Image
                src="/logo/logo.png"
                alt="UBS Global"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              A connected platform for buyers, sellers, international product discovery,
              and global business opportunities.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-blue-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>UBS Global Official Mobile Platform</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#buyers" className="hover:text-white transition-colors">
                  For Buyers
                </a>
              </li>
              <li>
                <a href="#sellers" className="hover:text-white transition-colors">
                  For Sellers
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors"
                >
                  Account Guidelines
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors"
                >
                  Security Overview
                </a>
              </li>
            </ul>
          </div>

          {/* Download App CTA in Footer */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Download App
            </h4>
            <p className="text-xs text-slate-400">
              Get the latest release directly from Google Play.
            </p>
            <div className="pt-1">
              <Button
                href={GOOGLE_PLAY_URL}
                variant="google-play"
                size="sm"
                fullWidth
                icon={<GooglePlayIcon className="w-4 h-4" />}
              >
                Get It on Google Play
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic/Specified Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} UBS Global Importing & Exporting. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Android App on Google Play</span>
            <span>Worldwide Trade Platform</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
