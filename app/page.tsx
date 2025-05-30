"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(SplitText);
export default function Home() {
  const boxRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        boxRef.current,
        { x: -200, opacity: 0, scale: 0.5 }, // Starting state
        { x: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" } // Ending state
      )
      .to(boxRef.current, {
        rotate: 360,
        duration: 1,
        ease: "power2.inOut",
      });
    gsap.to(pulseRef.current, {
      scale: 1.2,
      duration: 0.8,
      repeat: -1, // Infinite repeat
      yoyo: true, // Reverse the animation
      ease: "power1.inOut",
    });
    gsap.from(fromRef.current, { x: -100, opacity: 0, duration: 1.5 });
    gsap.from(".rotateAndMove", {
      duration: 2,
      x: -400,
      rotation: 360,
    });
    gsap.from(".staggersBox", {
      duration: 1,
      rotation: 360,
      opacity: 0,
      stagger: 0.2,
      ease: "sine.out",
    });
  });
  const handleStaggerBoxClick = (e: React.MouseEvent) => {
    gsap.to(".staggersBox", {
      duration: 1,
      rotation: 360,
      scale: 1.5,
      opacity: 0,
      y: -100,
      ease: "back.in",
      stagger: 0.1,
      onComplete: () => {
        gsap.set(".staggersBox", {
          display: "none",
        });
      },
    });
  };

  return (
    <div className="flex items-center flex-col justify-center min-h-screen w-full gap-10 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-row gap-10">
        <div ref={boxRef} className="w-40 h-40 bg-red-800 rounded-md" />
        <div ref={pulseRef} className="w-40 h-40 bg-amber-500 rounded-md" />
        <div ref={fromRef} className="w-40 h-40 bg-blue-950 rounded-md" />
      </div>
      <div className="flex flex-row gap-10">
        <div className="w-40 h-40 bg-red-800 rounded-md rotateAndMove" />
      </div>
      <div className="flex flex-col gap-10 justify-center items-center ">
        <h1 className="text-2xl ">Staggers</h1>
        <div className="flex flex-row gap-10">
          <div onClick={handleStaggerBoxClick} className="w-40 h-40 bg-red-800 rounded-md cursor-pointer   staggersBox" />
          <div onClick={handleStaggerBoxClick} className="w-40 h-40 bg-amber-500 rounded-md cursor-pointer  staggersBox" />
          <div onClick={handleStaggerBoxClick} className="w-40 h-40 bg-blue-950 rounded-md cursor-pointer  staggersBox" />
          <div onClick={handleStaggerBoxClick} className="w-40 h-40 bg-green-500 rounded-md cursor-pointer  staggersBox" />
        </div>
        <h1 className="text-2xl stagger-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam, voluptatibus.
        </h1>
      </div>
    </div>
  );
}
