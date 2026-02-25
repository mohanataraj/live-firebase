"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ onJoinClick }) {
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
      {/* Responsive Wrapper: 
        - px-4 for phones
        - md:px-8 for tablets
        - lg:px-12 for desktop 
      */}
      <div className="absolute top-0 left-0 right-0 z-[100] flex justify-center pt-6 md:pt-8 px-4 md:px-8 lg:px-12 pointer-events-none">
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="pointer-events-auto w-full max-w-7xl flex items-center justify-between bg-transparent"
        >
          {/* --- LOGO --- */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-[1000] tracking-tighter text-black group flex items-center"
          >
            <div className="flex gap-1 mr-3 md:mr-4">
              {"LIVE".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  animate={{
                    rotate: i % 2 === 0 ? [-10, 10, -10] : [10, -10, 10],
                    y: i % 2 === 0 ? [0, -3, 0] : [-3, 0, -3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative uppercase text-[#FFD600] font-[1000] tracking-tighter inline-block"
                  style={{
                    textShadow: `
                      -2px -2px 0 #000,  
                      2px -2px 0 #000,
                      -2px  2px 0 #000,
                      2px  2px 0 #000,
                      4px  4px 0px rgba(0,0,0,0.2)
                    `,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <span className="leading-none">Insurance</span>
          </Link>

          {/* --- DESKTOP/TABLET NAV --- 
              Changed from md:flex to lg:flex to keep the hamburger on vertical tablets, 
              or keep it at md:flex if you want tablets to show full links.
          */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="#"
              className="text-sm font-black uppercase tracking-widest hover:text-[#6366F1] transition-colors"
            >
              About
            </Link>

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

            <button
              onClick={() => {
                onJoinClick();
                setIsMenuOpen(false);
              }}
              className="px-6 py-2.5 bg-[#FFD600] border-2 border-black rounded-xl font-black text-sm uppercase shadow-[4px_4px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
            >
              Join Waitlist
            </button>
          </nav>

          {/* --- MOBILE/TABLET TOGGLE --- 
              Visible on Small and Medium (Tablets), hidden on Large (Desktop)
          */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden w-11 h-11 md:w-12 md:h-12 border-[3px] md:border-4 border-black rounded-xl flex flex-col items-center justify-center gap-1.5 bg-[#6366F1] shadow-[3px_3px_0px_0px_#000] md:shadow-[4px_4px_0px_0px_#000]"
          >
            <div className="w-5 md:w-6 h-1 bg-white rounded-full" />
            <div className="w-5 md:w-6 h-1 bg-white rounded-full" />
          </button>
        </motion.header>
      </div>

      {/* --- SLIDE-OUT MENU (Mobile & Tablet) --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop for closing menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 z-[150] lg:hidden"
            />

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[280px] md:w-[400px] z-[200] bg-[#FFD600] flex flex-col p-8 border-l-[6px] md:border-l-[10px] border-black"
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 md:w-14 md:h-14 border-4 border-black rounded-2xl bg-white font-black text-xl md:text-2xl shadow-[4px_4px_0px_0px_#000] md:shadow-[6px_6px_0px_0px_#000]"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col gap-6 md:gap-8 mt-12">
                {["ABOUT", "PRODUCTS", "CONTACT"].map((item) => (
                  <Link
                    key={item}
                    href={item === "PRODUCTS" ? "#products-section" : "#"}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl md:text-5xl font-[1000] tracking-tighter text-black hover:italic transition-all"
                  >
                    {item}
                  </Link>
                ))}

                {/* Waitlist button inside mobile menu for easier access */}
                <button
                  onClick={() => {
                    onJoinClick();
                    setIsMenuOpen(false);
                  }}
                  className="mt-4 px-6 py-4 bg-white border-4 border-black rounded-2xl font-black text-xl uppercase shadow-[6px_6px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  Join Waitlist
                </button>
              </nav>

              <div className="mt-auto">
                <p className="font-black uppercase tracking-widest text-xs md:text-sm text-black">
                  © 2026 Live Insurance
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
