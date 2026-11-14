"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { INDUSTRIES } from "@/constants/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const curveRef = useRef<SVGPathElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimatedCurveRef = useRef(false);

  // Desktop wheel refs
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const desktopWheelRef = useRef<HTMLDivElement>(null);
  const desktopCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Mobile stacked cards refs
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const mobileCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Observe section visibility
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), 600);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Background pulse
  useEffect(() => {
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.3,
        duration: 1.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        force3D: true,
      });
    }
  }, []);

  // Header entrance
  useEffect(() => {
    if (!isVisible || !headerRef.current) return;
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 150 },
      { opacity: 1, y: 0, duration: 1.5, ease: "back.out(1.5)", force3D: true }
    );
  }, [isVisible]);

  // Curve stroke drawing
  useEffect(() => {
    if (!isVisible || hasAnimatedCurveRef.current || !curveRef.current) return;
    hasAnimatedCurveRef.current = true;
    const len = curveRef.current.getTotalLength();
    gsap.set(curveRef.current, { strokeDasharray: len, strokeDashoffset: len, opacity: 1 });
    gsap.to(curveRef.current, {
      strokeDashoffset: 0,
      duration: 6,
      ease: "power2.out",
      delay: 0.5,
      force3D: true,
      onComplete: () => {
        window.dispatchEvent(new CustomEvent("industriesSpiralComplete"));
      },
    });
  }, [isVisible]);

  // Desktop curved wheel animation
  useEffect(() => {
    const container = desktopContainerRef.current;
    const wheel = desktopWheelRef.current;
    if (!container || !wheel) return;

    const cards = desktopCardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      gsap.set(cards, { opacity: 0, y: 400, scale: 0.8 });
      gsap.set(wheel, { transformOrigin: "center 2600px", rotation: 22.5 });

      ScrollTrigger.create({
        trigger: container,
        start: "top 30%",
        onEnter: () => {
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.8,
            stagger: 0.2,
            ease: "back.out(1.5)",
            force3D: true,
            delay: 0.3,
          });
        },
        once: true,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            pin: true,
            start: "top top",
            end: "+=2000",
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        .to(wheel, { rotation: -22.5, ease: "power1.inOut" });
    });

    return () => mm.revert();
  }, []);

  // Mobile cards entrance
  useEffect(() => {
    if (!isVisible) return;
    const validCards = mobileCardsRef.current.filter(Boolean);
    if (validCards.length > 0) {
      gsap.fromTo(
        validCards,
        { opacity: 0, y: 100, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2, ease: "back.out(1.4)", force3D: true }
      );
    }
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="w-full bg-[#EBF8FD] relative">
      {/* Background Pulse */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-full bg-no-repeat bg-contain bg-center will-change-transform"
          style={{ backgroundImage: "url('/images/asset_28.svg')", zIndex: 0 }}
        />
      </div>

      {/* Header Info */}
      <div className="relative pt-15 md:pt-30">
        <div className="w-full 2xl:container mx-auto px-4 md:px-16 relative z-10">
          <div ref={headerRef} className="space-y-4 md:space-y-6 opacity-0">
            <h2 className="text-[#0357EE] leading-none text-[32px] md:text-[40px] lg:text-[64px] font-medium font-sans">
              Our impact cut across multiple industries
            </h2>
            <p className="leading-normal text-[16px] md:text-[20px] lg:text-[24px] font-normal text-[#061333] font-sans">
              Here&apos;s what it means for millions of businesses across Nigeria.
            </p>
            <a
              href="https://casestudies.moniepoint.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[40px] md:h-[63px] bg-[#0357EE] px-4 md:px-6 rounded-[100px] text-white text-sm md:text-2xl font-sans hover:bg-[#0347CC] transition-colors"
            >
              Explore our case studies
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Wheel Fan Rotation */}
      <div ref={desktopContainerRef} className="hidden lg:block relative overflow-hidden h-[850px]">
        <div className="relative w-full h-full">
          <div className="absolute left-1/2" style={{ top: "100px", transform: "translateX(-50%)", height: "100%" }}>
            <div ref={desktopWheelRef} className="relative" style={{ transformOrigin: "center 2600px" }}>
              {INDUSTRIES.map((item: { title: string; subtitle: string; bgColor: string; image: string }, idx: number) => {
                const angle = (idx - (INDUSTRIES.length - 1) / 2) * (45 / (INDUSTRIES.length - 1));
                return (
                  <div
                    key={item.title}
                    ref={(el) => {
                      desktopCardsRef.current[idx] = el;
                    }}
                    className="absolute top-0 w-[460px] h-[600px] rounded-[16px] p-6 flex flex-col shadow-2xl"
                    style={{
                      backgroundColor: item.bgColor,
                      transformOrigin: "center 2600px",
                      transform: `translateX(-50%) rotate(${angle}deg)`,
                      left: "50%",
                    }}
                  >
                    <div className="space-y-3">
                      <h3 className="text-white text-[48px] md:text-[68px] font-medium font-sans leading-none text-center">
                        {item.title}
                      </h3>
                      <p className="text-[#F4F4F4] text-lg md:text-xl font-sans text-center">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="mt-auto pt-2.5 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-contain max-h-[300px]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Stacked Sticky Cards */}
      <div ref={mobileContainerRef} className="block lg:hidden py-10 md:py-20 z-20 relative w-full">
        <div className="w-full 2xl:container mx-auto px-4 md:px-16">
          <div className="relative space-y-4" style={{ height: `${500 + 500 * INDUSTRIES.length}px` }}>
            {INDUSTRIES.map((item: { title: string; subtitle: string; bgColor: string; image: string }, idx: number) => (
              <div
                key={item.title}
                ref={(el) => {
                  mobileCardsRef.current[idx] = el;
                }}
                style={{
                  backgroundColor: item.bgColor,
                  zIndex: idx + 1,
                  top: `${40 + 20 * idx}px`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                }}
                className="flex flex-col items-center p-6 rounded-[12px] h-[500px] sticky overflow-hidden opacity-0"
              >
                <div className="flex flex-col items-center w-full">
                  <h3 className="text-[51px] text-white leading-tight font-sans font-medium text-center">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-white w-full max-w-[80%] mt-3 font-sans font-normal text-center">
                    {item.subtitle}
                  </p>
                </div>
                <div className="mt-auto pt-4 -mb-6 w-full flex justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full h-auto max-h-[260px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SVG Decorative Curve */}
      <div className="absolute top-0 left-0 w-full z-0 overflow-hidden pointer-events-none">
        <svg
          width="1512"
          height="276"
          viewBox="0 0 1512 276"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            ref={curveRef}
            d="M-116.5 -379.025C22.3263 -387.444 347.379 -337.737 536.978 -71.5525C773.977 261.178 1098.32 -77.8677 1234.13 -96.3257C1369.94 -114.784 963.043 327.238 1311.88 253.891C1590.96 195.214 1725.52 -105.878 1820.5 -97.2967"
            stroke="#142479"
            strokeWidth="10"
            fill="none"
            style={{ opacity: 0 }}
          />
        </svg>
      </div>
    </div>
  );
}
