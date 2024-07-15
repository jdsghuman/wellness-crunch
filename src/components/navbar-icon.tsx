import Link from "next/link";
import { poppins600 } from "@/src/app/fonts";

const NavbarIcon = () => {
  return (
    <Link
      href="/"
      aria-label="home"
      passHref
      className={`${poppins600.className} text-base uppercase`}
    >
      Wellness Crunch
    </Link>
  );
};

export default NavbarIcon;
