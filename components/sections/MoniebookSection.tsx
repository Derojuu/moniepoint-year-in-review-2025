"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export function MoniebookSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const hasAnimatedPathRef = useRef(false);

  const videoId = "fNzMYeHq_Pw";

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
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    if (videoWrapperRef.current) {
      gsap.fromTo(
        videoWrapperRef.current,
        { opacity: 0, scale: 0.6, y: 60 },
        { opacity: 1, scale: 1, y: 0, duration: 1.4, ease: "back.out(1.5)", delay: 0.4, force3D: true }
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
          duration: 0.8,
          ease: "back.out(2)",
          delay: 1.2,
          onComplete: () => {
            if (arrowRef.current) {
              gsap.to(arrowRef.current, {
                y: -10,
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
    if (pathRef.current && !hasAnimatedPathRef.current) {
      hasAnimatedPathRef.current = true;
      const len = pathRef.current.getTotalLength();
      gsap.set(pathRef.current, { strokeDasharray: len, strokeDashoffset: len, opacity: 1 });
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 2.5,
        ease: "power2.inOut",
        delay: 0.3,
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-16 md:py-28">
      <div className="w-full 2xl:container mx-auto px-4 md:px-16 relative z-20">
        <div
          ref={headerRef}
          className={`space-y-4 md:space-y-6 w-full max-w-[820px] mb-12 md:mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="leading-[0.8] text-[32px] md:text-[40px] lg:text-[64px] font-medium text-[#0357EE] font-sans">
            We launched Moniebook
          </h2>
          <p className="text-[16px] md:text-[20px] lg:text-[24px] font-normal text-[#061333] font-sans leading-[1.2]">
            Our all-in-one business management platform. Moniebook is Nigeria&apos;s
            first platform that seemlessly unifies payments and bookkeeping in one place.
          </p>
        </div>

        {/* Video / Demo Showcase */}
        <div
          ref={videoWrapperRef}
          className="relative w-full md:w-[680px] mx-auto flex items-center justify-center z-10 opacity-0"
        >
          <div className="relative w-full max-w-[680px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative pb-[56.25%]">
              {isPlaying ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="Moniebook Launch Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 w-full h-full cursor-pointer group"
                  aria-label="Play Moniebook video"
                >
                  <img
                    alt="Moniebook Video thumbnail"
                    className="object-cover absolute inset-0 w-full h-full"
                    src="/images/asset_41.jpg"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg
                        className="w-5 h-5 md:w-8 md:h-8 text-black ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Curved Arrow Annotation */}
          <div
            ref={arrowRef}
            className="absolute flex items-center gap-2 z-10 -bottom-12 md:-bottom-18 right-4 md:-right-20 pointer-events-none opacity-0"
          >
            <div className="w-8 h-6 md:w-8 md:h-10">
              <img
                alt="Curved Arrow"
                width={32}
                height={40}
                className="w-full h-auto"
                src="/images/asset_42.svg"
              />
            </div>
            <p className="text-sm md:text-[22px] text-[#258653] font-sans mt-4 font-medium">
              See what it can do!
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Wave SVG */}
      <div className="w-full hidden md:block absolute bottom-0 left-0 z-10 pointer-events-none">
        <svg
          width="1512"
          height="444"
          viewBox="0 0 1512 444"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            ref={pathRef}
            d="M1506.36 1220.47C1678.65 1055.4 1016.99 612.317 1023.39 840.811C1031.39 1126.43 1884.83 653.234 1287.94 590.709C691.049 528.183 35.3176 247.068 -40 1.46682"
            stroke="#12226B"
            strokeWidth="10"
            fill="none"
            style={{ opacity: 0 }}
          />
        </svg>
      </div>
    </section>
  );
}
