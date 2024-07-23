"use client";

import { useState } from "react";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Input } from "@components/components/ui/input";
import { Label } from "@components/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@components/components/ui/form";

import { poppins300, poppins600, lato400 } from "@/src/app/fonts";
import { Button } from "./ui/button";
import confetti from "canvas-confetti";

const formSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
});

const JoinUsSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const email = values.email;
    try {
      const res = await axios.post("/api/subscribe", { email });
      if (res.status === 201) {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-[#133C55]">
                    🎉 Successfully Subscribed!
                  </p>
                  <p className="mt-1 text-sm text-gray-900">
                    Thanks for joining us. Exciting updates are on the way to
                    your inbox soon!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#133C55] hover:text-[#133C55] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        ));
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        form.resetField("email");
      }
    } catch (e: any) {
      console.log("error", e);
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4 bg-red-300">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  🚫 Subscription Failed
                </p>
                <p className="mt-1 text-sm text-black">
                  Couldn&apos;t subscribe you right now. Please try again later.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200 bg-red-300">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
    }
  };

  return (
    <>
      <section className="flex flex-col, my-10 max-sm:my-8 justify-center items-center">
        <div className="flex flex-row my-4">
          <Form {...form}>
            <form
              className="flex flex-row"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        id="subscribe"
                        className="rounded-l-lg rounded-r-none w-[275px] max-sm:w-[200px] text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="bg-[#386FA4] hover:bg-[#133C55] h-9 h-10 rounded-r-lg rounded-l-none ml-1 text-base"
                type="submit"
              >
                Subscribe
              </Button>
            </form>
          </Form>
        </div>
      </section>
      <section className="flex flex-col, my-10 max-sm:my-8 mt-0 max-sm:mt-0 justify-center items-center">
        <div className="bg-gradient-to-r from-sky-50 to-sky-50 w-full text-center py-12 flex flex-col">
          <h2
            className={`${poppins600.className} text-3xl max-xs:text-xl text-center`}
          >
            Why <span className="uppercase">The Wellness Crunch</span>?
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
          <span className="block h-[3px] w-20 bg-[#EA7AF4] mx-auto mt-4 rounded-lg"></span>
        </h3>
      </section>
      <section className="flex flex-col my-10 mt-4 justify-center items-center">
        <div className="grid grid-cols-1 max-md:gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center px-12 py-8 max-sm:py-6 flex flex-col justify-center items-center">
            <p className={`${poppins600.className} mb-1`}>Stay Informed</p>
            <p className={`${poppins300.className}`}>
              Highlights from the latest updates on health and wellness news
              that matter to you.
            </p>
          </div>
          <div className="text-center px-12 py-8 max-sm:py-6 flex flex-col justify-center items-center">
            <p className={`${poppins600.className} mb-1`}>Health Tips</p>
            <p className={`${poppins300.className}`}>
              Receive practical tips and advice from wellness experts.
            </p>
          </div>
          <div className="text-center px-12 py-8 max-sm:py-6 flex flex-col justify-center items-center">
            <p className={`${poppins600.className} mb-1`}>Top Product Picks</p>
            <p className={`${poppins300.className}`}>
              Discover the best health and wellness products, selected and
              reviewed by our team.
            </p>
          </div>
          <div className="text-center px-12 py-8 max-sm:py-6 flex flex-col justify-center items-center">
            <p className={`${poppins600.className} mb-1`}>Healthy Recipes</p>
            <p className={`${poppins300.className}`}>
              Receive delicious and nutritious recipes that have been tried and
              tested by our team.
            </p>
          </div>
          <div className="text-center px-12 py-8 max-sm:py-6 flex flex-col justify-center items-center">
            <p className={`${poppins600.className} mb-1`}>
              Wellness Challenges
            </p>
            <p className={`${poppins300.className}`}>
              Participate in friendly challenges to motivate and inspire your
              health journey.
            </p>
          </div>
          <div className="text-center px-12 py-8 max-sm:py-6 flex flex-col justify-center items-center">
            <p className={`${poppins600.className} mb-1`}>Fitness Trends</p>
            <p className={`${poppins300.className}`}>
              Stay on top of the latest fitness trends, workouts and technology.
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
            <Button className="bg-[#386FA4] hover:bg-[#133C55] h-9 rounded-lg px-8 py-5 text-base">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinUsSection;
