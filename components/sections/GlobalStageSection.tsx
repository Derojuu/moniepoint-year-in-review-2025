"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TWEETS } from "@/constants/site";

export function GlobalStageSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const tweetsBoxRef = useRef<HTMLDivElement>(null);
  const globeBoxRef = useRef<HTMLDivElement>(null);
  const tweetListRef = useRef<HTMLDivElement>(null);
  const curveRef = useRef<SVGPathElement>(null);
  const connectionLineRef = useRef<SVGPathElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [spiralReady, setSpiralReady] = useState(false);
  const hasAnimatedCurveRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection observer
  useEffect(() => {
    if (!sectionRef.current) return;
    const onSpiral = () => setSpiralReady(true);
    window.addEventListener("industriesSpiralComplete", onSpiral);
    const timeout = setTimeout(() => setSpiralReady(true), 4000);

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

    return () => {
      observer.disconnect();
      window.removeEventListener("industriesSpiralComplete", onSpiral);
      clearTimeout(timeout);
    };
  }, []);

  // Background pulse
  useEffect(() => {
    if (bgRef.current && !isMobile) {
      gsap.to(bgRef.current, {
        scale: 1.3,
        duration: 1.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        force3D: true,
      });
    }
  }, [isMobile]);

  // Entrance animations
  useEffect(() => {
    if (!isVisible) return;
    const tl = gsap.timeline();
    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: isMobile ? 0.8 : 1.2, ease: "power3.out" }
    );

    if (isMobile) {
      tl.fromTo(
        [tweetsBoxRef.current, globeBoxRef.current],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" },
        "-=0.3"
      );
    } else {
      tl.fromTo(
        [tweetsBoxRef.current, globeBoxRef.current],
        { opacity: 0, y: 150, scale: 0.85 },
        { opacity: 1, y: 0, scale: 1, duration: 1.5, stagger: 0.3, ease: "back.out(1.5)", force3D: true },
        "-=0.6"
      );
    }

    return () => {
      tl.kill();
    };
  }, [isVisible, isMobile]);

  // Continuous infinite vertical tweet ticker
  useEffect(() => {
    if (!tweetListRef.current) return;
    const dist = tweetListRef.current.scrollHeight / 2;
    const duration = isMobile ? 15 : 20;
    const tween = gsap.to(tweetListRef.current, {
      y: -dist,
      duration: duration,
      ease: "none",
      repeat: -1,
      force3D: true,
    });
    return () => {
      tween.kill();
    };
  }, [isMobile]);

  // Dotted flight path animation
  useEffect(() => {
    if (isVisible && connectionLineRef.current) {
      const rect = document.getElementById("connection-line-clip-rect");
      if (rect) {
        const duration = isMobile ? 2 : 2.5;
        const delay = isMobile ? 1.5 : 0.8;
        const tween = gsap.fromTo(
          rect,
          { attr: { height: 0 } },
          {
            attr: { height: 229 },
            duration: duration,
            ease: "power1.inOut",
            repeat: -1,
            repeatDelay: delay,
            force3D: true,
          }
        );
        return () => {
          tween.kill();
        };
      }
    }
  }, [isVisible, isMobile]);

  // Bottom decorative curve stroke animation
  useEffect(() => {
    if (isVisible && spiralReady && curveRef.current && !hasAnimatedCurveRef.current) {
      hasAnimatedCurveRef.current = true;
      const len = curveRef.current.getTotalLength();
      gsap.set(curveRef.current, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(curveRef.current, {
        strokeDashoffset: 0,
        duration: 6,
        ease: "power2.out",
        force3D: true,
        onComplete: () => {
          window.dispatchEvent(new CustomEvent("missionGlobeSpiralComplete"));
        },
      });
    }
  }, [isVisible, spiralReady]);

  const doubledTweets = [...TWEETS, ...TWEETS];

  return (
    <div ref={sectionRef} className="w-full bg-[#0441A3] relative overflow-hidden py-16 md:py-28">
      {/* Background Pulse */}
      <div
        ref={bgRef}
        className={`absolute inset-0 w-full h-full bg-no-repeat bg-contain bg-center pointer-events-none ${
          !isMobile ? "will-change-transform" : ""
        }`}
        style={{ backgroundImage: "url('/images/asset_28.svg')", zIndex: 0 }}
      />

      <div className="w-full 2xl:container mx-auto px-4 md:px-16 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="space-y-4 md:space-y-6 mb-12 md:mb-20 opacity-0">
          <h2 className="leading-none text-[32px] md:text-[40px] lg:text-[64px] font-medium text-[#47C8FF] font-sans">
            We took our mission to the global stage
          </h2>
          <p className="leading-snug text-[16px] md:text-[20px] lg:text-[24px] font-normal text-white font-sans max-w-[800px]">
            To power the dreams of over 200 million Africans everywhere, starting with the UK.
          </p>
        </div>

        {/* Content row: Tweets on Left, Globe on Right */}
        <div className="flex flex-col-reverse xl:flex-row items-start md:items-center justify-between gap-6 md:gap-16 overflow-hidden">
          {/* Left: Tweets infinite ticker */}
          <div ref={tweetsBoxRef} className="space-y-4 shrink-0 w-full lg:w-auto opacity-0">
            <h3 className="text-white leading-[0.8] text-base md:text-3xl font-sans">
              Our users just can&apos;t get enough
            </h3>
            <div className="h-[300px] md:h-[511px] w-full lg:w-[600px] rounded-[20px] overflow-hidden bg-[#000000] relative">
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 overflow-hidden">
                <div ref={tweetListRef} className="flex flex-col mx-6">
                  {doubledTweets.map((tweet, idx) => (
                    <div key={`${tweet.id}-${idx}`} className="shrink-0 w-full mb-4 last:mb-0">
                      <img
                        src={tweet.image}
                        alt={`Tweet ${tweet.id}`}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: MonieWorld UK Globe */}
          <div ref={globeBoxRef} className="relative w-full max-w-full md:w-auto md:max-w-none xl:ml-auto overflow-visible opacity-0">
            {/* Top Tag */}
            <div className="absolute left-0 lg:-left-10 top-[25%] z-20">
              <div
                className="rounded-[10px] p-px w-full max-w-[148px] md:max-w-[308px]"
                style={{ background: "linear-gradient(95.35deg, #47C8FF 6.32%, rgba(71, 200, 255, 0) 87.38%)" }}
              >
                <div className="bg-[#074FC4] py-[13px] px-[10px] md:px-[17px] rounded-[10px]">
                  <p className="text-xs md:text-base text-white font-sans">
                    Monieworld has become a favourite in Nigerian communities in the UK 🌟
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="absolute left-0 lg:-left-10 bottom-[20%] z-20">
              <div
                className="rounded-[10px] p-px w-full max-w-[148px] md:max-w-[308px]"
                style={{ background: "linear-gradient(95.35deg, #47C8FF 6.32%, rgba(71, 200, 255, 0) 87.38%)" }}
              >
                <div className="bg-[#074FC4] py-[13px] px-[10px] md:px-[13px] rounded-[10px]">
                  <p className="text-xs md:text-base text-white font-sans">
                    Our biggest acquisition vehicle is word-of-mouth 📣
                  </p>
                </div>
              </div>
            </div>

            {/* Globe Main Graphic */}
            <img
              src="/images/asset_31.svg"
              alt="Globe"
              className="w-full h-auto max-w-full object-contain"
            />

            {/* UK Moniepoint Pin */}
            <div className="absolute w-6 h-6 md:w-10 md:h-10 top-[27%] left-[60%] md:left-[57%] -translate-x-1/2 -translate-y-1/2">
              <img
                src="/images/asset_11.svg"
                alt="Moniepoint Logo UK"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Animated Connection Arc between UK and Nigeria */}
            <div className="absolute top-[45%] md:top-[45%] left-[55%] md:left-[52%] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute -top-2.5 md:-top-5 left-[5%] -translate-x-1/2 w-6 h-6 md:w-10 md:h-10">
                <div className="relative w-full h-full">
                  <div className="absolute -inset-px bg-white/30 rounded-full animate-ping" />
                  <div className="relative w-full h-full rounded-full bg-white/50" />
                </div>
              </div>
              <svg width="47" height="229" viewBox="0 0 47 229" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto h-[120px] md:h-auto">
                <defs>
                  <clipPath id="connection-line-clip">
                    <rect id="connection-line-clip-rect" x="0" y="0" width="47" height="0" />
                  </clipPath>
                </defs>
                <path
                  d="M2 2C24.5 28 56.4997 85.5 39 226.5"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="12 12"
                  opacity="0.3"
                />
                <path
                  ref={connectionLineRef}
                  d="M2 2C24.5 28 56.4997 85.5 39 226.5"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="12 12"
                  clipPath="url(#connection-line-clip)"
                />
              </svg>
              <div className="absolute -bottom-3 left-[85%] -translate-x-1/2 w-6 h-6 md:w-10 md:h-10">
                <div className="relative w-full h-full rounded-full bg-white/50 animate-pulse" />
              </div>
            </div>

            {/* Nigeria Moniepoint Pin */}
            <div className="absolute w-6 h-6 md:w-10 md:h-10 top-[58%] left-[48%] md:left-[45%]">
              <img
                src="/images/asset_11.svg"
                alt="Moniepoint Logo Nigeria"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Currency badge */}
            <div className="absolute top-[20%] right-0 w-[100px] h-[60px] md:w-[190px] md:h-[138px]">
              <img
                src="/images/asset_30.svg"
                alt="GBP-NGN Currency"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative SVG curve bottom */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <svg
          width="1512"
          height="292"
          viewBox="0 0 1512 292"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            ref={curveRef}
            d="M-67.0021 3.71289C-249.997 168.713 452.8 611.613 446 383.213C437.5 97.7129 -469 570.713 165 633.213C799 695.713 1495.5 976.713 1575.5 1222.21"
            stroke="#12226B"
            strokeWidth="10"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
