import React from "react";
interface AnimatedNavLayoutProps {
  children: React.ReactNode;
}
export default function AnimatedNavLayout({ children }: AnimatedNavLayoutProps) {
  return <div>{children}</div>;
}
