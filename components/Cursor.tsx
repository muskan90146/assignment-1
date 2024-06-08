'use client'

import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  const moveCursor = (e: MouseEvent) => {
    gsap.to(cursorRef.current, {
      duration: 0.2,
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    gsap.set(cursorRef, { xPercent: 100, yPercent: 100 });

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", moveCursor);
      }
    };
  }, []);

  return <div ref={cursorRef} className="cursor max-lg:hidden"></div>;
};

export default Cursor;
