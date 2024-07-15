import { Input } from "@components/components/ui/input";
import { poppins300, poppins600 } from "@/src/app/fonts";
import { Button } from "./ui/button";

const JoinUsSection = () => {
  return (
    <section className="flex flex-col my-12 justify-center items-center">
      <h3 className={`${poppins600.className} text-3xl max-xs:text-2xl`}>
        Why Wellness Crunch?
      </h3>
      <p
        className={`my-3 p-2 ${poppins600.className} text-xl text-slate-600 text-center`}
      >
        We make it a little easier to live a{" "}
        <span className="uppercase text-[#02ABD1]">healthier</span> life!{" "}
      </p>
      <p className={`my-4 p-2 max-w-[650px] text-base ${poppins300.className}`}>
        <span className={`${poppins600.className}`}>Sign up</span> here to
        receive our weekly wellness newsletter. Receive wellness tips and
        advice, latest wellness news, challenges, product recommendations, and
        more — delivered directly to your inbox.
      </p>
      <div className="flex flex-row my-4">
        <Input
          placeholder="enter email"
          className="rounded-none w-[275px] max-sm:w-[225px] text-base"
        />
        <Button className="bg-[#D67FD3] hover:bg-[#d472d1] h-9 h-10 rounded-none">
          Subscribe
        </Button>
      </div>
    </section>
  );
};

export default JoinUsSection;
