"use client";

import Spline from "@splinetool/react-spline";
import React from "react";

export default function HeroSpline() {
  return (
    <div className="md:w-1/2 h-[50vh] md:h-[60vh] hidden md:flex">
      <Spline scene="https://prod.spline.design/i8eNphGELT2tDQVT/scene.splinecode" />
    </div>
  );
}
