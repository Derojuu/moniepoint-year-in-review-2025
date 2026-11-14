"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function OurStorySection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  const videoId = "hBzMW9Y349E";

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        if (headerRef.current) {
          gsap.from(headerRef.current, {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power2.out",
            force3D: true,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 50%",
              toggleActions: "play none none none",
            },
          });
        }
        if (videoWrapperRef.current) {
          gsap.fromTo(
            videoWrapperRef.current,
            { opacity: 0, scale: 0.6, y: 50 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1.2,
              ease: "back.out(1.7)",
              delay: 0.5,
              force3D: true,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 40%",
                toggleActions: "play none none none",
              },
            }
          );
        }
        if (arrowRef.current) {
          gsap.fromTo(
            arrowRef.current,
            { opacity: 0, scale: 0.5, x: 40 },
            {
              opacity: 1,
              scale: 1,
              x: 0,
              duration: 0.8,
              ease: "back.out(2)",
              delay: 1.4,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 40%",
                toggleActions: "play none none none",
              },
              onComplete: () => {
                if (arrowRef.current) {
                  gsap.to(arrowRef.current, {
                    y: -12,
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    force3D: true,
                  });
                }
              },
            }
          );
        }
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="our-story" ref={sectionRef} className="relative bg-white overflow-hidden">
      {/* Decorative top wave SVG */}
      <div>
        <div className="absolute top-0 w-full hidden md:block pointer-events-none">
          <svg
            width="1512"
            height="150"
            viewBox="0 0 1512 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M-20 -759.745C22.1566 -809.407 122.961 -865.834 188.928 -694.252C271.386 -479.775 334.621 -440.279 424.668 -448.278C514.714 -456.277 681.654 -786.242 567.831 -780.743C454.009 -775.244 229.398 -220.802 496.502 -225.801C763.606 -230.801 898.676 -827.738 1166.29 -573.765C1208.78 -539.602 1301.15 -400.683 1330.7 -118.313C1360.24 164.057 1589.88 156.325 1701 117.162"
              stroke="#12226B"
              strokeWidth="10"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="w-full 2xl:container mx-auto px-4 md:px-16 pt-16 md:pt-28">
        <div ref={headerRef} className="space-y-4 md:space-y-5">
          <h2 className="leading-[0.9] text-[32px] md:text-[40px] lg:text-[64px] font-medium text-[#0357EE] font-sans">
            Our story started a decade ago
          </h2>
          <p className="leading-[1.2] text-[16px] md:text-[20px] lg:text-[24px] font-normal text-[#061333] font-sans">
            Here&apos;s what a decade of powering payments across Nigeria looks like.
          </p>
        </div>
      </div>

      {/* Video & Thumbnail area */}
      <div className="relative h-[400px] md:h-[700px] w-full flex items-center justify-center">
        {/* Background illustration */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url(/images/asset_19.svg)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div
          ref={videoWrapperRef}
          className="relative h-[200px] md:h-[335px] w-full md:w-[680px] flex items-center justify-center z-10"
        >
          <div className="w-full 2xl:container mx-auto px-4 md:px-16">
            <div className="relative w-full max-w-[680px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%]">
                {isPlaying ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title="Moniepoint, 2023 - Blue, Everywhere."
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 w-full h-full cursor-pointer group"
                    aria-label="Play video"
                  >
                    <img
                      alt="Video thumbnail"
                      className="object-cover absolute inset-0 w-full h-full"
                      src="/images/asset_20.jpg"
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
          </div>

          {/* Curved Arrow Annotation */}
          <div
            ref={arrowRef}
            className="absolute flex items-center gap-2 z-10 -bottom-16 md:-bottom-14 right-8 md:right-12 pointer-events-none"
          >
            <div className="w-8 h-6 md:w-8 md:h-10">
              <img
                alt="Curved Arrow"
                width={32}
                height={40}
                className="w-full h-auto"
                src="/images/asset_21.svg"
              />
            </div>
            <p className="text-base md:text-[22px] text-[#FF5917] font-sans mt-4 font-medium">
              See our impact!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
