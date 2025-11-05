"use client";

import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { FaAlignJustify } from "react-icons/fa";
import { ModeToggle } from "../mode-toggle";
import MobileNavLinks from "./mobile-nav-links";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function MobileNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Kalau user scroll > 20px, aktifkan efek blur
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`md:hidden sticky top-0 left-0 w-full z-50 flex justify-between px-5 pt-4 pb-3 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-md bg-white/50 dark:bg-gray-900/60 shadow-xl"
          : "bg-transparent"
      }`}
    >
      {/* Bagian kiri */}
      <div className="flex items-center space-x-2">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/message">📩</Link>
        </Button>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* Tombol menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <FaAlignJustify size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[300px]" side="left">
          <SheetHeader>
            <SheetTitle></SheetTitle>
          </SheetHeader>
          <MobileNavLinks />
        </SheetContent>
      </Sheet>
    </div>
  );
}
