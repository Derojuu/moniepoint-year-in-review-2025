"use client";

import React from "react";

export function SpendingHabitsSection() {
  return (
    <section className="relative w-full bg-[#061333] overflow-hidden py-16 md:py-28">
      {/* Background illustration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url(/images/asset_48.svg)",
            zIndex: 0,
          }}
        ></div>
        {/* Decorative Wave SVG */}
        <div className="w-full hidden md:block absolute bottom-0 left-0 z-10 pointer-events-none">
          <svg
            width="1512"
            height="757"
            viewBox="0 0 1512 757"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M-1135.32 96.7427C-854.796 459.199 474.327 358.36 -39.4974 90.5475C-681.778 -244.218 -61.8745 1138.28 383.743 643.083C829.361 147.887 1793.55 -141.46 2380.92 81.032"
              stroke="#47C8FF"
              strokeWidth="10"
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="w-full 2xl:container mx-auto px-4 md:px-16 relative z-10">
        <div className="space-y-4 md:space-y-6 w-full max-w-[820px] mb-12">
          <h2 className="text-[#FEE17F] leading-[0.8] text-[32px] md:text-[40px] lg:text-[64px] font-medium font-sans">
            Here&apos;s how Nigerians moved money this year
          </h2>
          <p className="leading-[1.2] w-full max-w-[82%] text-[16px] md:text-[20px] lg:text-[24px] font-normal text-[#FFFFFF] font-sans">
            The top 5 things Nigerians paid for in 2025 were Family Support, Business, Food, Salary / Wages and Utilities.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1: Church/Tithe */}
          <div
            className="rounded-[24px] p-6 relative overflow-hidden min-h-[353px] flex flex-col justify-between shadow-lg group hover:scale-[1.02] transition-transform cursor-pointer"
            style={{ backgroundColor: "#0357EE", color: "white" }}
          >
            <h3 className="text-xl md:text-2xl font-sans lg:max-w-[85%] relative z-10 font-normal leading-snug">
              Approximately <span className="font-semibold text-[#FEE17F]">3% of all transfers</span> made in 2025 were for Church/Tithe
            </h3>
            <div className="absolute bottom-0 right-0 pointer-events-none">
              <img
                alt="Church Tithe Icon"
                width="281"
                height="312"
                className="object-contain"
                src="/images/asset_49.svg"
              />
            </div>
          </div>

          {/* Card 2: Restaurants */}
          <div
            className="rounded-[24px] p-6 relative overflow-hidden min-h-[353px] flex flex-col justify-between shadow-lg group hover:scale-[1.02] transition-transform cursor-pointer"
            style={{ backgroundColor: "rgb(71,200,255)", color: "#061333" }}
          >
            <h3 className="text-xl md:text-2xl font-sans lg:max-w-[85%] relative z-10 font-normal leading-snug">
              Every day in 2025, Nigerians spent over <span className="font-semibold">8 billion naira</span> at Restaurants with Moniepoint. Item 7 &amp; Yakoyo were your favourite places to eat!
            </h3>
            <div className="absolute bottom-0 right-0 pointer-events-none">
              <img
                alt="Restaurants Icon"
                width="296"
                height="215"
                className="object-contain"
                src="/images/asset_50.svg"
              />
            </div>
          </div>

          {/* Card 3: Bakeries */}
          <div
            className="rounded-[24px] p-6 relative overflow-hidden min-h-[353px] flex flex-col justify-between shadow-lg group hover:scale-[1.02] transition-transform cursor-pointer"
            style={{ backgroundColor: "#04A650", color: "white" }}
          >
            <h3 className="text-xl md:text-2xl font-sans lg:max-w-[85%] relative z-10 font-normal leading-snug">
              You chased that bread, and we rate it! Nigerians spent <span className="font-semibold text-[#FEE17F]">₦1.7 trillion</span> at bakeries in 2025.
            </h3>
            <div className="absolute bottom-0 right-0 pointer-events-none">
              <img
                alt="Bakeries Icon"
                width="431"
                height="321"
                className="object-contain"
                src="/images/asset_51.svg"
              />
            </div>
          </div>

          {/* Card 4: Detty December */}
          <div
            className="rounded-[24px] p-6 relative overflow-hidden min-h-[353px] flex flex-col justify-between shadow-lg group hover:scale-[1.02] transition-transform cursor-pointer"
            style={{ backgroundColor: "#F5A022", color: "white" }}
          >
            <h3 className="text-xl md:text-2xl font-sans lg:max-w-[85%] relative z-10 font-normal leading-snug">
              Detty December? You kept the party going all year. We processed <span className="font-semibold text-[#061333]">3 transactions every second</span> at a bar, club or lounge in 2025.
            </h3>
            <div className="absolute bottom-0 right-0 pointer-events-none">
              <img
                alt="Detty December Icon"
                width="338"
                height="294"
                className="object-contain w-[70%]"
                src="/images/asset_53.svg"
              />
            </div>
          </div>

          {/* Card 5: Book Purchases */}
          <div
            className="rounded-[24px] p-6 relative overflow-hidden min-h-[353px] flex flex-col justify-between shadow-lg group hover:scale-[1.02] transition-transform cursor-pointer"
            style={{ backgroundColor: "rgb(251,225,76)", color: "rgb(7,15,32)" }}
          >
            <h3 className="text-xl md:text-2xl font-sans lg:max-w-[85%] relative z-10 font-normal leading-snug">
              Read much? The money we helped Nigerians process for book purchases was enough to buy <span className="font-semibold">over 31 million copies</span> of Chinua Achebe&apos;s Things Fall Apart.
            </h3>
            <div className="absolute bottom-0 right-0 pointer-events-none">
              <img
                alt="Books Icon"
                width="269"
                height="215"
                className="object-contain w-[70%]"
                src="/images/asset_54.svg"
              />
            </div>
          </div>

          {/* Card 6: Gyms */}
          <div
            className="rounded-[24px] p-6 relative overflow-hidden min-h-[353px] flex flex-col justify-between shadow-lg group hover:scale-[1.02] transition-transform cursor-pointer"
            style={{ backgroundColor: "#FDF2D7", color: "#070F20" }}
          >
            <h3 className="text-xl md:text-2xl font-sans lg:max-w-[85%] relative z-10 font-normal leading-snug">
              Is there something we should know? You spent over <span className="font-semibold text-[#0357EE]">₦90 million</span> at gyms every day in 2025!
            </h3>
            <div className="absolute bottom-0 right-0 pointer-events-none">
              <img
                alt="Gyms Icon"
                width="467"
                height="353"
                className="object-contain w-[70%]"
                src="/images/asset_55.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
