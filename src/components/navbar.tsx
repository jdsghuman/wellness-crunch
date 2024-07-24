"use client";

import { useState } from "react";
import Link from "next/link";
import NavbarIcon from "./navbar-icon";
import Container from "./ui/container";
import { poppins } from "@/src/app/fonts";
import { Button } from "@components/components/ui/button";
import { SubscribeModal } from "@components/components/modals/subscribe-modal";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SubscribeModal
        onConfirm={() => setOpen(false)}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
      <div>
        <Container>
          <nav className="relative px-2 sm:px-2 md:px-4 flex justify-between h-20 items-center">
            <div className="flex flex-row justify-center items-center">
              <NavbarIcon />
              <Link
                href="/about"
                className={`mx-8 ${poppins.className} text-base uppercase text-slate-600 max-sm:mx-4 max-md:hidden`}
                passHref
              >
                About
              </Link>
            </div>
            <Button
              className="bg-[#386FA4] hover:bg-[#133C55] h-9 rounded-lg text-base"
              onClick={() => setOpen(true)}
            >
              Subscribe
            </Button>
          </nav>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
