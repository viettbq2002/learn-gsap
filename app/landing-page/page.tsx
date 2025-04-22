"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ExampleLandingPage = () => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  useGSAP(() => {
    sectionRefs.current.forEach((section, index) => {
      const leftBox = section.querySelector(".box-left");
      const rightBox = section.querySelector(".box-right");
      gsap.fromTo(
        leftBox,
        { x: -200, opacity: 0 }, // Starting state
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Start animation when the section is 80% visible
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        rightBox,
        { x: 200, opacity: 0 }, // Starting state
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Start animation when the section is 80% visible
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  });
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center bg-blue-500 text-white text-4xl font-bold">Welcome to My Landing Page</div>

      {/* Scrollable Sections */}
      <div
        ref={(el) => {
          if (el) sectionRefs.current.push(el);
        }}
        className="h-screen flex items-center justify-center bg-gray-100"
      >
        <div className="flex justify-between w-3/4">
          <div className="box-left w-40 h-40 bg-red-500 rounded-md"></div>
          <div className="box-right w-40 h-40 bg-green-500 rounded-md"></div>
        </div>
      </div>
      <div
        ref={(el) => {
          if (el) sectionRefs.current.push(el);
        }}
        className="h-screen flex items-center justify-center bg-gray-200"
      >
        <div className="flex justify-between w-3/4">
          <div className="box-left w-40 h-40 bg-yellow-500 rounded-md"></div>
          <div className="box-right w-40 h-40 bg-blue-500 rounded-md"></div>
        </div>
      </div>
      <div
        ref={(el) => {
          if (el) sectionRefs.current.push(el);
        }}
        className="h-screen flex items-center justify-center bg-gray-300"
      >
        <div className="flex justify-between w-3/4">
          <div className="box-left w-40 h-40 bg-purple-500 rounded-md"></div>
          <div className="box-right w-40 h-40 bg-orange-500 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ExampleLandingPage;
