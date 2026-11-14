"use client";

import React, { useState } from "react";

const TEAM_PHOTOS = [
  { id: "tm-1", src: "/images/asset_70.webp", title: "DreamMaker" },
  { id: "tm-2", src: "/images/asset_71.webp", title: "DreamMaker" },
  { id: "tm-3", src: "/images/asset_72.webp", title: "DreamMaker" },
  { id: "tm-4", src: "/images/asset_73.webp", title: "DreamMaker" },
  { id: "tm-5", src: "/images/asset_74.webp", title: "DreamMaker" },
  { id: "tm-6", src: "/images/asset_75.webp", title: "DreamMaker" },
];

export function DreamTeamSection() {
  const [activeIndex, setActiveIndex] = useState(4);

  const prev = () => {
    setActiveIndex((curr) => (curr > 0 ? curr - 1 : TEAM_PHOTOS.length - 1));
  };

  const next = () => {
    setActiveIndex((curr) => (curr < TEAM_PHOTOS.length - 1 ? curr + 1 : 0));
  };

  return (
    <section className="w-full relative bg-[#061333] overflow-hidden py-16 md:py-28">
      {/* Background illustration */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center pointer-events-none opacity-30"
        style={{
          backgroundImage: "url(/images/asset_68.svg)",
          zIndex: 0,
        }}
      ></div>

      {/* Decorative Wave SVG */}
      <div className="w-full absolute bottom-0 left-0 z-10 pointer-events-none">
        <svg
          width="1512"
          height="490"
          viewBox="0 0 1512 490"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M1551.03 815.755C1682.73 617.346 933.077 344.8 991.094 562.799C1063.62 835.297 1794.01 183.352 1194.09 261.366C594.166 339.38 -112.992 221.039 -242.513 2.54935"
            stroke="#FEE17F"
            strokeWidth="10"
            fill="none"
            style={{ opacity: 0.3 }}
          />
        </svg>
      </div>

      <div className="w-full 2xl:container mx-auto px-4 md:px-16 relative z-10">
        <div className="space-y-4 md:space-y-6 w-full max-w-[820px] mb-10 md:mb-16">
          <h2 className="text-[#FEE17F] leading-none text-[32px] md:text-[40px] lg:text-[64px] font-medium font-sans">
            It&apos;s been 10 years of building the dream team
          </h2>
          <p className="leading-[1.4] w-full max-w-[90%] md:max-w-[82%] text-[16px] md:text-[20px] lg:text-[24px] font-normal text-[#FFFCF3] font-sans">
            We&apos;ve now crossed 3,300 DreamMakers across 19 countries. There&apos;s a DreamMaker on 5 of the 7 continents in the world!
          </p>
        </div>

        {/* Gallery Slider */}
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* Gallery Arrow callout */}
          <div className="absolute -top-10 md:top-0 right-[5%] md:right-[15%] w-[100px] md:w-[150px] z-40 pointer-events-none">
            <img
              alt="Gallery Arrow"
              width="150"
              height="150"
              className="w-full h-auto"
              src="/images/asset_69.svg"
            />
          </div>

          <div className="relative w-full h-[350px] md:h-[550px] flex items-center justify-center overflow-hidden">
            {TEAM_PHOTOS.map((photo, index) => {
              const diff = index - activeIndex;
              const isCenter = diff === 0;
              const isVisible = Math.abs(diff) <= 2;

              if (!isVisible) return null;

              const translateX = diff * 140;
              const rotate = diff * 4;
              const scale = isCenter ? 1.05 : 0.85;
              const zIndex = 30 - Math.abs(diff) * 10;
              const opacity = isCenter ? 1 : 0.6;

              return (
                <div
                  key={photo.id}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute w-[240px] md:w-[500px] h-[300px] md:h-[400px] rounded-[16px] overflow-hidden shadow-2xl transition-all duration-500 ease-out cursor-pointer ${
                    isCenter ? "bg-[#FF9500] p-1.5 md:p-2" : "bg-transparent"
                  }`}
                  style={{
                    transform: `translateX(${translateX}px) translateY(${Math.abs(diff) * 15}px) rotate(${rotate}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                  }}
                >
                  <div className="relative w-full h-full rounded-[12px] overflow-hidden">
                    <img
                      alt={photo.title}
                      className="object-cover w-full h-full"
                      src={photo.src}
                    />
                    {!isCenter && (
                      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
                    )}
                  </div>
                  {isCenter && (
                    <div className="w-full mt-2 ml-2">
                      <p className="text-white font-sans text-xs md:text-lg font-medium">
                        {photo.title}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Slider navigation buttons */}
          <div className="flex items-center gap-4 mt-8 z-30">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-lg"
              aria-label="Previous team slide"
            >
              <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-[#0357EE] hover:bg-[#0441A3] text-white flex items-center justify-center transition-colors shadow-lg"
              aria-label="Next team slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
