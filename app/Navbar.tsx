"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 px-4">
        <div className="max-w-7xl mx-auto flex items-center">

          <div
            className="
              relative z-10
              shrink-0
              top-1
            "
          >
            <Link
              href="/"
              className="
                w-20 h-20
                md:w-24 md:h-24
                rounded-full
                bg-white
                shadow-2xl
                flex items-center justify-center
                overflow-hidden
              "
            >
              <img
                src="/Journel_logo.png"
                alt="JFER Logo"
                className="w-24 h-24 object-contain"
              />
            </Link>
          </div>

          {/* Main Bar */}
          <div
            className="
              -ml-10
              flex-1
              h-16
              rounded-full
              bg-black/80
              backdrop-blur-xl
              border border-white/10
              shadow-2xl
              flex items-center justify-between
              pl-14
              pr-3
            "
          >

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">

              <Link href="/" className="hover:text-gray-300 transition">
                Home
              </Link>

              <Link href="/archives" className="hover:text-gray-300 transition">
                Archives
              </Link>

              <Link href="/editorial" className="hover:text-gray-300 transition">
                Editorial Board
              </Link>

              <Link href="/about" className="hover:text-gray-300 transition">
                About
              </Link>

              <Link href="/contact" className="hover:text-gray-300 transition">
                Contact
              </Link>

            </div>

            {/* Submit Button */}
            <Link
              href="/submit"
              className="
                hidden md:flex
                items-center justify-center
                h-12
                px-8
                rounded-full
                bg-white
                text-black
                text-sm
                font-semibold
                transition-all duration-300
                hover:scale-105
              "
            >
              Submit Paper
            </Link>

            {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-auto mr-2 relative w-6 h-6"
          >
            <span
              className={`
                absolute left-0 w-6 h-[2px] bg-white rounded-full
                transition-all duration-300 ease-out
                ${menuOpen ? "rotate-45 top-3" : "top-1"}
              `}
            />

            <span
              className={`
                absolute left-0 top-3 w-6 h-[2px] bg-white rounded-full
                transition-all duration-300 ease-out
                ${menuOpen ? "opacity-0" : "opacity-100"}
              `}
            />

            <span
              className={`
                absolute left-0 w-6 h-[2px] bg-white rounded-full
                transition-all duration-300 ease-out
                ${menuOpen ? "-rotate-45 top-3" : "top-5"}
              `}
            />
          </button>

          </div>

        </div>

      </nav>

      <div
        onClick={() => setMenuOpen(false)}
        className={`
          fixed inset-0 z-40 md:hidden
          bg-black/50 backdrop-blur-sm
          transition-all duration-300 ease-out

          ${
            menuOpen
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* MOBILE MENU */}
      <div
        className={`
          fixed
          top-25
          left-4
          right-4
          z-50
          md:hidden

          bg-black/95
          backdrop-blur-xl
          border border-white/10
          rounded-3xl
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]

          p-6

          transition-all
          duration-300
          ease-out

          ${
            menuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col gap-5 text-white">

          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="
              transition-all
              duration-300
              hover:text-gray-300
              hover:translate-x-2
            "
            style={{ transitionDelay: menuOpen ? "50ms" : "0ms" }}
          >
            Home
          </Link>

          <Link
            href="/archives"
            onClick={() => setMenuOpen(false)}
            className="
              transition-all
              duration-300
              hover:text-gray-300
              hover:translate-x-2
            "
            style={{ transitionDelay: menuOpen ? "100ms" : "0ms" }}
          >
            Archives
          </Link>

          <Link
            href="/editorial"
            onClick={() => setMenuOpen(false)}
            className="
              transition-all
              duration-300
              hover:text-gray-300
              hover:translate-x-2
            "
            style={{ transitionDelay: menuOpen ? "150ms" : "0ms" }}
          >
            Editorial Board
          </Link>

          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="
              transition-all
              duration-300
              hover:text-gray-300
              hover:translate-x-2
            "
            style={{ transitionDelay: menuOpen ? "200ms" : "0ms" }}
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="
              transition-all
              duration-300
              hover:text-gray-300
              hover:translate-x-2
            "
            style={{ transitionDelay: menuOpen ? "250ms" : "0ms" }}
          >
            Contact
          </Link>

          <Link
            href="/submit"
            onClick={() => setMenuOpen(false)}
            className="
              mt-3
              bg-white
              text-black
              text-center
              py-3
              rounded-full
              font-semibold

              transition-all
              duration-300
              hover:scale-[1.02]
            "
            style={{ transitionDelay: menuOpen ? "300ms" : "0ms" }}
          >
            Submit Paper
          </Link>

        </div>
      </div>
    </>
  );
}