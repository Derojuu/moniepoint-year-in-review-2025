"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MILESTONES } from "@/constants/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function MilestonesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const headerTextRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimatedCardsRef = useRef(false);

  // Horizontal scroll pinning with ScrollTrigger
  useEffect(() => {
    const track = trackRef.current;
    const pinWrapper = pinWrapperRef.current;
    if (!track || !pinWrapper) return;

    const mm = gsap.matchMedia();
    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (ctx) => {
        const isMobile = ctx.conditions?.isMobile;
        const scrollDist = () =>
          Math.max(0, track.scrollWidth + (isMobile ? 50 : 100) - window.innerWidth);

        gsap.to(track, {
          x: () => -scrollDist(),
          ease: "none",
          scrollTrigger: {
            trigger: pinWrapper,
            start: () => (isMobile ? "top top" : "bottom bottom"),
            end: () => `+=${scrollDist()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    );

    return () => mm.revert();
  }, []);

  // IntersectionObserver to trigger entrance animations
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), 400);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Cards entrance animation
  useEffect(() => {
    if (!isVisible || hasAnimatedCardsRef.current) return;
    const mm = gsap.matchMedia();
    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (ctx) => {
        const isMobile = ctx.conditions?.isMobile;
        hasAnimatedCardsRef.current = true;

        if (headerTextRef.current) {
          gsap.fromTo(
            headerTextRef.current,
            { opacity: 0, y: 150 },
            { opacity: 1, y: 0, duration: 1.5, ease: "back.out(1.5)", force3D: true }
          );
        }

        const validCards = cardRefs.current.filter(Boolean);
        if (validCards.length) {
          gsap.fromTo(
            validCards,
            { opacity: 0, y: 350 },
            {
              opacity: 1,
              y: (i) => (isMobile ? (i % 2 === 0 ? -120 : -60) : 120 * (i % 2 !== 0 ? 1 : 0)),
              duration: 1.8,
              stagger: 0.2,
              ease: "back.out(1.4)",
              delay: 0.4,
              force3D: true,
            }
          );
        }
      }
    );

    return () => mm.revert();
  }, [isVisible]);

  // Background and SVG curve animation
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

    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, { strokeDasharray: len, strokeDashoffset: len });
      ScrollTrigger.create({
        trigger: pathRef.current,
        start: "top 90%",
        onEnter: () => {
          if (pathRef.current) {
            gsap.to(pathRef.current, {
              strokeDashoffset: 0,
              duration: 4,
              ease: "power2.out",
              force3D: true,
            });
          }
        },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#EBF8FD] relative overflow-hidden">
      <div ref={pinWrapperRef} className="relative w-full overflow-hidden" style={{ zIndex: 1 }}>
        {/* Background decorative image */}
        <div
          ref={bgRef}
          className="absolute inset-0 w-full h-full bg-no-repeat bg-contain bg-center pointer-events-none will-change-transform"
          style={{
            backgroundImage: "url('/images/asset_22.svg')",
            zIndex: 0,
          }}
        />

        {/* Section Heading */}
        <div className="w-full 2xl:container mx-auto px-4 md:px-16 relative z-10 pt-15 md:pt-20">
          <div ref={headerTextRef} className="space-y-3 md:space-y-5 mb-4 md:mb-32 opacity-0">
            <h2 className="leading-[0.8] text-[32px] md:text-[40px] lg:text-[64px] font-medium text-[#0357EE] font-sans">
              2025 was our 10th year
            </h2>
            <p className="leading-[1.2] text-[16px] md:text-[20px] lg:text-[24px] font-normal text-[#061333] font-sans">
              And it was a milestone year in many ways.
            </p>
          </div>
        </div>

        {/* Horizontal Track for Cards */}
        <div
          ref={trackRef}
          className="-mt-35 md:-mt-10 flex items-end md:items-start gap-6 flex-nowrap pl-4 md:pl-16 pr-4 md:pr-16 md:pt-0 md:pb-10"
          style={{ minHeight: "790px" }}
        >
          {MILESTONES.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="w-[330px] md:w-[410px] shrink-0 opacity-0"
            >
              <div className="relative bg-[#0357EE] rounded-[16.8px] py-6 px-5 h-[450px] md:h-[600px] shadow-xl flex flex-col justify-between overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-[44px] md:text-[68px] font-normal text-[#FEE17F] leading-none font-sans">
                    {item.metric}
                  </h3>
                  <h4 className="text-[15px] md:text-[24px] text-[#FEE17F] font-sans mt-1">
                    {item.label}
                  </h4>
                  <div className="bg-[#1F6AF0] w-full rounded-[10px] mt-3">
                    <p className="text-[13px] md:text-[20px] text-white font-sans p-3 leading-none">
                      {item.highlight}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-[90%] flex items-end justify-end pointer-events-none">
                  <img
                    src={item.image}
                    alt={item.metric}
                    width={1000}
                    height={1000}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Curve SVG */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 w-full pointer-events-none" style={{ zIndex: -1 }}>
          <svg
            width="1512"
            height="344"
            viewBox="0 0 1512 344"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              ref={pathRef}
              d="M2.5 5.88532C132.833 -2.78135 438 48.3853 616 322.385C838.5 664.885 711 258.385 838.5 239.385C966 220.385 898.5 420.385 1226 344.885C1488 284.485 1731.83 287.052 1821 295.885"
              stroke="#12226B"
              strokeWidth="10"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
