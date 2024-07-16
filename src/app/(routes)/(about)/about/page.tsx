import { Metadata } from "next";
import Container from "@/src/components/ui/container";
import { poppins300, poppins600 } from "@/src/app/fonts";

export const metadata: Metadata = {
  title: "Wellness Crunch | About",
  description: "Learn more about Wellness Crunch and our mission.",
};

const About = () => {
  return (
    <Container>
      <div className={`flex flex-row justify-center max-md:flex-col`}>
        <div className="flex-grow bg-[#D67FD3] md:max-w-[250px] max-md:w-full max-md:h-[120px] flex items-center justify-center text-white">
          <span className="uppercase transform -rotate-90 max-md:-rotate-0 whitespace-nowrap text-6xl max-md:text-3xl py-80">
            <h3>About us</h3>
          </span>{" "}
        </div>
        <div className="w-full max-w-[900px] px-12 max-sm:px-4 py-8">
          <h1 className={`${poppins600.className} text-3xl`}>
            Welcome to <span className="uppercase">Wellness Crunch!</span>
          </h1>
          <p className={`my-4 mt-12 ${poppins300.className} text-base`}>
            At Wellness Crunch, we are dedicated to bringing you the most
            relevant health and wellness news, trends, and product
            recommendations in quick, 5-minute weekly updates. We understand
            your busy lifestyle, and our mission is to simplify healthy living,
            one email at a time.
          </p>
          <p className={`my-4 ${poppins300.className} text-base`}>
            Our team diligently sifts through data, recent research, and the
            latest trends to present you with concise, digestible information.
            In a world where social media can be overwhelming and trends can
            often be more fad than fact, we&apos;re here to help you navigate
            through the noise and make informed decisions for a healthier life.
            Join us in our quest to distinguish fact from fiction and empower
            yourself to live stronger and longer!
          </p>
        </div>
        <div className="flex-grow bg-[#D67FD3] max-w-[140px]"></div>
      </div>
    </Container>
  );
};

export default About;
