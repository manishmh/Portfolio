import { cn } from "@/lib/utils";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 -z-10">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="black"
        />
        <Spotlight className="top-28 left-10 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div>
        <div className="h-screen overflow-hidden w-full dark:bg-[#000319] dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          <div
            className={cn(
              "absolute inset-0 scale-200",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,#26262686_1px,transparent_1px),linear-gradient(to_bottom,#26262686_1px,transparent_1px)]"
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#000319]"></div>
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic Web Magic With Next.js
            </h2>
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Transforming Concepts into Seamless Experiences"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm lg:text-2xl ">
              Hi, I&apos;m Manish, a Next.js Developer based in India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <a href="https://drive.google.com/file/d/1MYZJf4EsapEGZyvG7Nr8raHmZITkGpkc/view?usp=sharing" target="_blank">
                <MagicButton
                  title="Resume"
                  icon={<FaLocationArrow />}
                  position="right"
                  otherClasses="bg-[#000319]"
                />
              </a>
              <a href="#projects">
                <MagicButton
                  title="Show my work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
