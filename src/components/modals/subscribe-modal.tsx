"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import confetti from "canvas-confetti";
import { Input } from "@components/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@components/components/ui/form";
import { Modal } from "@/src/components/ui/modal";
import { Button } from "@/src/components/ui/button";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const formSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
});

export const SubscribeModal = ({
  isOpen,
  onClose,
  onConfirm,
}: SubscribeModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

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
        onConfirm();
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Modal
      title="Subscribe to The Wellness Crunch"
      description="Subscribe now  to our weekly email updates and get the latest wellness news and trends."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-center w-full">
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
      </div>
    </Modal>
  );
};
