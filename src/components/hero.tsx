"use client";

import { useState } from "react";
import { Button } from "@components/components/ui/button";
import Image from "next/image";
import { poppins400, poppins600 } from "@/src/app/fonts";
import { Skeleton } from "@components/components/ui/skeleton";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-[500px] max-sm:h-[450px] bg-gradient-to-r from-gray-100 to-gray-100">
      {isLoading && <Skeleton className="absolute inset-0 w-full h-full" />}
      <Image
        src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero image"
        className="object-cover w-full h-full"
        onLoad={handleImageLoad}
        fill
        quality={100}
        priority
      />
      <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-end p-6 max-md:p-0 lg:p-12 max-sm:mt-[-20px]">
        <div className="max-w-[500px] py-4 backdrop-blur-lg custom-backdrop-blur">
          <h1
            className={`mt-1 px-6 ${poppins600.className} text-2xl max-md:text-xl`}
          >
            <span className="text-[#02ABD1] uppercase">Wellness Crunch</span> -
            A weekly wellness newsletter delivered to your inbox
          </h1>
          <p
            className={`mb-1 ${poppins400.className} mt-6 px-6 leading-6 text-base`}
          >
            <Button
              className={`p-0 hover:bg-slate-50 hover:bg-opacity-0 underline underline-offset-2 ${poppins600.className} text-base focus:outline-none border-none h-[20px]`}
              variant="ghost"
            >
              {" "}
              Subscribe now
            </Button>
            &nbsp; to our weekly email updates and get the{" "}
            <span className={`${poppins600.className}`}>
              freshest wellness news
            </span>
            &nbsp; and trends delivered straight to your inbox!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
