"use client";

import { usePathname } from "next/navigation";
import NavBar from "./nav-bar";
import MobileNav from "./mobile-nav";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20">
      <NavBar />
      <MobileNav />
    </header>
  );
}
