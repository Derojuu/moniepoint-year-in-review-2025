"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { AWARDS } from "@/constants/site";

export function WinningStreakSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);

  // Mobile elements
  const mobileTitleRef = useRef<HTMLHeadingElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const mobileRow1Ref = useRef<HTMLDivElement>(null);
  const mobileRow2Ref = useRef<HTMLDivElement>(null);

  // Desktop elements
  const desktopTitleRef = useRef<HTMLHeadingElement>(null);
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const desktopCol1Ref = useRef<HTMLDivElement>(null);
  const desktopCol2Ref = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const hasAnimatedEntrancesRef = useRef(false);
  const hasAnimatedPathsRef = useRef(false);

  // Award datasets split into 2 sets
  const awardsCol1 = AWARDS.slice(0, 3);
  const awardsCol2 = AWARDS.slice(3, 6);
  const doubledAwards1 = [...awardsCol1, ...awardsCol1];
  const doubledAwards2 = [...awardsCol2, ...awardsCol2];

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

  // Entrances
  useEffect(() => {
    if (isVisible && !hasAnimatedEntrancesRef.current) {
      hasAnimatedEntrancesRef.current = true;
      gsap.fromTo(
        [mobileTitleRef.current, mobileContainerRef.current],
        { opacity: 0, y: 150 },
        { opacity: 1, y: 0, duration: 1.5, ease: "back.out(1.5)", stagger: 0.25, force3D: true }
      );
      gsap.fromTo(
        [desktopTitleRef.current, desktopContainerRef.current],
        { opacity: 0, y: 150 },
        { opacity: 1, y: 0, duration: 1.5, ease: "back.out(1.5)", stagger: 0.25, force3D: true }
      );
    }
  }, [isVisible]);

  // Curve paths stroke animation
  useEffect(() => {
    if (isVisible && !hasAnimatedPathsRef.current) {
      hasAnimatedPathsRef.current = true;
      if (path1Ref.current) {
        const len = path1Ref.current.getTotalLength();
        gsap.set(path1Ref.current, { strokeDasharray: len, strokeDashoffset: len, opacity: 1 });
        gsap.to(path1Ref.current, { strokeDashoffset: 0, duration: 2.5, ease: "power2.inOut", delay: 0.3 });
      }
      if (path2Ref.current) {
        const len = path2Ref.current.getTotalLength();
        gsap.set(path2Ref.current, { strokeDasharray: len, strokeDashoffset: len, opacity: 1 });
        gsap.to(path2Ref.current, { strokeDashoffset: 0, duration: 2.5, ease: "power2.inOut", delay: 0.5 });
      }
    }
  }, [isVisible]);

  // Infinite Marquee animations (opposite directions)
  useEffect(() => {
    const tweens: gsap.core.Tween[] = [];

    const initDesktop = () => {
      if (window.innerWidth >= 1024) {
        if (desktopCol1Ref.current) {
          const dist = desktopCol1Ref.current.scrollHeight / 2;
          const t1 = gsap.to(desktopCol1Ref.current, {
            y: -dist,
            duration: 20,
            ease: "none",
            repeat: -1,
          });
          tweens.push(t1);
        }
        if (desktopCol2Ref.current) {
          const dist = desktopCol2Ref.current.scrollHeight / 2;
          gsap.set(desktopCol2Ref.current, { y: -dist });
          const t2 = gsap.to(desktopCol2Ref.current, {
            y: 0,
            duration: 20,
            ease: "none",
            repeat: -1,
          });
          tweens.push(t2);
        }
      }
    };

    const initMobile = () => {
      if (window.innerWidth < 1024) {
        if (mobileRow1Ref.current) {
          const dist = mobileRow1Ref.current.scrollWidth / 2;
          const t1 = gsap.to(mobileRow1Ref.current, {
            x: -dist,
            duration: 15,
            ease: "none",
            repeat: -1,
          });
          tweens.push(t1);
        }
        if (mobileRow2Ref.current) {
          const dist = mobileRow2Ref.current.scrollWidth / 2;
          gsap.set(mobileRow2Ref.current, { x: -dist });
          const t2 = gsap.to(mobileRow2Ref.current, {
            x: 0,
            duration: 15,
            ease: "none",
            repeat: -1,
          });
          tweens.push(t2);
        }
      }
    };

    const handleResize = () => {
      tweens.forEach((t) => t.kill());
      tweens.length = 0;
      if (desktopCol1Ref.current) gsap.set(desktopCol1Ref.current, { y: 0 });
      if (desktopCol2Ref.current) gsap.set(desktopCol2Ref.current, { y: 0 });
      if (mobileRow1Ref.current) gsap.set(mobileRow1Ref.current, { x: 0 });
      if (mobileRow2Ref.current) gsap.set(mobileRow2Ref.current, { x: 0 });
      setTimeout(() => {
        initDesktop();
        initMobile();
      }, 100);
    };

    initDesktop();
    initMobile();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      tweens.forEach((t) => t.kill());
    };
  }, []);

  const renderCard = (award: (typeof AWARDS)[0], index: number, isMobileCard: boolean) => (
    <div
      key={`${award.id}-${index}`}
      className={`flex flex-col items-start justify-between bg-[#FFFFFF] rounded-[20px] p-5 shadow-sm ${
        isMobileCard ? "w-[280px] h-[147px] shrink-0" : "w-full"
      }`}
    >
      <div className={`mb-4 ${isMobileCard ? "w-[47px]" : "w-[47px] md:w-[120px]"}`}>
        <img
          src={award.logo}
          alt={award.organization}
          width={1000}
          height={1000}
          className="w-full h-auto object-contain"
        />
      </div>
      <p
        className={`text-[#061333] font-sans font-medium leading-none ${
          isMobileCard ? "text-base" : "text-base md:text-[30px] xl:text-[44px]"
        }`}
      >
        {award.title}
      </p>
    </div>
  );

  return (
    <section ref={sectionRef} className="w-full relative bg-[#FFF4D1] overflow-hidden">
      {/* Background Pulse */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center pointer-events-none will-change-transform"
        style={{ backgroundImage: "url('/images/asset_22.svg')", zIndex: 0 }}
      />

      {/* Desktop Curve 1 */}
      <div className="hidden md:block w-full absolute bottom-0 left-0 z-10 pointer-events-none">
        <svg
          width="1512"
          height="424"
          viewBox="0 0 1512 424"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            ref={path1Ref}
            d="M1506.36 1220.47C1678.65 1055.4 1016.99 612.317 1023.39 840.811C1031.39 1126.43 1884.83 653.234 1287.94 590.709C691.049 528.183 35.3176 247.068 -40 1.46682"
            stroke="#12226B"
            strokeWidth="10"
            fill="none"
            style={{ opacity: 0 }}
          />
        </svg>
      </div>

      {/* Desktop Curve 2 */}
      <div className="hidden md:block w-full absolute top-0 left-0 z-10 pointer-events-none">
        <svg
          width="1512"
          height="482"
          viewBox="0 0 1512 482"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            ref={path2Ref}
            d="M1551.03 478.335C1682.73 279.926 933.077 7.37978 991.094 225.379C1063.62 497.877 1794.01 -154.068 1194.09 -76.054C594.166 1.9602 -112.992 -116.381 -242.513 -334.871"
            stroke="#12226B"
            strokeWidth="10"
            fill="none"
            style={{ opacity: 0 }}
          />
        </svg>
      </div>

      {/* Mobile Layout */}
      <div className="flex lg:hidden flex-col gap-4 relative z-20 py-10">
        <h2
          ref={mobileTitleRef}
          className="pl-4 md:pl-16 w-full md:w-[90%] md:max-w-[430px] leading-[0.8] text-[#0357EE] text-[32px] md:text-[40px] lg:text-[64px] font-medium font-sans mb-6 opacity-0"
        >
          And we&apos;ve kept a winning streak
        </h2>
        <div ref={mobileContainerRef} className="flex flex-col gap-4 opacity-0">
          <div className="overflow-hidden">
            <div ref={mobileRow1Ref} className="flex gap-4">
              {doubledAwards1.map((item, idx) => renderCard(item, idx, true))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div ref={mobileRow2Ref} className="flex gap-4">
              {doubledAwards2.map((item, idx) => renderCard(item, idx, true))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="w-full 2xl:container mx-auto px-4 md:px-16 relative z-20 hidden lg:block">
        <div className="flex flex-row items-start justify-between gap-12">
          <h2
            ref={desktopTitleRef}
            className="py-10 w-[90%] max-w-[430px] leading-[0.8] text-[#0357EE] text-[48px] xl:text-[64px] font-medium font-sans xl:mt-20 opacity-0"
          >
            And we&apos;ve kept a winning streak
          </h2>
          <div ref={desktopContainerRef} className="w-auto overflow-hidden opacity-0">
            <div className="flex flex-row gap-4 md:gap-8 items-stretch">
              <div className="flex-1 overflow-hidden" style={{ maxHeight: "900px" }}>
                <div ref={desktopCol1Ref} className="grid grid-cols-1 gap-4 md:gap-6" style={{ gridAutoRows: "1fr" }}>
                  {doubledAwards1.map((item, idx) => renderCard(item, idx, false))}
                </div>
              </div>
              <div className="flex-1 overflow-hidden" style={{ maxHeight: "900px" }}>
                <div ref={desktopCol2Ref} className="grid grid-cols-1 gap-4 md:gap-6" style={{ gridAutoRows: "1fr" }}>
                  {doubledAwards2.map((item, idx) => renderCard(item, idx, false))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
