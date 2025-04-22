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
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 }, // Starting state
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Start animation when the section is 80% visible
            end: "top 30%", // End animation when the section reaches 30% of the viewport
            toggleActions: "play none none reverse", // Play animation on scroll down, reverse on scroll up
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
      <div>Section 1</div>
      <div>Section 2</div>
      <div>Section 3</div>
    </div>
  );
};

export default ExampleLandingPage;
