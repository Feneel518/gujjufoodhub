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
      <div className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
        <div className="h-screen w-screen overflow-hidden absolute inset-0 ">
          <Image
            src="/gujjufoodhub.png"
            alt="Gujju Food Hub"
            fill
            className="object-cover"
            draggable={false}
          />
          <div className="absolute bottom-0 w-screen h-16 bg-linear-0 from-yellow-200 to-transparent"></div>
        </div>
        <div className="z-50 md:px-24 md:py-16 p-8 py-24 shadow-2xl bg-yellow-300/30 backdrop-blur-xs rounded-2xl flex flex-col items-center justify-center space-y-4">
          <h1 className="md:text-8xl text-5xl font-sans text-black font-bold">
            Gujju Food Hub
          </h1>
          <p className="md:text-2xl font-mono">
            "A Taste of Gujarat, Far from Home"
          </p>

          <Button
            size={"lg"}
            className="h-12 bg-yellow-400 text-black hover:bg-yellow-500 cursor-pointer mt-8">
            Get Starterd <ArrowDown></ArrowDown>
          </Button>
        </div>
      </div>
      <div className="h-screen w-screen bg-yellow-200">Hello</div>
    </div>
  );
}
