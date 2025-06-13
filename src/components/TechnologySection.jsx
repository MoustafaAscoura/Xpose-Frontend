import React from "react";

const sections = [
  {
    title: "Curating a Diverse Dataset",
    description:
      "We gathered a wide range of real and synthetic images to train and test our models, ensuring accuracy across different faces, lighting, and image styles.",
    icon: require("../assets/ml-icon-1.png"),
  },
  {
    title: "Training Robust AI Models",
    description:
      "Using our curated datasets, we trained advanced machine learning models capable of identifying the subtle signs of deepfakes with high precision.",
    icon: require("../assets/ml-icon-2.png"),
  },
  {
    title: "Deploying an Accessible API",
    description:
      "We developed a powerful backend system that exposes our detection models through simple, scalable APIs for seamless integration.",
    icon: require("../assets/ml-icon-1.png"),
  },
  {
    title: "Designing a User-Friendly Platform",
    description:
      "To make deepfake detection accessible to everyone, we built an intuitive web interface that allows users to upload images and view detection results and statistics easily.",
    icon: require("../assets/ml-icon-2.png"),
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-8 md:py-20">
      <div className="container px-10 md:px-16 xl:px-24 mx-auto">
        <div className="text-center text-white">
          <h2 className="text-section-title xl:text-section-title-xl mb-3">
            How we made <span className="text-xpose-green">Xpose</span>{" "}
            Detection tool?
          </h2>
          <p className="text-xpose-text-secondary text-base xl:text-[20px] leading-6 md:leading-10">
            Xpose blends intelligent algorithms, broad data understanding, and
            seamless connectivity to reveal digital authenticity with ease.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-4 mt-6 md:mt-14">
          {sections.map((item, index) => (
            <div key={index} className="flex items-center gap-4 rounded-lg">
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 md:w-24 h-auto"
              />
              <div>
                <h3 className="text-white text-base md:text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-xpose-text-secondary text-xs md:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
