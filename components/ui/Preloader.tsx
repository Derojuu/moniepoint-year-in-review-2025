"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";

export function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const coinRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const hasTriggeredRef = useRef(false);

  const startExit = useCallback(() => {
    if (hasTriggeredRef.current || !containerRef.current) return;
    hasTriggeredRef.current = true;

    // Dispatch begin event so top bar starts animating into view
    window.dispatchEvent(new CustomEvent("startAnimationBegin"));

    gsap.to(containerRef.current, {
      y: "-100%",
      duration: 1.2,
      ease: "power2.inOut",
      force3D: true,
      onComplete: () => {
        setIsVisible(false);
        document.body.style.overflow = "";
        window.dispatchEvent(new CustomEvent("startAnimationComplete"));
        if (containerRef.current) {
          containerRef.current.style.display = "none";
        }
      },
    });
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    document.body.style.overflow = "hidden";

    // 3D Coin Spin Animation
    let spinTween: gsap.core.Tween | null = null;
    let bobTween: gsap.core.Tween | null = null;
    let shadowTween: gsap.core.Tween | null = null;

    if (coinRef.current) {
      // Continuous 3D Y-axis rotation
      spinTween = gsap.to(coinRef.current, {
        rotationY: 360,
        duration: 2.2,
        repeat: -1,
        ease: "none",
        transformPerspective: 1200,
      });

      // Subtle vertical bobbing
      bobTween = gsap.to(coinRef.current, {
        y: -10,
        duration: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    if (shadowRef.current) {
      shadowTween = gsap.to(shadowRef.current, {
        scale: 0.85,
        opacity: 0.18,
        duration: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Auto-trigger exit after pleasant intro duration
    const timer = setTimeout(() => {
      startExit();
    }, 1800);

    return () => {
      document.body.style.overflow = "";
      clearTimeout(timer);
      spinTween?.kill();
      bobTween?.kill();
      shadowTween?.kill();
    };
  }, [isVisible, startExit]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      onClick={startExit}
      title="Click to skip"
      suppressHydrationWarning
      className={`fixed inset-0 h-dvh w-screen bg-[#fff4d1] z-[9999] overflow-hidden px-4 will-change-transform cursor-pointer select-none ${
        !isVisible ? "hidden" : ""
      }`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center will-change-transform">
        {/* 3D Coin Container */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 flex items-center justify-center [perspective:1200px]">
          <div
            ref={coinRef}
            className="w-full h-full relative [transform-style:preserve-3d] will-change-transform"
          >
            {/* Coin Front Face */}
            <div className="absolute inset-0 w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-[#FFE79A] via-[#FEE17F] to-[#D99A1C] shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-4px_6px_rgba(0,0,0,0.25)] border-[3px] border-[#FFEAA7] [backface-visibility:hidden]">
              {/* Inner ring */}
              <div className="w-[84%] h-[84%] rounded-full border-2 border-dashed border-[#B88014]/40 flex items-center justify-center bg-gradient-to-tr from-[#FEE17F] to-[#FFF6D4]">
                <div className="w-[68%] h-[68%] relative flex items-center justify-center">
                  <img
                    src="/images/asset_14.png"
                    alt="Moniepoint Shield"
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(3,87,238,0.3)]"
                  />
                </div>
              </div>
            </div>

            {/* Coin Back Face */}
            <div className="absolute inset-0 w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-[#FFE79A] via-[#FEE17F] to-[#D99A1C] shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-4px_6px_rgba(0,0,0,0.25)] border-[3px] border-[#FFEAA7] [backface-visibility:hidden] [transform:rotateY(180deg)]">
              {/* Inner ring */}
              <div className="w-[84%] h-[84%] rounded-full border-2 border-dashed border-[#B88014]/40 flex items-center justify-center bg-gradient-to-tr from-[#FEE17F] to-[#FFF6D4]">
                <div className="w-[68%] h-[68%] relative flex items-center justify-center">
                  <img
                    src="/images/asset_15.svg"
                    alt="Moniepoint Shield Back"
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(3,87,238,0.3)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Shadow underneath the coin */}
        <div
          ref={shadowRef}
          className="w-20 md:w-28 h-3 md:h-4 bg-[#6E551C]/25 rounded-full blur-[6px] mt-6 will-change-transform"
        />
      </div>
    </div>
  );
}
