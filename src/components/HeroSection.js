import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center  pt-20 xl:pt-[108px] bg-xpose-darker text-xpose-text-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
      <div className="px-10 md:px-16 xl:px-24 z-10">
        <div className="max-w-[40%]">
          <h1 className="text-2xl md:text-[40px] font-bold mb-4 leading-10">
            T &#x2661; S <span className="text-xpose-green">Real or Fake?</span>
            Know in One Click.
          </h1>
          <p className="text-white text-sm lg:text-[20px] mb-8 leading-5 lg:leading-8">
            Xpose is an AI-powered deepfake detection tool that reveals image
            authenticity in just one click. Upload any photo—our advanced models
            analyze patterns, inconsistencies, and subtle manipulations to
            determine if it’s real or AI-generated. Fast, accurate, and built
            for everyone.
          </p>
          <a
            href="#upload"
            className="block w-fit cursor-pointer text-sm xl:text-[16px] bg-white text-black font-medium px-5 py-3 rounded-lg hover:bg-xpose-lightblue transition duration-300"
          >
            Try it Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
