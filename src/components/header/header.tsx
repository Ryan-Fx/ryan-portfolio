"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import MobileNav from "./mobile-nav";
import NavBar from "./nav-bar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="hidden md:block">
        <div>
          <NavBar />
        </div>

        <div className="flex items-center gap-x-6 fixed top-8 right-8">
          <SignedIn>
            <UserButton />
          </SignedIn>

          <Link href="/message" className="flex items-center">
            📩
          </Link>
        </div>
      </div>

      <div className="md:hidden">{/* <MobileNav /> */}</div>
    </header>
  );
}
