import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";
import { Modak, Titan_One } from "next/font/google";

interface SpecialsSectionProps {}

const modal = Modak({
  weight: ["400"],
  subsets: ["latin"],
});
const titan = Titan_One({
  weight: ["400"],
  subsets: ["latin"],
});

const SpecialsSection: FC<SpecialsSectionProps> = ({}) => {
  const specials = [
    {
      id: "jalebi",
      title: "Jalebi Thali",
      category: "Thali Special",
      price: "$24.99",
      image: "/specials/jalebi.png",
      featured: true,
    },
    {
      id: "undhiyu",
      title: "Undhiyu",
      category: "Seasonal",
      price: "$19.99",
      image: "/specials/undhiyu.jpg",
    },
    {
      id: "fafda",
      title: "Fafda & Jalebi",
      category: "Classic Combo",
      price: "$12.99",
      image: "/specials/fafda.jpg",
    },
    {
      id: "khaman",
      title: "Khaman Platter",
      category: "Snacks",
      price: "$10.99",
      image: "/specials/khaman.jpg",
    },
    {
      id: "dabeli",
      title: "Kutchi Dabeli",
      category: "Street Food",
      price: "$8.99",
      image: "/specials/dabeli.jpg",
    },
  ];

  const featured = specials.find((s) => s.featured);
  const rest = specials.filter((s) => !s.featured);
  return (
    <section
      className={`font-mono font-bold relative bg-yellow-200 py-16 sm:py-20 text-rose-600`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-6 ">
          <div
            className={`text-3xl font-bold text-white uppercase font-mono bg-rose-600 p-2 rounded-2xl text-center  ${titan.className}`}>
            <h3 className="tracking-widest">Weekly</h3>
            <h3>Specials</h3>
          </div>
          <div
            className={`${modal.className} text-9xl font-bold leading-0 mt-4 uppercase font-mono text-rose-600`}>
            UNLOCKED
          </div>
        </div>
        <div className="border-2 border-rose-600 border-dashed mb-6"></div>
        <div className="grid grid-cols-2 gap-4 px-10">
          {specials.map((special, index) => (
            <div
              className={`bg-rose-600 rounded-xl shadow-lg overflow-hidden relative w-full aspect-[1.4] ${
                index === 2 ? "col-span-2  aspect-[2.5]" : ""
              }`}>
              <div className="absolute bg-white shadow-xl z-10 right-0 px-8 py-1 rounded-bl-xl">
                {special.title} - {special.price}
              </div>
              <Image
                src={special.image}
                alt={special.title}
                fill
                className={`w-full  object-cover ${index === 2 ? "" : ""} `}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;
