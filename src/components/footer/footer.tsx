"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/")
    return (
      <footer className="py-4">
        <p className="px-4 text-center text-primary">
          <small className="block text-xs md:text-base md:hover:text-purple-500 transition duration-300">
            &copy; 2025 Rahmat Pongsale. All rights reserved.
          </small>
        </p>
      </footer>
    );
}
