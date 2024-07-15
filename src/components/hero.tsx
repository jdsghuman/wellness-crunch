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
    <div className="relative w-full h-[500px] max-sm:h-[400px] flex justify-center items-center">
      {isLoading && <Skeleton className="inset-0 w-full h-full" />}
      <Image
        src="https://images.unsplash.com/photo-1454944338482-a69bb95894af?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero image"
        className="object-cover w-full h-full"
        onLoad={handleImageLoad}
        fill
      />
      <div className="absolute max-w-[575px] bg-white bg-opacity-90 py-7 px-6">
        <h1 className={`mt-1 ${poppins600.className} text-2xl text-slate-600`}>
          No time to keep up with the{" "}
          <span className="text-[#02ABD1]">latest</span> in{" "}
          <span className="text-[#02ABD1]">wellness news</span>?
        </h1>
        <p
          className={`mb-1 ${poppins400.className} text-slate-600 text-base mt-6 leading-4`}
        >
          <Button
            className={`p-0 hover:bg-slate-50 hover:bg-opacity-0 underline ${poppins600.className} text-lg focus:outline-none border-none`}
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
  );
};

export default Hero;
