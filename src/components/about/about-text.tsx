import { cn } from "@/lib/utils";
import { Inter, Karla, Nanum_Pen_Script } from "next/font/google";
import React from "react";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// const nanum = Nanum_Pen_Script({
//   subsets: ["latin"],
//   weight: ["400"],
// });

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function AboutText() {
  return (
    <div className="md:w-1/2 p-5 lg:py-28">
      {/* <div className="bg-linear-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700" /> */}
      <p
        className={cn(
          "text-lg md:text-xl text-muted-foreground tracking-wider",
          inter.className
        )}
      >
        A passionate web developer{" "}
        <span className={cn("text-rose-400 text-xl", karla.className)}>
          (Junior developer for now)
        </span>
        , love to learn new things for the web. Try to enhance user interface to
        make better user experience.{" "}
        <span className="text-rose-400">I enjoy development</span> because of
        the satisfaction i get by overcoming challenges. i am motivated by the
        opportunity that software provides to positively impact the life of an
        individual, and the world as a whole.
      </p>
    </div>
  );
}
