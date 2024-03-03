import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import Image from 'next/image';

export default async function Home() {
  return (
    <>
      <section className="h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="z-10 relative text-center">
          <h1 className="text-5xl md:text-9xl font-bold"
            style={{
              backgroundImage: 'linear-gradient(to right, #ff0066, #ff99cc, #ffffff)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
            >
              candybay
            </h1>
          </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t dark:from-background"></div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 md:mt-20">
        <h2 className="text-4xl text-center">Choose your plan !</h2>
        <p className="text-muted-foreground text-center">
          Our princing plans are tailored to meet your needs. <br />Get started for free and upgrade as you grow.
        </p>
        <div className="flex items-center gap-4 flex-wrap mt-6"></div>
      </section>
    </>
  );
}
