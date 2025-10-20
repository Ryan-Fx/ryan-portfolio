"use client";

import React from "react";
import { motion } from "framer-motion";
import { ModeToggle } from "../mode-toggle";
import NavLinks from "./nav-links";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="pt-10 relative hidden md:flex">
      <div className="w-full flex justify-center">
        <div className="">
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.2 }}
            className="hidden md:flex  z-10 bg-opacity-60 backdrop-blur-md bg-white/30 dark:bg-primary d rounded-full shadow-lg shadow-slate-500/30 py-2 px-5"
          >
            <NavLinks />
          </motion.div>
        </div>
      </div>
      {/* dark mode */}
      <div className="hidden md:flex pr-8 absolute top-6 right-0">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <ModeToggle />
          <Button asChild variant="ghost">
            <Link href="/message">Inbox!</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
