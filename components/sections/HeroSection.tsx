import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = ({}) => {
  const phoneNumber = process.env.PHONENUMBER ?? 9099064666;
  return (
    <div className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
      <div className="h-screen w-screen overflow-hidden absolute inset-0 ">
        <Image
          src="/gujjufoodhub.png"
          alt="Gujju Food Hub"
          fill
          className="object-cover"
          draggable={false}
          priority
        />
        <div className="absolute bottom-0 w-screen h-16 bg-linear-0 from-yellow-200 to-transparent"></div>
      </div>
      <div className="h-screen w-screen overflow-hidden absolute inset-0 z-100 pointer-events-none hidden ">
        <Image
          src="/gujjufoodhubupper.png"
          alt="Gujju Food Hub"
          fill
          className="object-cover"
          draggable={false}
          priority
        />
        <div className="absolute bottom-0 w-screen h-16 bg-linear-0 from-yellow-200 to-transparent"></div>
      </div>
      <div className="relative z-50 mx-auto w-full max-w-3xl rounded-3xl bg-yellow-400/70 p-5 shadow-2xl backdrop-blur-md sm:p-8 lg:p-10">
        <div className="space-y-5">
          <div className="space-y-3">
            <p className="inline-flex w-fit items-center rounded-full bg-black/10 px-3 py-1 text-xs font-semibold tracking-wide text-black sm:text-sm">
              Authentic Gujarati Cuisine • Australia
            </p>

            <h1 className="text-balance text-4xl font-extrabold font-sans leading-[1.05] tracking-tight text-black sm:text-6xl lg:text-7xl">
              Gujju Food Hub
            </h1>

            <p className="text-pretty text-base font-medium leading-relaxed font-mono text-black/90 sm:text-lg lg:text-xl">
              <span className="font-semibold">
                Authentic Gujarati flavours, served with heart.
              </span>{" "}
              From comforting home-style thalis to festive street favourites, we
              bring the true taste of Gujarat to Australia — fresh, full of
              warmth, and made to be shared.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button className="h-12 w-full rounded-xl bg-[#2d2a67] text-white hover:bg-[#2d2a67]/95 sm:w-auto sm:px-6">
              Reserve a Table
            </Button>

            <Button
              variant="outline"
              className="h-12 w-full rounded-xl border-black/20 bg-white/40 text-black hover:bg-white/60 sm:w-auto sm:px-6">
              View Menu
            </Button>

            <a
              href={`https://wa.me/${phoneNumber}?text=Hi%20Gujju%20Food%20Hub!%20I%20want%20to%20book%20a%20table.`}
              target="_blank"
              className="text-center text-sm font-semibold text-black/80 underline underline-offset-4 hover:text-black sm:ml-2 sm:text-left"
              rel="noreferrer">
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
