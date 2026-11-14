"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleAnimBegin = () => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
        );
      }
    };

    window.addEventListener("startAnimationBegin", handleAnimBegin);
    return () => {
      window.removeEventListener("startAnimationBegin", handleAnimBegin);
    };
  }, []);

  return (
    <header ref={headerRef} className="w-full z-50 bg-[#0357EE]">
      <div className="w-full 2xl:container mx-auto px-4 md:px-16">
        <nav className="flex items-center justify-between py-4 md:py-8">
          {/* Moniepoint Logo */}
          <Link href="/" className="z-20">
            <div className="w-[128px] md:w-[177px] h-[36px] md:h-[44px]">
              <img
                alt="Moniepoint Logo"
                loading="eager"
                width={177}
                height={44}
                className="w-full h-full object-contain"
                src="/images/asset_11.svg"
              />
            </div>
          </Link>

          {/* Action Links matching original site */}
          <div className="flex items-center gap-3">
            {/* Our Story Button - Hidden on Mobile */}
            <a
              href="#our-story"
              className="cursor-pointer hidden md:flex items-center gap-2 h-15 bg-[#FFFFFF1A] text-white px-[34px] rounded-[40px] font-sans hover:bg-white/20 transition-all"
            >
              <span className="text-2xl">Our Story</span>
              <div className="h-6 w-6">
                <img
                  alt="Play Circle"
                  loading="lazy"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain"
                  src="/images/asset_12.svg"
                />
              </div>
            </a>

            {/* Download Review Button */}
            <a
              href="#download-section"
              className="cursor-pointer flex items-center gap-2 h-10 md:h-15 bg-[#FFFFFF1A] text-white px-[16px] md:px-[24px] rounded-[40px] font-sans hover:bg-white/20 transition-all"
            >
              <span className="text-base md:text-2xl">Download Review</span>
              <div className="h-4 md:h-6 w-4 md:w-6">
                <img
                  alt="Download"
                  loading="lazy"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain"
                  src="/images/asset_13.svg"
                />
              </div>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
