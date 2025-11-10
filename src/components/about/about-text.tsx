"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Inter, Karla, Roboto } from "next/font/google";
import { Button } from "../ui/button";
import { fadeIn } from "@/lib/variants";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function AboutText() {
  const [lang, setLang] = useState<"en" | "id">("en");

  // Ambil bahasa terakhir dari localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "id" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  // Simpan ke localStorage setiap kali bahasa berubah
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  // Toggle bahasa
  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "id" : "en"));
  };

  return (
    <motion.div
      variants={fadeIn("left")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="md:w-1/2 p-5 lg:py-28"
    >
      {/* Tombol toggle */}
      <div className="flex justify-end mb-3">
        <Button
          onClick={toggleLang}
          variant="outline"
          className="cursor-pointer"
        >
          {lang === "en" ? "🇮🇩 Bahasa Indonesia" : "us English"}
        </Button>
      </div>

      {/* Animasi teks */}
      <AnimatePresence mode="wait">
        <motion.p
          key={lang} // trigger animasi setiap kali lang berubah
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: -10 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={cn(
            "text-lg md:text-xl text-muted-foreground font-semibold tracking-wider leading-relaxed",
            roboto.className
          )}
        >
          {lang === "en" ? (
            <>
              I’m a Front-End Web Developer passionate about crafting modern,
              responsive, and high-performance interfaces. I love building
              clean, component-based designs that focus on great UI and smooth
              UX. I’m always learning, experimenting with Next.js projects, and
              pushing myself to create better user experiences with every line
              of code.
            </>
          ) : (
            <>
              Seorang Front-End Web Developer yang suka ngebuild tampilan web
              modern, responsif, dan berperforma tinggi. Suka mengerjakan desain
              yang bersih dan berbasis komponen, dengan fokus ke tampilan yang
              rapi dan pengalaman pengguna yang terasa natural. Suka belajar dan
              bereksperimen lewat berbagai proyek Next.js, sambil ngepush diri
              sendiri untuk bisa membuat pengalaman web yang lebih baik di
              setiap baris kode.
            </>
          )}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
}
