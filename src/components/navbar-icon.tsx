import Link from "next/link";
import { poppins600 } from "@/src/app/fonts";

const NavbarIcon = () => {
  return (
    <div className="flex flex-col mt-1">
      <Link
        href="/"
        aria-label="home"
        passHref
        className={`${poppins600.className} text-base uppercase`}
      >
        The Wellness Crunch
      </Link>
      <span className="block h-[2px] w-14 bg-[#EA7AF4] mx-auto rounded-lg"></span>
    </div>
  );
};

export default NavbarIcon;
