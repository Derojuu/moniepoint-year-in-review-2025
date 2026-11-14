"use client";

import React from "react";

const PAYMENT_METHODS = [
  {
    id: "cards",
    tag: "Cards",
    title: "16 million Nigerians made successful card payments on Moniepoint every day.",
    image: "/images/asset_65.webp",
    offset: false,
  },
  {
    id: "pos",
    tag: "POS",
    title: "When you didn’t want to use your card, you heard the ping of a successful transfer over 6,000 times a minute.",
    image: "/images/asset_66.webp",
    offset: true,
  },
  {
    id: "bill-payment",
    tag: "Bill payment",
    title: "Data running low? Nigerians renewed their data plans with Moniepoint over half a million times daily in 2025.",
    image: "/images/asset_67.webp",
    offset: false,
  },
];

export function PaymentEverydaySection() {
  return (
    <section className="w-full bg-[#061333] relative overflow-hidden py-16 md:py-28">
      {/* Background illustration */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center pointer-events-none opacity-30"
        style={{
          backgroundImage: "url(/images/asset_64.svg)",
          zIndex: 0,
        }}
      ></div>

      {/* Decorative Wave SVG */}
      <div className="hidden md:block w-full absolute top-0 left-0 z-10 pointer-events-none">
        <svg
          width="1512"
          height="726"
          viewBox="0 0 1512 726"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M1546.36 722C1718.65 556.932 1056.99 113.851 1063.39 342.344C1071.39 627.961 1924.83 154.767 1327.94 92.2417C731.049 29.7161 75.3176 -251.399 2.80038e-05 -497"
            stroke="#FEE17F"
            strokeWidth="10"
            fill="none"
          />
        </svg>
      </div>

      <div className="w-full 2xl:container mx-auto px-4 md:px-16 relative z-10">
        <div className="space-y-4 md:space-y-6 w-[95%] max-w-[820px] mb-12">
          <h2 className="text-[#FEE17F] leading-none text-[32px] md:text-[40px] lg:text-[64px] font-medium font-sans">
            Powering how Nigerians pay everyday
          </h2>
          <p className="leading-[1.2] w-full max-w-[82%] text-[16px] md:text-[20px] lg:text-[24px] font-normal text-[#FFFCF3] font-sans">
            From late‑night spends to everyday essentials, we kept your payments humming in the background so life never had to pause.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-start">
          {PAYMENT_METHODS.map((item) => (
            <div
              key={item.id}
              className={`bg-[#FFFFFF] pt-4 md:pt-6 pb-8 px-4 md:px-6 rounded-[20px] shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer ${
                item.offset ? "lg:mt-16" : ""
              }`}
            >
              <div className="rounded-[14px] overflow-hidden">
                <img
                  alt={item.tag}
                  className="w-full h-auto object-cover"
                  src={item.image}
                />
              </div>

              <div className="bg-[#0357EE] rounded-[40px] h-[26px] md:h-[32px] flex items-center justify-center px-4 w-fit mt-4">
                <span className="text-sm md:text-base text-white font-sans font-medium">
                  {item.tag}
                </span>
              </div>

              <p className="leading-[1.3] text-[#061333] text-[16px] md:text-[20px] font-sans mt-3 font-normal">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
