import { Input } from "@components/components/ui/input";
import { Label } from "@components/components/ui/label";

import { poppins300, poppins600, lato400 } from "@/src/app/fonts";
import { Button } from "./ui/button";

const JoinUsSection = () => {
  return (
    <>
      <section className="flex flex-col, my-10 max-sm:my-8 justify-center items-center">
        <div className="flex flex-row my-4">
          <Label className="sr-only" htmlFor="subscribe">
            Subscribe
          </Label>
          <Input
            placeholder="enter email"
            id="subscribe"
            className="rounded-l-lg rounded-r-none w-[275px] max-sm:w-[225px] text-base"
          />
          <Button className="bg-[#8252ad] hover:bg-[#683396] h-9 h-10 rounded-r-lg rounded-l-none ml-1">
            Subscribe
          </Button>
        </div>
      </section>
      <section className="flex flex-col, my-10 max-sm:my-8 mt-0 max-sm:mt-0 justify-center items-center">
        <div className="bg-gradient-to-r from-sky-50 to-sky-50 w-full text-center py-12 flex flex-col">
          <h2
            className={`${poppins600.className} text-3xl max-xs:text-xl text-center`}
          >
            Why Wellness Crunch?
          </h2>
          <p
            className={`my-4 mt-0 p-2 px-3 max-w-[650px] text-xl max-xs:text-lg ${lato400.className} text-center mx-auto`}
          >
            We know you are busy, we make it easier for you to stay on top of
            the latest{" "}
            <span className={`text-[#02ABD1]`}>health and wellness news</span>.
          </p>
        </div>
      </section>
      <section className="flex flex-col my-10 justify-center items-center">
        <h3
          className={`${poppins600.className} text-3xl max-xs:text-xl text-center relative px-2`}
        >
          What’s Inside THE WELLNESS CRUNCH Newsletter
          <span className="block h-[3px] w-20 bg-[#D67FD3] mx-auto mt-4 rounded-lg"></span>
        </h3>
      </section>
      <section className="flex flex-col my-10 mt-4 justify-center items-center">
        <div className="grid grid-cols-1 max-md:gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center px-12 py-8 max-sm:py-6 flex flex-col justify-center items-center">
            <p className={`${poppins600.className} mb-1`}>Stay Informed</p>
            <p className={`${poppins300.className}`}>
              Get the latest updates on health and wellness news that matter to
              you.
            </p>
          </div>
          <div className="text-center px-12 py-8 max-sm:py-6 flex flex-col justify-center items-center">
            <p className={`${poppins600.className} mb-1`}>Expert Insights</p>
            <p className={`${poppins300.className}`}>
              Receive practical tips and advice from industry-leading wellness
              experts.
            </p>
          </div>
          <div className="text-center px-12 py-8 max-sm:py-6 flex flex-col justify-center items-center">
            <p className={`${poppins600.className} mb-1`}>Top Picks</p>
            <p className={`${poppins300.className}`}>
              Discover the best health and wellness products, handpicked and
              reviewed by our team.
            </p>
          </div>
          <div className="text-center px-12 py-8 max-sm:py-6 flex flex-col justify-center items-center">
            <p className={`${poppins600.className} mb-1`}>Nourishing Recipes</p>
            <p className={`${poppins300.className}`}>
              Enjoy delicious and nutritious recipes to support your wellness
              journey.
            </p>
          </div>
          <div className="text-center px-12 py-8 max-sm:py-6 flex flex-col justify-center items-center">
            <p className={`${poppins600.className} mb-1`}>Fitness Buzz</p>
            <p className={`${poppins300.className}`}>
              Stay on top of the latest fitness trends and workouts.
            </p>
          </div>
          <div className="text-center px-12 py-8 max-sm:py-6 flex flex-col justify-center items-center">
            <p className={`${poppins600.className} mb-1`}>Exclusive Offers</p>
            <p className={`${poppins300.className}`}>
              Access special deals and discounts on wellness products and
              services.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col my-10 mb-20 justify-center items-center">
        <div className="bg-gradient-to-r from-sky-50 to-sky-50 w-full text-center py-12 flex flex-col">
          <h3
            className={`${poppins600.className} text-3xl max-xs:text-xl text-center uppercase`}
          >
            The Wellness Crunch
          </h3>
          <div className="mt-6">
            <Button className="bg-[#8252ad] hover:bg-[#683396] h-9 rounded-xl">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinUsSection;
