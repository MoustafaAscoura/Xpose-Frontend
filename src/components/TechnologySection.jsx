import React from "react";

const sections = [
  {
    title: "Machine Learning",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly.",
    icon: require("../assets/ml-icon-1.png"),
  },
  {
    title: "Machine Learning",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly.",
    icon: require("../assets/ml-icon-1.png"),
  },
  {
    title: "Machine Learning",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly.",
    icon: require("../assets/ml-icon-1.png"),
  },
  {
    title: "Machine Learning",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly.",
    icon: require("../assets/ml-icon-1.png"),
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-20">
      <div className="container px-10 md:px-16 xl:px-24 mx-auto">
        <div className="text-center text-white">
          <h2 className="text-section-title xl:text-section-title-xl mb-3">
            How we made <span className="text-xpose-green">Xpose</span>{" "}
            Detection tool?
          </h2>
          <p className="text-xpose-text-secondary text-base xl:text-[20px] leading-10">
            Xpose blends intelligent algorithms, broad data understanding, and
            seamless connectivity to reveal digital authenticity with ease.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-10 gap-x-4 mt-14">
          {sections.map((item, index) => (
            <div key={index} className="flex items-center gap-4 rounded-lg">
              <img src={item.icon} alt={item.title} className="w-24 h-full" />
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-xpose-text-secondary">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
