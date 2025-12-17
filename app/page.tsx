import HeroSection from "@/components/sections/HeroSection";
import SpecialsSection from "@/components/sections/SpecialsSection";
import { Button } from "@/components/ui/button";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  ArrowDown,
  ArrowDown01,
  ArrowDownNarrowWide,
  HomeIcon,
  MessageCircle,
  User,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Menu",
      link: "/menu",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Specials",
      link: "/specials",
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "About",
      link: "/about",
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className=" min-h-screen ">
      <FloatingNav navItems={navItems} />
      <HeroSection></HeroSection>
      <SpecialsSection></SpecialsSection>
    </div>
  );
}
