import React from "react";
import arrow from "../assets/arrow.png";

const FeaturesSection = () => {
  return (
    <section id="how-to" className="py-20">
      <div className="container mx-auto px-28 max-w-">
        <div className="text-center text-white mb-24">
          <h2 className="text-section-title xl:text-section-title-xl mb-3">
            How to <span className="text-xpose-green">detect</span> fake images?
          </h2>
          <p className="text-xpose-text-secondary text-base xl:text-[20px] leading-10">
            Simple steps to uncover image authenticity in seconds.
          </p>
        </div>
        <div className="flex items-end gap-8">
          <div className=" bg-gradient-to-br from-[#0B253D] to-[#070B0E] p-8 mb-3 rounded-3xl border-purple-500 text-white relative overflow-hidden max-w-[493px]">
            <h3
              className="text-lg font-medium xl:text-2xl text-xpose-text-primary
            border-l-2 border-[#FFD512] pl-4 mb-4
            "
            >
              Upload the image
            </h3>
            <p className="text-xpose-text-secondary text-base leading-8">
              Simply drag and drop or select any image you want to verify.
              Whether it's from social media, news, or a suspicious source — we
              support all common formats.
            </p>
          </div>
          <img
            src={arrow}
            alt="arrow"
            className="max-w-[354px] h-36 hidden xl:block"
          />
        </div>
        <div className="flex items-end justify-end my-14 gap-8">
          <div className=" bg-gradient-to-br from-[#0B253D] to-[#070B0E] p-8 rounded-3xl border-purple-500 text-white relative overflow-hidden max-w-[493px]">
            <h3
              className="text-lg font-medium xl:text-2xl text-xpose-text-primary
            border-l-2 border-[#1FCFF1] pl-4 mb-4
            "
            >
              Automatic Analysis
            </h3>
            <p className="text-xpose-text-secondary text-base leading-8">
              Our advanced AI instantly analyzes the image for signs of
              manipulation, deepfake content, AI generation, metadata
              inconsistencies, and more — all in the background, no waiting.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-8">
          <div className=" bg-gradient-to-br from-[#0B253D] to-[#070B0E] mt-3 p-8 rounded-3xl border-purple-500 text-white relative overflow-hidden max-w-[493px]">
            <h3
              className="text-lg font-medium xl:text-2xl text-xpose-text-primary
            border-l-2 border-[#9945FF] pl-4 mb-4
            "
            >
              Get Your Results
            </h3>
            <p className="text-xpose-text-secondary text-base leading-8">
              In just seconds, you'll get a detailed report showing whether the
              image is likely real, fake, or altered — complete with confidence
              scores and visual indicators.
            </p>
          </div>
          <img
            src={arrow}
            alt="arrow"
            className="max-w-[354px] h-36 hidden xl:block"
            style={{
              transform: "rotateZ(-45deg) rotateY(180deg) rotateX(180deg)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
