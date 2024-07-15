import Link from "next/link";
import NavbarIcon from "./navbar-icon";
import Container from "./ui/container";
import { poppins } from "@/src/app/fonts";
import { Button } from "@components/components/ui/button";

const Navbar = () => {
  return (
    <>
      <div>
        <Container>
          <nav className="relative px-2 sm:px-2 md:px-4 flex justify-between h-20 items-center">
            <div className="flex flex-row justify-center items-center">
              <NavbarIcon />
              <Link
                href="/about"
                className={`mx-8 ${poppins.className} text-base uppercase text-slate-600 max-sm:mx-4`}
                passHref
              >
                About
              </Link>
            </div>
            <Button className="bg-[#D67FD3] hover:bg-[#d472d1] h-9 rounded-xl">
              Subscribe
            </Button>
          </nav>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
