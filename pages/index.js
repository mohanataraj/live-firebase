"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { NextSeo } from "next-seo";
import SignupForm from "../components/Signup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Products from "@/components/Products";

const staggerContainer = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.15,
    },
  },
};

const childElement = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productsRef = useRef(null);

  const { scrollY } = useScroll();

  // Smooth Parallax
  const rawSectionY = useTransform(scrollY, [0, 1500], [0, -100]);
  const rawProductY = useTransform(scrollY, [200, 1500], [80, 0]);
  const sectionParallax = useSpring(rawSectionY, {
    stiffness: 100,
    damping: 30,
  });
  const productParallax = useSpring(rawProductY, {
    stiffness: 100,
    damping: 30,
  });

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#FDFCF5] overflow-x-hidden text-black font-sans selection:bg-yellow-200">
      <NextSeo title="Live Insurance | Smart Protection" />
      <Header onJoinClick={() => setIsModalOpen(true)} />

      <motion.main
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="max-w-7xl mx-auto px-6 pt-40 pb-32"
      >
        <motion.div
          style={{ y: sectionParallax }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={childElement} className="z-10">
            <motion.div
              variants={childElement}
              className="inline-block mb-10 px-4 py-1.5 rounded-full border-2 border-black bg-[#E0F2FE] font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#000]"
            >
              Live and Protected
            </motion.div>

            <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-[900] leading-[0.9] tracking-tighter mb-10 text-black">
              Insurance <br />
              <span className="text-[#6366F1]">reimagined.</span>
            </h1>

            <p className="text-lg md:text-xl font-bold text-slate-800 max-w-sm mb-12 leading-relaxed">
              Simple, smart, and built for how you actually{" "}
              <span
                className="relative capitalize text-[#FFD600] font-[1000]"
                style={{
                  textShadow: `-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000, 4px 4px 0px rgba(0,0,0,0.2)`,
                }}
              >
                Live
              </span>{" "}
              today. No{" "}
              <span
                className="relative uppercase text-[#FFFFFF] font-[1000]"
                style={{
                  textShadow: `-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 2px 2px 0px rgba(0,0,0,0.2)`,
                }}
              >
                fluff
              </span>
              , just{" "}
              <span
                className="relative uppercase text-[#FFFFFF] font-[1000]"
                style={{
                  textShadow: `-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 2px 2px 0px rgba(0,0,0,0.2)`,
                }}
              >
                coverage
              </span>
              .
            </p>

            <div className="flex flex-col gap-10 items-start">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative px-10 py-4 mt-2 bg-black text-white rounded-xl font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-[7px_7px_0px_0px_rgba(99,102,241,1)]"
              >
                Join the waitlist
              </button>

              <div className="max-w-sm w-full p-5 mt-10 bg-[#FFD646] rounded-[24px] shadow-lg border-2 border-black/5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-white/40 rounded-full flex items-center justify-center border border-black/10 text-xs font-black">
                    !
                  </div>
                  <h3 className="font-[1000] text-sm text-black">
                    Important Notice:
                  </h3>
                </div>
                <p className="text-[12px] leading-relaxed font-bold text-black/80">
                  We are currently focusing on intelligent consumer technology.
                  We do not provide insurance policies at this time.
                </p>
              </div>
              <p className="text-[11px] mt-5 italic font-medium text-slate-500 leading-snug">
                <span className="font-bold not-italic uppercase tracking-wider mr-1 text-slate-700">
                  Note:
                </span>
                Insurance services are slated for a future phase & regulatory
                approvals.
              </p>
            </div>
          </motion.div>

          {/* Floating Circles Section with Video & HUD */}
          <div className="relative h-[550px] w-full flex items-center justify-center lg:translate-y-12">
            {/* Travel Circle */}
            <motion.div
              variants={childElement}
              onClick={scrollToProducts}
              animate={{ y: [-10, 10, -10], rotate: [-8, 8, -8] }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute top-0 left-4 md:left-12 w-40 h-40 md:w-48 md:h-48 bg-white rounded-full p-1 border-[2px] border-dashed border-black cursor-pointer z-10 shadow-lg"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/travel.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/20 rounded-full" />
              </div>

              {/* HUD: TRAVEL WITH */}
              <div className="absolute right-[105%] top-1/2 -translate-y-1/2 hidden lg:flex items-end pointer-events-none z-[70]">
                <div className="flex flex-col items-end min-w-max">
                  <div className="flex items-baseline gap-2 mb-[-1px] mr-2">
                    <div className="flex">
                      {"TRAVEL WITH".split("").map((char, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: i * 0.05,
                            duration: 0.3,
                            repeat: Infinity,
                            repeatDelay: 4,
                          }}
                          className="text-[11px] lowercase font-light text-black tracking-[0.1em] inline-block"
                          style={{ whiteSpace: "pre" }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </div>
                    <motion.span
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-[#6366F1] font-bold text-[14px] uppercase tracking-[0.1em] drop-shadow-sm"
                    >
                      Spotte
                    </motion.span>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5, // Starts slightly after the text begins typing
                      ease: "circOut",
                      repeat: Infinity,
                      repeatDelay: 3.5, // Matches your text's repeat cycle
                    }}
                    style={{ originX: 0 }} // Ensures it grows from left to right
                    className="w-38 h-[1px] bg-[#6366F1] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.4)]"
                  />
                </div>
              </div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 rounded-full font-black text-[10px] uppercase z-20">
                Travel
              </div>
            </motion.div>

            {/* Home Circle */}
            <motion.div
              variants={childElement}
              onClick={scrollToProducts}
              animate={{ y: [10, -10, 10], rotate: [4, -4, 4] }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute z-30 w-48 h-48 md:w-60 md:h-60 bg-white rounded-full p-1 border-[3px] border-dashed border-[#6366F1] cursor-pointer shadow-xl"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/home.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20 rounded-full" />
              </div>
              <p className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#6366F1] text-white px-4 py-1 rounded-full font-black text-xs uppercase z-20">
                Home
              </p>
            </motion.div>

            {/* Car Circle */}
            <motion.div
              variants={childElement}
              onClick={scrollToProducts}
              animate={{ y: [40, 60, 40], rotate: [10, -10, 10] }}
              transition={{
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute bottom-12 right-4 md:right-12 w-40 h-40 md:w-48 md:h-48 bg-white rounded-full p-1 border-[2px] border-dashed border-black cursor-pointer z-20 shadow-lg"
            >
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/car.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20 rounded-full" />
              </div>

              {/* HUD: NAVIGATE WITH */}
              <div className="absolute right-[105%] top-1/2 -translate-y-1/2 hidden lg:flex items-end pointer-events-none z-[70]">
                <div className="flex flex-col items-end min-w-max">
                  <div className="flex items-baseline gap-2 mb-[-1px] mr-2">
                    <div className="flex">
                      {"NAVIGATE WITH".split("").map((char, i) => (
                        <motion.span
                          variants={childElement}
                          key={i}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: i * 0.05,
                            duration: 0.3,
                            repeat: Infinity,
                            repeatDelay: 4,
                          }}
                          className="text-[11px] lowercase font-light text-black tracking-[0.1em] inline-block"
                          style={{ whiteSpace: "pre" }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </div>

                    <motion.span
                      variants={childElement}
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-[#6366F1] font-bold text-[14px] uppercase tracking-[0.1em] drop-shadow-sm"
                    >
                      Spotte
                    </motion.span>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5, // Starts slightly after the text begins typing
                      ease: "circOut",
                      repeat: Infinity,
                      repeatDelay: 3.5, // Matches your text's repeat cycle
                    }}
                    style={{ originX: 0 }} // Ensures it grows from left to right
                    className="w-42 h-[1px] bg-[#6366F1] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.4)]"
                  />
                </div>
              </div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 rounded-full font-black text-[10px] uppercase z-20">
                Cars
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.main>

      {/* Products Section */}
      <Products />

      {/* Waitlist Modal Logic */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-md bg-white border-[4px] border-black rounded-[40px] p-10 shadow-[15px_15px_0px_0px_#000]"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-8 font-black text-2xl hover:rotate-90 transition-transform"
              >
                ✕
              </button>
              <h2 className="text-4xl font-black tracking-tighter mb-4">
                Grab your spot.
              </h2>
              <p className="text-base font-bold text-slate-600 mb-8">
                Join the list for early access and updates.
              </p>
              <SignupForm />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
