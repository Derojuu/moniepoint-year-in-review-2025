"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroSection() {
  const number20Ref = useRef<HTMLDivElement>(null);
  const number25Ref = useRef<HTMLDivElement>(null);
  const inReviewRef = useRef<HTMLHeadingElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const leftCoinRef = useRef<HTMLDivElement>(null);
  const rightCoinRef = useRef<HTMLDivElement>(null);
  const desktopCurveRef = useRef<SVGPathElement>(null);
  const mobileCurveRef1 = useRef<SVGPathElement>(null);
  const mobileCurveRef2 = useRef<SVGPathElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;
    let hasRun = false;

    // Initial states
    gsap.set([number20Ref.current, number25Ref.current, inReviewRef.current], { opacity: 0 });
    if (number20Ref.current) gsap.set(number20Ref.current, { x: -300 });
    if (number25Ref.current) gsap.set(number25Ref.current, { x: 300 });
    if (inReviewRef.current) gsap.set(inReviewRef.current, { y: 20 });

    // Floating coins yoyo animation
    if (leftCoinRef.current) {
      gsap.to(leftCoinRef.current, {
        y: -15,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }

    if (rightCoinRef.current) {
      gsap.to(rightCoinRef.current, {
        y: -12,
        duration: 2.3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.5,
      });
    }

    // Set SVG curve dash arrays
    if (desktopCurveRef.current) {
      const len = desktopCurveRef.current.getTotalLength();
      gsap.set(desktopCurveRef.current, { strokeDasharray: len, strokeDashoffset: len });
    }
    if (mobileCurveRef1.current) {
      const len1 = mobileCurveRef1.current.getTotalLength();
      gsap.set(mobileCurveRef1.current, { strokeDasharray: len1, strokeDashoffset: len1 });
    }
    if (mobileCurveRef2.current) {
      const len2 = mobileCurveRef2.current.getTotalLength();
      gsap.set(mobileCurveRef2.current, { strokeDasharray: len2, strokeDashoffset: len2 });
    }

    const startHeroAnim = () => {
      if (hasRun) return;
      hasRun = true;
      ctx = gsap.context(() => {
        requestAnimationFrame(() => {
          if (number20Ref.current) {
            gsap.to(number20Ref.current, {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              force3D: true,
            });
          }
          if (number25Ref.current) {
            gsap.to(number25Ref.current, {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              force3D: true,
            });
          }
          if (inReviewRef.current) {
            gsap.to(inReviewRef.current, {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              delay: 0.4,
              force3D: true,
            });
          }
          if (arrowRef.current) {
            gsap.fromTo(
              arrowRef.current,
              { scale: 0.7 },
              { scale: 1.1, duration: 1, ease: "power1.inOut", repeat: -1, yoyo: true }
            );
          }
          window.dispatchEvent(new CustomEvent("startHeroCurveAnimation"));
        });
      });
    };

    const onStartAnimComplete = () => {
      setTimeout(startHeroAnim, 100);
    };

    const onStartHeroCurve = () => {
      if (desktopCurveRef.current) {
        gsap.to(desktopCurveRef.current, {
          strokeDashoffset: 0,
          duration: 4.5,
          ease: "power2.out",
          delay: 0.3,
          onComplete: () => {
            window.dispatchEvent(new CustomEvent("heroCurveComplete"));
          },
        });
      }
      if (mobileCurveRef1.current) {
        gsap.to(mobileCurveRef1.current, {
          strokeDashoffset: 0,
          duration: 5,
          ease: "power2.out",
          delay: 0.5,
        });
      }
      if (mobileCurveRef2.current) {
        gsap.to(mobileCurveRef2.current, {
          strokeDashoffset: 0,
          duration: 5,
          ease: "power2.out",
          delay: 0.5,
        });
      }
    };

    window.addEventListener("startAnimationComplete", onStartAnimComplete, { once: true });
    window.addEventListener("startHeroCurveAnimation", onStartHeroCurve, { once: true });

    // Fallback in case preloader is skipped
    const fallbackTimer = setTimeout(() => {
      if (!hasRun) startHeroAnim();
    }, 4500);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener("startAnimationComplete", onStartAnimComplete);
      window.removeEventListener("startHeroCurveAnimation", onStartHeroCurve);
      ctx?.revert();
    };
  }, []);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[calc(100svh-68px)] md:min-h-screen bg-[#0357EE] pt-2 overflow-hidden">
      {/* Top Badge: Decade of Impact */}
      <div className="w-full 2xl:container mx-auto px-4 md:px-16">
        <div className="flex items-center justify-center text-white">
          <div className="z-20 pt-10 lg:pt-0 flex items-center gap-2">
            <div className="h-8 w-8 md:h-16 md:w-16 relative">
              <div className="w-full h-full object-contain absolute inset-0 z-10 animate-spin-slow">
                <canvas
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "url(/images/asset_14.png) center center / 100% 100% no-repeat content-box",
                  }}
                  width="88"
                  height="88"
                />
              </div>
              <div className="w-[90%] h-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                <img
                  alt="Shield"
                  width="64"
                  height="64"
                  className="w-full h-full object-contain"
                  src="/images/asset_15.svg"
                />
              </div>
            </div>
            <h1 className="uppercase text-[20px] lg:text-[40px] font-semibold font-sans">
              Decade <span className="font-normal"> of Impact</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Main Big Hero Numbers 2025 */}
      <div className="mt-10 md:-mt-20 flex flex-col items-center justify-center text-white">
        <div className="text-[160px] md:text-[280px] lg:text-[380px] font-semibold italic font-sans relative flex items-baseline">
          {/* "20" */}
          <div
            ref={number20Ref}
            className="items-baseline relative z-20 drop-shadow-[0_4px_20px_#00000040] will-change-transform opacity-0"
          >
            <span className="inline-block drop-shadow-[0_2px_10px_#00000040]">2</span>
            <span className="inline-block -ml-2 md:-ml-4 drop-shadow-[0_2px_10px_#00000040]">0</span>
            <p className="hidden md:block leading-none w-full max-w-[180px] md:max-w-[200px] lg:max-w-[360px] -mt-12 lg:-mt-18 not-italic absolute text-sm md:text-base lg:text-lg text-[16px] lg:text-[20px] font-normal text-white bottom-0 left-0">
              For <span className="font-semibold text-[#FEE17F]">10 years</span>, Moniepoint has powered Nigeria&apos;s financial ecosystem.
            </p>
          </div>

          {/* "25" and "In Review" */}
          <div className="flex items-baseline relative top-[50px] md:top-[100px] lg:top-[120px] -ml-[45px] md:-ml-[80px] z-10 drop-shadow-[0_4px_20px_#00000040]">
            <h1
              ref={inReviewRef}
              className="absolute font-medium text-[26px] md:text-[40px] lg:text-[70px] text-[#FEE17F] top-[40px] md:top-[70px] lg:top-[80px] right-0 not-italic will-change-transform opacity-0 whitespace-nowrap"
            >
              In Review
            </h1>
            <div ref={number25Ref} className="will-change-transform opacity-0">
              <span className="inline-block drop-shadow-[0_2px_10px_#00000040]">2</span>
              <span className="inline-block -ml-2 md:-ml-4 drop-shadow-[0_2px_10px_#00000040]">5</span>
            </div>
          </div>
        </div>

        {/* Mobile subtext */}
        <p
          style={{ textAlign: "center" }}
          className="z-20 mt-8 block md:hidden leading-none w-full max-w-[310px] not-italic text-sm md:text-base lg:text-lg text-[16px] lg:text-[20px] font-normal text-white px-4"
        >
          For <span className="font-semibold text-[#FEE17F]">10 years</span>, Moniepoint has powered Nigeria&apos;s financial ecosystem.
        </p>
      </div>

      {/* Hero Bottom Journey Action */}
      <div className="hero-footer absolute bottom-0 left-0 right-0 flex flex-col items-center gap-1 pb-8 z-30">
        <h2 className="text-white md:text-[20px] text-[16px] font-sans">OUR JOURNEY SO FAR</h2>
        <div
          ref={arrowRef}
          className="h-6 w-6 cursor-pointer will-change-transform"
          onClick={scrollToNext}
          role="button"
          tabIndex={0}
          aria-label="Scroll to our journey so far"
        >
          <img
            src="/images/asset_16.svg"
            alt="Our Journey So Far"
            width={24}
            height={24}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Floating Hero Coin Right */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          ref={rightCoinRef}
          className="w-[150px] z-20 md:w-[306px] h-[180px] md:h-[200px] absolute top-8 md:top-0 -right-8 md:-right-16 will-change-transform"
        >
          <img
            src="/images/asset_17.svg"
            alt="Hero Coin"
            width={306}
            height={200}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Floating Hero Coin Left */}
      <div
        ref={leftCoinRef}
        className="w-[150px] md:w-[380px] h-[180px] md:h-[325px] absolute -bottom-10 md:-bottom-25 -left-4 md:-left-20 will-change-transform pointer-events-none"
      >
        <img
          src="/images/asset_18.svg"
          alt="Hero Coin"
          width={314}
          height={295}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Desktop Animated Decorative Curve */}
      <div className="absolute bottom-0 left-0 w-full hidden md:block pointer-events-none">
        <svg
          width="1512"
          height="813"
          viewBox="0 0 1512 813"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          style={{ willChange: "auto" }}
        >
          <path
            ref={desktopCurveRef}
            d="M-20 55.2548C22.1566 5.59336 122.961 -50.8341 188.928 120.748C271.386 335.225 334.621 374.721 424.668 366.722C514.714 358.723 681.654 28.7575 567.831 34.2569C454.009 39.7564 229.398 594.198 496.502 589.199C763.606 584.199 898.676 -12.7381 1166.29 241.235C1208.78 275.398 1301.15 414.317 1330.7 696.687C1360.24 979.057 1589.88 971.325 1701 932.162"
            stroke="#12226B"
            strokeWidth="10"
            fill="none"
            style={{ willChange: "stroke-dashoffset" }}
          />
        </svg>
      </div>

      {/* Mobile Animated Decorative Curves */}
      <div className="absolute bottom-0 left-0 w-full block md:hidden pointer-events-none">
        <svg
          width="390"
          height="326"
          viewBox="0 0 390 326"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            ref={mobileCurveRef1}
            d="M907.539 72.2729C897.727 104.761 859.538 157.896 785.276 110.537C692.448 51.337 650.795 55.1687 606.661 85.9297C562.526 116.691 555.172 297.852 612.05 260.785C668.927 223.719 652.713 -63.5473 517.373 20.3217C382.032 104.191 454.054 380.741 257.259 362.755C227.467 362.328 147.426 335.931 65.6011 233.763C-16.224 131.596 -131.767 205.052 -179.311 254.552"
            stroke="#12226B"
            strokeWidth="4.59345"
            shapeRendering="geometricPrecision"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute bottom-50 left-0 w-full block md:hidden pointer-events-none">
        <svg
          width="390"
          height="449"
          viewBox="0 0 390 449"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            ref={mobileCurveRef2}
            d="M-140 28.137C-120.636 5.32529 -74.3314 -20.5944 -44.0299 58.221C-6.1531 156.74 22.8935 174.882 64.2559 171.208C105.618 167.534 182.301 15.9656 130.018 18.4918C77.7336 21.0179 -25.4401 275.698 97.2529 273.402C219.946 271.105 281.99 -3.09519 404.915 113.566C424.434 129.259 466.866 193.071 480.436 322.776C494.007 452.481 599.489 448.93 650.533 430.94"
            stroke="#12226B"
            strokeWidth="4.59345"
            shapeRendering="geometricPrecision"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
