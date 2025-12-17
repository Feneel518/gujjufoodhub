import { FC } from "react";

interface WhyGujjuProps {}

const WhyGujju: FC<WhyGujjuProps> = ({}) => {
  const whyGujjuFoodHub = [
    {
      title: "Authentic Heritage",
      description:
        "Time-honoured Gujarati recipes crafted with care and tradition.",
      icon: "Utensils",
      tag: "Tradition",
    },
    {
      title: "Warm Hospitality",
      description:
        "A refined yet welcoming dining experience for families and gatherings.",
      icon: "Users",
      tag: "Family",
    },
    {
      title: "Signature Catering",
      description:
        "Curated Gujarati menus for celebrations, events, and corporate dining.",
      icon: "ChefHat",
      tag: "Events",
    },
    {
      title: "Freshly Crafted",
      description:
        "Prepared daily using carefully selected, quality ingredients.",
      icon: "Leaf",
      tag: "Fresh",
    },
  ];
  return (
    <section
      className={`font-mono font-bold relative bg-rose-600 py-16 sm:py-20 text-white`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`font-modak text-8xl font-normal  uppercase leading-none  text-white sm:text-7xl lg:text-9xl md:mt-2 text-center`}>
          Our Values
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-8">
        {whyGujjuFoodHub.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl p-6   border-white  border-2 transition-all duration-300">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 inline-block mt-4 px-3 py-1 bg-yellow-200 text-rose-600  rounded-full text-xl font-bold -rotate-6">
              {item.tag}
            </span>
            <h3 className="text-xl font-bold mb-2 mt-16">{item.title}</h3>
            <p className="text-sm opacity-80">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyGujju;
