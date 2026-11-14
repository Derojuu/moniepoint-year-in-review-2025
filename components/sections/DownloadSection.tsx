"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function DownloadSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setIsSubmitted(true);
  };

  return (
    <div id="download-section" className="w-full relative bg-[#061333] pt-16 md:pt-28 pb-16 overflow-hidden">
      {/* Decorative Wave SVG */}
      <div className="w-full absolute bottom-0 left-0 z-0 pointer-events-none">
        <svg
          width="1356"
          height="786"
          viewBox="0 0 1356 786"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M1962.76 -162C2135.05 -2.61958 1473.38 425.196 1479.79 204.575C1487.79 -71.2015 1929.6 456.689 1332.71 517.061C735.816 577.432 80.083 848.863 4.76538 1086"
            stroke="#FEE17F"
            strokeWidth="10"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-20">
        <div className="w-full 2xl:container mx-auto px-4 md:px-16">
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-20 gap-10">
            {/* Form side */}
            <div className="space-y-6 md:space-y-10 lg:space-y-12 max-w-[650px]">
              <div className="space-y-4 md:space-y-6 w-[95%]">
                <h2 className="text-[#FEE17F] w-full max-w-[600px] leading-tight text-[32px] md:text-[40px] lg:text-[64px] font-medium font-sans">
                  A decade of impact, and it&apos;s just day one!
                </h2>
                <p className="leading-[1.2] w-full max-w-[90%] text-[16px] md:text-[20px] lg:text-[24px] font-normal text-[#FFFCF3] font-sans">
                  Want a version of this review you can keep with you?
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-[#18284D] border border-[#0357EE] p-6 rounded-2xl max-w-[500px]">
                  <h3 className="text-xl text-[#FEE17F] font-medium mb-2 font-sans">
                    Thank you, {fullName}!
                  </h3>
                  <p className="text-white/80 font-sans text-sm md:text-base leading-relaxed">
                    Your copy of the 2025 Year in Review has been sent to <strong>{email}</strong>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-xs text-[#47C8FF] underline hover:text-white"
                  >
                    Send another copy
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 lg:gap-5 w-full max-w-[500px]"
                >
                  <div className="flex flex-col gap-2">
                    <Input
                      type="text"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="mt-3 w-fit px-6 md:px-8 h-[48px] md:h-[58px] text-base md:text-xl rounded-[100px] bg-[#0357EE] text-white font-sans hover:bg-[#0441A3] transition-colors flex items-center justify-center min-w-[200px]"
                  >
                    Download the review
                  </Button>
                </form>
              )}
            </div>

            {/* Right illustration / canvas preview */}
            <div className="w-[95%] max-w-[550px] h-auto my-6 lg:my-0 ml-auto mr-0 flex items-center justify-center">
              <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center bg-gradient-to-br from-[#071330] to-[#0441A3]">
                <div className="text-center p-6 space-y-3">
                  <div className="w-16 h-16 mx-auto mb-2">
                    <img
                      alt="Moniepoint Logo"
                      className="w-full h-full object-contain"
                      src="/images/asset_11.svg"
                    />
                  </div>
                  <p className="text-2xl md:text-3xl font-medium text-[#FEE17F] font-sans">
                    2025 Year in Review
                  </p>
                  <p className="text-sm md:text-base text-white/80 font-sans">
                    Complete 48-page PDF Report
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-white/60 text-sm font-sans gap-4">
            <p>© 2025 Moniepoint Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="https://moniepoint.com/ng/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="https://moniepoint.com/ng/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Terms of Use
              </a>
              <Link href="/cart" className="text-[#FEE17F] hover:underline font-medium">
                Business Store / Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
