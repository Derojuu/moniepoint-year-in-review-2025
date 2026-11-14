"use client";

import React from "react";

const SAVING_ITEMS = [
  { name: "Business", percent: "24%", width: "100%", bg: "rgb(122,93,0)", text: "text-white" },
  { name: "Rent", percent: "16.5%", width: "95%", bg: "rgb(173,132,1)", text: "text-white" },
  { name: "Detty December", percent: "11%", width: "90%", bg: "rgb(254,199,19)", text: "text-black" },
  { name: "School Fees", percent: "10%", width: "85%", bg: "rgb(254,215,91)", text: "text-black" },
  { name: "Emergencies", percent: "9%", width: "80%", bg: "rgb(254,225,127)", text: "text-black" },
];

export function SavingsSection() {
  return (
    <section className="overflow-hidden relative w-full bg-[#FFF4D1] py-16 md:py-28">
      {/* Decorative Wave SVG */}
      <div className="w-full hidden md:block absolute bottom-0 md:left-0 z-10 pointer-events-none">
        <svg
          width="1512"
          height="509"
          viewBox="0 0 1512 509"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M1545.62 1232.49C1722.39 1065.8 1043.5 618.352 1050.07 849.095C1058.28 1137.52 1933.94 659.672 1321.51 596.531C709.08 533.389 36.2782 249.507 -41 1.48823"
            stroke="#856600"
            strokeWidth="10"
            fill="none"
          />
        </svg>
      </div>

      <div className="w-full 2xl:container mx-auto px-4 md:px-16 relative z-10">
        <div className="space-y-4 md:space-y-6 w-[95%] max-w-[820px] mb-12">
          <h2 className="text-[#0357EE] leading-[0.8] text-[32px] md:text-[40px] lg:text-[64px] font-medium font-sans">
            What Nigerians are saving for
          </h2>
          <p className="leading-[1.2] w-full max-w-[82%] text-[16px] md:text-[20px] lg:text-[24px] font-normal text-[#461500] font-sans">
            We relaunched savings in October 2025. Here&apos;s how you&apos;re stacking up.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Stacked savings bars */}
          <div className="relative">
            <div className="hidden lg:block absolute top-0 -right-[40px] w-[140px] h-[140px] z-20 pointer-events-none">
              <img
                alt="Saving Arrow"
                width="140"
                height="140"
                className="w-full h-auto"
                src="/images/asset_56.webp"
              />
            </div>

            <div className="flex flex-col space-y-2">
              {SAVING_ITEMS.map((item) => (
                <div
                  key={item.name}
                  className="rounded-tr-[20px] rounded-br-[20px] p-4 h-[60px] lg:h-[100px] flex items-center justify-between overflow-hidden whitespace-nowrap shadow-md group hover:brightness-105 transition-all"
                  style={{
                    backgroundColor: item.bg,
                    width: item.width,
                  }}
                >
                  <span className={`font-sans font-medium text-lg lg:text-3xl pl-2 md:pl-8 ${item.text}`}>
                    {item.name}
                  </span>
                  <span className={`font-sans font-semibold text-xl lg:text-3xl ${item.text}`}>
                    {item.percent}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Orbiting Graphic */}
          <div className="relative w-full flex items-center justify-center overflow-visible py-8">
            <div className="relative w-full max-w-[320px] md:max-w-[440px] lg:max-w-[500px] aspect-square">
              {/* Outer Ring */}
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <img
                  alt="Ring"
                  width="528"
                  height="528"
                  className="w-[85%] h-[85%] object-contain"
                  src="/images/asset_57.svg"
                />
              </div>

              {/* Center Saving Icon */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <img
                  alt="Saving"
                  width="204"
                  height="270"
                  className="w-[45%] h-[45%] object-contain animate-bounce"
                  src="/images/asset_58.svg"
                />
              </div>

              {/* Orbiting Ring */}
              <div className="absolute inset-0 z-30 outer-ring-orbit">
                {/* Fact 1 */}
                <div
                  className="absolute z-30"
                  style={{ left: "75%", top: "85%", transform: "translate(-50%,-60%)" }}
                >
                  <div
                    className="bg-white rounded-lg flex items-center gap-2 py-2 px-3 shadow-lg min-w-[170px] max-w-[210px]"
                    style={{ animation: "counterRotateOuter 30s linear infinite" }}
                  >
                    <img
                      alt="Icon"
                      width="28"
                      height="28"
                      className="w-6 h-6 object-contain shrink-0"
                      src="/images/asset_59.svg"
                    />
                    <span className="text-[10px] text-[#4F1F0C] leading-tight font-sans">
                      The most common target amount is between{" "}
                      <span className="font-semibold text-[#0357EE]">200k and 500k</span>.
                    </span>
                  </div>
                </div>

                {/* Floating object 1 */}
                <div
                  className="absolute z-30"
                  style={{ left: "12%", top: "68%", transform: "translate(-50%,-50%)" }}
                >
                  <div
                    className="w-16 h-16 flex items-center justify-center"
                    style={{ animation: "counterRotateOuter 30s linear infinite" }}
                  >
                    <img
                      alt="Object 1"
                      className="w-full h-full object-contain"
                      src="/images/asset_60.webp"
                    />
                  </div>
                </div>

                {/* Fact 2 */}
                <div
                  className="absolute z-30"
                  style={{ left: "12%", top: "32%", transform: "translate(-50%,-60%)" }}
                >
                  <div
                    className="bg-white rounded-lg flex items-center gap-2 py-2 px-3 shadow-lg min-w-[170px] max-w-[210px]"
                    style={{ animation: "counterRotateOuter 30s linear infinite" }}
                  >
                    <img
                      alt="Icon"
                      width="28"
                      height="28"
                      className="w-6 h-6 object-contain shrink-0"
                      src="/images/asset_61.svg"
                    />
                    <span className="text-[10px] text-[#4F1F0C] leading-tight font-sans">
                      <span className="font-semibold text-[#0357EE]">60%</span> of people who save do so daily
                    </span>
                  </div>
                </div>

                {/* Floating object 2 */}
                <div
                  className="absolute z-30"
                  style={{ left: "90%", top: "40%", transform: "translate(-50%,-50%)" }}
                >
                  <div
                    className="w-16 h-16 flex items-center justify-center"
                    style={{ animation: "counterRotateOuter 30s linear infinite" }}
                  >
                    <img
                      alt="Object 2"
                      className="w-full h-full object-contain"
                      src="/images/asset_62.webp"
                    />
                  </div>
                </div>

                {/* Fact 3 */}
                <div
                  className="absolute z-30"
                  style={{ left: "57%", top: "9%", transform: "translate(-50%,-60%)" }}
                >
                  <div
                    className="bg-white rounded-lg flex items-center gap-2 py-2 px-3 shadow-lg min-w-[170px] max-w-[210px]"
                    style={{ animation: "counterRotateOuter 30s linear infinite" }}
                  >
                    <img
                      alt="Icon"
                      width="28"
                      height="28"
                      className="w-6 h-6 object-contain shrink-0"
                      src="/images/asset_63.svg"
                    />
                    <span className="text-[10px] text-[#4F1F0C] leading-tight font-sans">
                      The most common reason why people break savings is an emergency
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
