import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { FaAlignJustify } from "react-icons/fa";
import { ModeToggle } from "../mode-toggle";
import MobileNavLinks from "./mobile-nav-links";

export default function MobileNav() {
  return (
    <div className="md:hidden flex justify-between px-5 pt-5">
      <ModeToggle />
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
