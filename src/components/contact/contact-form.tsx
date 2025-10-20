"use client";

import { cn } from "@/lib/utils";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { MessageInput, messageSchema } from "@/schema/messages";
import { useTransition } from "react";
import { createMessage } from "@/actions/messages";
import toast from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<MessageInput>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: MessageInput) => {
    startTransition(async () => {
      try {
        await createMessage(values);
        toast.success("Your message was sent successfully!");
        form.reset();
      } catch (error: any) {
        toast.error("Something went wrong, please try again!");
        console.error("Failed to send message:", error);
      }
    });
  };

  return (
    <div className="col-span-4 mt-5 lg:mt-0">
      <motion.div
        variants={fadeIn("left")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className={cn("col-span-4", poppins.className)}
      >
        {" "}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 lg:text-2xl"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      className="ring-2 ring-cyan-500"
                      placeholder="Ryan"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      className="ring-2 ring-cyan-500"
                      placeholder="example@mail.com"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={20}
                      className="ring-2 ring-cyan-500 resize-none min-h-[200px]"
                      placeholder="Let's talk about..."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={isPending}
              type="submit"
              className="cursor-pointer"
            >
              {isPending ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}
