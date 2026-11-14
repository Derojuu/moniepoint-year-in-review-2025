"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CREDIT_CATEGORIES } from "@/constants/site";

export function CreditImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(CREDIT_CATEGORIES.map(() => 0));
  const hasAnimatedRef = useRef(false);
  const hasStartedCounterRef = useRef(false);

  // IntersectionObserver
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
      { threshold: 0.3 }
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

  const animateNumbers = () => {
    CREDIT_CATEGORIES.forEach((cat: { name: string; color: string; percentage: string }, idx: number) => {
      const target = parseFloat(cat.percentage);
      const obj = { value: 0 };
      gsap.to(obj, {
        value: target,
        duration: 2.5,
        delay: 0.4 + 0.15 * idx,
        ease: "power2.out",
        onUpdate: () => {
          setCounts((prev) => {
            const next = [...prev];
            next[idx] = obj.value;
            return next;
          });
        },
      });
    });
  };

  // Entrance animations
  useEffect(() => {
    if (!isVisible || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 150 },
        { opacity: 1, y: 0, duration: 1.5, ease: "back.out(1.5)", force3D: true }
      );
    }

    if (arrowRef.current) {
      gsap.fromTo(
        arrowRef.current,
        { opacity: 0, scale: 0.5, x: 30 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "back.out(2)",
          delay: 0.8,
          onComplete: () => {
            if (arrowRef.current) {
              gsap.to(arrowRef.current, {
                y: -12,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            }
          },
        }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.4 }
      );
    }

    CREDIT_CATEGORIES.forEach((cat: { name: string; color: string; percentage: string }, idx: number) => {
      const el = barRefs.current[idx];
      if (el) {
        const target = parseFloat(cat.percentage);
        const barWidth = `${6 * target}%`;
        gsap.fromTo(
          el,
          { width: "0%" },
          {
            width: barWidth,
            duration: 2.5,
            ease: "power2.out",
            delay: 1.2 + 0.15 * idx,
            onStart: () => {
              if (idx === 0 && !hasStartedCounterRef.current) {
                hasStartedCounterRef.current = true;
                animateNumbers();
              }
            },
          }
        );
      }
    });

    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 4,
        ease: "power2.out",
        delay: 1,
        force3D: true,
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="w-full bg-[#061333] py-15 md:py-30 relative overflow-hidden">
      {/* Background Pulse */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center pointer-events-none will-change-transform"
        style={{ backgroundImage: "url('/images/asset_23.webp')", zIndex: 0 }}
      />

      <div className="w-full 2xl:container mx-auto px-4 md:px-16 relative z-10">
        {/* Heading */}
        <div ref={headerRef} className="space-y-5 opacity-0">
          <h2 className="text-[#FEE17F] leading-[0.8] text-[32px] md:text-[40px] lg:text-[64px] font-medium font-sans">
            But this growth isn&apos;t just about us
          </h2>
          <p className="w-[95%] max-w-[810px] leading-[1.2] text-[16px] md:text-[20px] lg:text-[24px] font-normal text-white font-sans">
            We have disbursed over <span className="text-[#FEE17F]">₦1 trillion</span> in credit to small businesses.
          </p>
        </div>

        {/* Bar Chart Section */}
        <div ref={contentRef} className="mt-30 md:mt-40 relative opacity-0">
          {/* Top 5 Arrow label */}
          <div ref={arrowRef} className="absolute flex items-center gap-2 z-10 -top-20 right-1 md:right-38 opacity-0">
            <div className="w-8 h-6 md:w-8 md:h-10 mt-4 mr-2">
              <img
                src="/images/asset_21.svg"
                alt="Curved Arrow"
                width={1000}
                height={1000}
                className="w-full h-auto"
              />
            </div>
            <p className="w-full max-w-[205px] md:max-w-[356px] leading-none text-sm md:text-[22px] text-[#FEE17F] font-sans">
              The top 5 business types receiving credit from Moniepoint.
            </p>
          </div>

          {/* Vertical axis line */}
          <div className="absolute left-[95px] md:left-[196px] top-0 bottom-0 w-[4px] bg-[#0441A3] z-10" />

          {/* Bar rows */}
          <div className="space-y-4">
            {CREDIT_CATEGORIES.map((item: { name: string; color: string; percentage: string }, idx: number) => (
              <div key={item.name} className="flex items-center gap-4">
                <p className="text-white text-right text-sm md:text-2xl font-sans w-[80px] md:w-[180px] shrink-0">
                  {item.name}
                </p>
                <div className="flex items-center gap-4 flex-1">
                  <div
                    ref={(el) => {
                      barRefs.current[idx] = el;
                    }}
                    className="rounded-tr-[8px] rounded-br-[8px] h-[44px]"
                    style={{ width: "0%", backgroundColor: item.color }}
                  />
                  <span className="text-white text-2xl md:text-[44px] font-sans font-medium">
                    {Math.round(counts[idx])}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Bottom Curve SVG */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ zIndex: 0 }}>
        <svg
          width="1512"
          height="385"
          viewBox="0 0 1512 385"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            ref={pathRef}
            d="M-116 5.86001C22.8263 -2.55945 347.879 47.1477 537.478 313.332C774.477 646.063 1098.82 307.017 1234.63 288.559C1370.44 270.101 963.543 712.123 1312.38 638.776C1591.46 580.099 1726.02 279.007 1821 287.588"
            stroke="#47C8FF"
            strokeWidth="10"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
