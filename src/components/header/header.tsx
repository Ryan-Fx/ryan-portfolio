"use client";

import NavBar from "./nav-bar";
import MobileNav from "./mobile-nav";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-20">
      {pathname === "/" && <NavBar />}
      {pathname === "/" && <MobileNav />}
    </header>
  );
}
