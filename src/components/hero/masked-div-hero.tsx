import React from "react";
import MaskedDiv from "../ui/masked-div";

function MaskedDivHero() {
  return (
    <div className="md:w-1/2">
      <MaskedDiv maskType="type-3">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="/images/code.mp4"
            // src="https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4"
            // src="https://videos.pexels.com/video-files/18069166/18069166-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
    </div>
  );
}

export default MaskedDivHero;
