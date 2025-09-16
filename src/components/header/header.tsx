"use client";

import NavBar from "./nav-bar";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-20">
      <NavBar />
      <MobileNav />
    </header>
  );
}
