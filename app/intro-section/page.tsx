"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const IntroSection = () => {
  const fadeFromLeft = useRef<HTMLDivElement>(null);
  const fadeFromBottom = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from(fadeFromLeft.current, { x: -100, opacity: 0, duration: 1.5, ease: "power2.out" });
    },
    {
      scope: fadeFromLeft,
    }
  );
  return (
    <div className="min-h-screen w-full">
      <div ref={fadeFromLeft} className="text-4xl">
        Hello world
      </div>
    </div>
  );
};

export default IntroSection;
