"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { poppins, poppins400, poppins600 } from "@/src/app/fonts";
import Container from "@/src/components/ui/container";
import { RiFacebookBoxFill, RiTwitterXFill } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@components/components/ui/button";

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  const getCopyrightYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <footer className={`mt-6 ${poppins.className}`}>
      <Container>
        <div className="flex flex-row justify-between items-center bg-[#F2F2F2]/60 w-full h-[200px] p-8 px-12 max-lg:px-6 max-md:px-4 max-md:flex-col max-md:items-center">
          <div className="flex flex-col justify-center items-center">
            <p className={`${poppins600.className} text-lg uppercase`}>
              The Wellness Crunch
            </p>
            <p className={`${poppins400.className} text-xs`}>
              &copy; {getCopyrightYear()}. All rights reserved.
            </p>
          </div>
          <div className="flex flex-row text-base max-sm:text-sm">
            <Link
              href="/"
              aria-label="home"
              passHref
              className={`${poppins400.className} uppercase mx-4`}
            >
              Home
            </Link>
            <Link
              href="/about"
              aria-label="about"
              passHref
              className={`${poppins400.className} uppercase mx-4`}
            >
              About Us
            </Link>
            <Link
              href="/faq"
              aria-label="faq"
              passHref
              className={`${poppins400.className} uppercase mx-4`}
            >
              FAQ
            </Link>
            <Link
              href="/privacy-policy"
              aria-label="Privacy"
              passHref
              className={`${poppins400.className} uppercase mx-4`}
            >
              Privacy
            </Link>
          </div>
          <div className="flex flex-row">
            <Button className="mx-2 w-8 h-8" size="icon" aria-label="Twitter">
              <Link href="https://x.com/wellnesscrunch" target="_blank">
                <RiTwitterXFill size={18} aria-label="Twitter" />
              </Link>
            </Button>
            <Button className="mx-2 w-8 h-8" size="icon" aria-label="Instagram">
              <Link
                href="https://www.instagram.com/the_wellness_crunch/"
                target="_blank"
                aria-label="Instagram"
              >
                <RxInstagramLogo size={18} />
              </Link>
            </Button>

            <Button className="mx-2 w-8 h-8" size="icon" aria-label="LinkedIn">
              <Link
                href="https://www.linkedin.com/company/the-wellness-crunch/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
