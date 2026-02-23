"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    opened: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-6 px-4 pointer-events-none">
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="pointer-events-auto w-full max-w-6xl bg-white border-4 border-black rounded-[24px] px-6 md:px-10 py-4 shadow-[8px_8px_0px_0px_#000] flex items-center justify-between"
        >
          <Link
            href="/"
            className="text-2xl font-[1000] tracking-tighter text-black group"
          >
            <span className="text-[#6366F1]">Live</span> Insurance
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="text-sm font-black uppercase tracking-widest hover:text-[#6366F1] transition-colors"
            >
              About
            </Link>

            {/* LINKED TO PRODUCTS */}
            <Link
              href="#products-section"
              className="text-sm font-black uppercase tracking-widest hover:text-[#6366F1] transition-colors"
            >
              Products
            </Link>

            <Link
              href="#"
              className="text-sm font-black uppercase tracking-widest hover:text-[#6366F1] transition-colors"
            >
              Contact
            </Link>

            <button className="px-6 py-2.5 bg-[#FFD600] border-2 border-black rounded-xl font-black text-sm uppercase shadow-[4px_4px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all">
              Join Waitlist
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden w-12 h-12 border-4 border-black rounded-xl flex flex-col items-center justify-center gap-1.5 bg-[#6366F1] shadow-[4px_4px_0px_0px_#000]"
          >
            <div className="w-6 h-1 bg-white rounded-full" />
            <div className="w-6 h-1 bg-white rounded-full" />
          </button>
        </motion.header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 z-[200] bg-[#FFD600] flex flex-col p-8 border-l-[10px] border-black"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-14 h-14 border-4 border-black rounded-2xl bg-white font-black text-2xl shadow-[6px_6px_0px_0px_#000]"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-8 mt-12">
              <Link
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-5xl font-[1000] tracking-tighter text-black hover:italic"
              >
                ABOUT
              </Link>

              {/* MOBILE PRODUCTS LINK */}
              <Link
                href="#products-section"
                onClick={() => setIsMenuOpen(false)}
                className="text-5xl font-[1000] tracking-tighter text-black hover:italic"
              >
                PRODUCTS
              </Link>

              <Link
                href="#"
                onClick={() => setIsMenuOpen(false)}
                className="text-5xl font-[1000] tracking-tighter text-black hover:italic"
              >
                CONTACT
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
