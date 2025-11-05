"use client";

import { cn } from "@/lib/utils";
import { Inter, Karla } from "next/font/google";
import Link from "next/link";
import { easeInOut, motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Button } from "../ui/button";
import { IoDownloadOutline } from "react-icons/io5";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TextLoopTest } from "./text-loop-test";
import { fadeIn } from "@/lib/variants";
import { TypeAnimation } from "react-type-animation";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const words =
  "Crafting smooth, responsive, and modern interfaces that just feel right.";

export default function Introduce() {
  return (
    <div className="md:w-1/2 mx-auto w-full">
      <div className="space-y-4 lg:space-y-6 mb-6 text-center md:text-left">
        <h1 className="text-fuchsia-500 text-2xl md:text-3xl lg:text-4xl font-extrabold">
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Hello! I'm Rahmat",
              2000,
              "You can call me Ryan😁",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "I'm a Frontend Web Developer",
              2000,
              "I'm focusing on Next.js",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
            className="text-gradient-to-r from-purple-400 to-pink-500 font-mono font-light text-[18px] lg:text-2xl"
          />
        </h1>
        {/* <p
          className={cn(
            "text-lg lg:text-2xl font-medium text-muted-foreground tracking-wider",
            karla.className
          )}
        >
          A web developer with a passion for creating engaging, entertaining
          user experiences and responsive web design.
          <br />
          <span className="hidden lg:block">
            You can find me on
            {/* <HoverCardDemo /> */}
        {/* </span> */}
        {/* </p> */}
        <TextGenerateEffect
          words={words}
          duration={0.5}
          className={cn(
            "text-lg lg:text-xl font-medium text-muted-foreground tracking-wider",
            inter.className
          )}
        />

        <TextLoopTest />
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="hidden md:flex justify-start space-x-4"
        >
          <Link href="https://github.com/Ryan-Fx" target="_blank">
            <FaGithub className="h-8 w-8 hover:scale-110 transition duration-300 hover:text-purple-500" />
          </Link>
          <Link href="https://www.linkedin.com/in/rahmat-p" target="_blank">
            <FaLinkedin className="h-8 w-8 hover:scale-110 transition duration-300 hover:text-purple-500" />
          </Link>
          <Link href="https://instagram.com/fx.ryan" target="_blank">
            <FaInstagram className="h-8 w-8 hover:scale-110 transition duration-300 hover:text-purple-500" />
          </Link>
        </motion.div>
        <motion.div
          // initial={{ opacity: 0, y: 100 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ delay: 0.5, duration: 1.2 }}

          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="space-y-3 space-x-2 sm:space-x-3"
        >
          <Button
            className="hover:scale-110 transition duration-300 rounded-full"
            asChild
          >
            <Link href={"#contact"}>
              Contact Me <FaArrowRight size={16} className="ml-2" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="hover:scale-110 transition duration-300 rounded-full shadow-lg"
          >
            <Link
              href={
                "https://docs.google.com/document/d/16IBKBDKwbmZY76pvDuqxJxskaTzdoeY5YHRjw9vxEaQ/edit?usp=sharing"
              }
              target="_blank"
            >
              Get Resume
              <IoDownloadOutline size={20} className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
