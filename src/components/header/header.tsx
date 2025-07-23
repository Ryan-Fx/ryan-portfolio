"use client";

import { usePathname } from "next/navigation";
import NavBar from "./nav-bar";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20">
      <NavBar />
    </header>
  );
}
