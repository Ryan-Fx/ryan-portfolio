"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Inter, Karla } from "next/font/google";
import { Button } from "../ui/button";
import { fadeIn } from "@/lib/variants";

const karla = Karla({
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
        <Button onClick={toggleLang} variant="outline">
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
            "text-lg md:text-xl text-muted-foreground tracking-wider leading-relaxed",
            inter.className
          )}
        >
          {lang === "en" ? (
            <>
              I'm a passionate web developer{" "}
              <span className={cn("text-rose-400 text-xl", karla.className)}>
                (still growing as a junior)
              </span>{" "}
              who loves building clean and modern web interfaces. I enjoy
              learning new things, experimenting with designs, and trying to
              enhance user interfaces to create a better user experience. Every
              project I work on helps me learn, improve, and get closer to the
              developer I want to be.
            </>
          ) : (
            <>
              Saya adalah web developer yang bersemangat{" "}
              <span className={cn("text-rose-400 text-xl", karla.className)}>
                (masih berkembang sebagai junior)
              </span>{" "}
              yang suka membangun tampilan web yang bersih dan modern. Saya suka
              mempelajari hal-hal baru, bereksperimen dengan desain, dan terus
              berusaha membuat antarmuka yang lebih baik agar pengalaman
              pengguna terasa lebih nyaman. Setiap proyek yang saya kerjakan
              membantu saya belajar, berkembang, dan semakin dekat dengan
              developer yang saya inginkan.
            </>
          )}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
}
