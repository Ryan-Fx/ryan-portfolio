import React from "react";
import ScrollVelocity from "./ScrollVelocity/ScrollVelocity";

export default function SectionVelocity() {
  return (
    <div>
      <ScrollVelocity
        texts={["Ryan Fx ⭐", "Frontend Web Developer -"]}
        velocity={100}
        className="font-mono text-[60px] bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
      />
    </div>
  );
}
