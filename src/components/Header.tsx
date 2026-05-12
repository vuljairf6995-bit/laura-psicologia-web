"use client";

import { useState, useEffect } from "react";
import { WA_URL } from "@/lib/contact";

const navLinks = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fafaf7]/95 backdrop-blur-md shadow-[0_1px_0_0_#e4d9cc]"
          : "bg-[#fafaf7]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="group">
          <div className="flex items-center gap-2">
            {/* Minimal leaf icon — connects to growth, calm, wellness */}
            <svg
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              aria-hidden="true"
              className="flex-shrink-0 mb-0.5"
            >
              <path
                d="M6.5 14.5C6.5 14.5 1 10.5 1 5.8C1 2.8 3.4 1 6.5 1C9.6 1 12 2.8 12 5.8C12 10.5 6.5 14.5 6.5 14.5Z"
                stroke="#87a87d"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 14.5V3"
                stroke="#87a87d"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
              <path
                d="M6.5 8.5C5 7.5 3.5 6.5 3.5 5"
                stroke="#87a87d"
                strokeWidth="1.1"
                strokeLinecap="round"
                opacity="0.55"
              />
            </svg>
            <span className="font-serif text-2xl font-semibold italic text-[#2d2a26] tracking-tight leading-none">
              Laura Aldana
            </span>
          </div>
          <p className="text-[11px] text-[#8c8680] tracking-[0.18em] uppercase font-sans mt-1 pl-[21px]">
            Psicóloga clínica · Terapia en español
          </p>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-sans text-[#5a554f] hover:text-[#2a4a1b] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[#2a4a1b] text-white text-sm font-sans font-medium hover:bg-[#3a6228] transition-colors duration-200"
        >
          Iniciar terapia
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#2d2a26] -mr-2"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span
              className={`block h-px bg-current transition-all duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#fafaf7] border-t border-[#e4d9cc] px-6 py-5">
          <nav className="flex flex-col gap-5">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-sans text-[#4a4540] hover:text-[#2a4a1b] transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-fit items-center px-5 py-2.5 rounded-full bg-[#2a4a1b] text-white text-sm font-sans font-medium mt-1"
            >
              Iniciar terapia
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
