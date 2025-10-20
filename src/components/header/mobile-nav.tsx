import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { FaAlignJustify } from "react-icons/fa";
import { ModeToggle } from "../mode-toggle";
import MobileNavLinks from "./mobile-nav-links";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="md:hidden flex justify-between px-5 pt-5">
      <div className="flex space-x-2">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/message">Inbox!</Link>
        </Button>
        <div className="flex items-center">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <FaAlignJustify size={20} />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[300px]">
          <MobileNavLinks />
        </SheetContent>
      </Sheet>
    </div>
  );
}
