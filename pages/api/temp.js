"use client";

import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { NextSeo } from "next-seo";
import SignupForm from "@/components/Signup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const springTransition = { type: "spring", stiffness: 150, damping: 15 };

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      duration: 0.8,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0, y: 70 }, // The whole section starts down
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2, // This makes children pop in one by one!
    },
  },
};

const childElement = {
  hidden: { opacity: 0, x: -20 }, // Children slide in from the left
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Home_temp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productsRef = useRef(null);

  const { scrollY } = useScroll();

  // Maps scroll position (0 to 800px) to vertical offset (0 to -X px)

  const sectionParallax = useTransform(scrollY, [0, 2000], [0, -120]);
  const productParallax = useTransform(scrollY, [200, 1500], [60, 0]);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#FDFCF5] overflow-hidden text-black font-sans selection:bg-yellow-200">
      <NextSeo title="Live Insurance | Smart Protection" />
      <Header />

      {/* Increased pt-40 for more top spacing */}
      <motion.main
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto px-6 pt-40 pb-32 grid lg:grid-cols-2 gap-16 items-center"
      >
        <motion.div
          variants={childElement}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="z-10"
        >
          <motion.div
            variants={childElement}
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={springTransition}
            className="z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              variants={childElement}
              className="inline-block mb-10 px-4 py-1.5 rounded-full border-2 border-black bg-[#E0F2FE] font-bold text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#000]"
            >
              Live and Protected
            </motion.div>

            {/* Reduced clamp sizes for title */}
            <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-[900] leading-[0.9] tracking-tighter mb-10 text-black">
              Insurance <br />
              <span className="text-[#6366F1]">reimagined.</span>
            </h1>

            {/* Reduced font size (text-lg) and max-width for cleaner line breaks */}
            <p className="text-lg md:text-xl font-bold text-slate-800 max-w-sm mb-12 leading-relaxed">
              Simple, smart, and built for how you actually{" "}
              <span
                className="relative capitalize text-[#FFD600] font-[1000] tracking-normal"
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
                Live
              </span>{" "}
              today. No{" "}
              <span
                className="relative uppercase text-[#FFFFFF] font-[1000] tracking-wide"
                style={{
                  textShadow: `
                  -1px -1px 0 #000,  
                  1px -1px 0 #000,
                  -1px  1px 0 #000,
                  1px  1px 0 #000,
                  2px  2px 0px rgba(0,0,0,0.2)
                `,
                }}
              >
                fluff
              </span>{" "}
              , just{" "}
              <span
                className="relative uppercase text-[#FFFFFF] font-[1000] tracking-wide"
                style={{
                  textShadow: `
                  -1px -1px 0 #000,  
                  1px -1px 0 #000,
                  -1px  1px 0 #000,
                  1px  1px 0 #000,
                  2px  2px 0px rgba(0,0,0,0.2)
                `,
                }}
              >
                cover
              </span>{" "}
              .
            </p>

            <div className="flex flex-col gap-10  items-start">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative px-10 py-4 mt-2 bg-[#000] text-white rounded-xl font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-[7px_7px_0px_0px_rgba(99,102,241,1)]"
              >
                Join the waitlist
              </button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                variants={childElement}
                className="max-w-sm w-full p-5 mt-10 bg-[#FFD646] rounded-[24px] shadow-lg border-2 border-black/5"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-white/40 rounded-full flex items-center justify-center border border-black/10">
                      <span className="text-xs font-black">!</span>
                    </div>
                    <h3 className="font-[1000] text-sm tracking-tight text-black">
                      Important Notice:
                    </h3>
                  </div>
                  <div className="w-28 h-[2px] bg-black/80 rounded-full mb-1" />
                  <p className="text-[12px] leading-relaxed font-bold text-black/80">
                    We are currently focusing on intelligent consumer technology
                    and data systems. We do not provide insurance policies or
                    services at this time.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="max-w-md mt-2 px-1"
                variants={childElement}
              >
                <p className="text-[11px] italic font-medium text-slate-500 leading-snug">
                  <span className="font-bold not-italic uppercase tracking-wider mr-1 text-slate-700">
                    Note:
                  </span>
                  Insurance services are slated for a future phase & regulatory
                  approvals.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative h-[550px] w-full flex items-center justify-center lg:translate-y-12">
          <motion.div
            onClick={scrollToProducts}
            animate={{ y: [-10, 10, -10], rotate: [-8, 8, -8] }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              default: springTransition,
            }}
            variants={childElement}
            className="absolute top-0 left-4 md:left-12 w-40 h-40 md:w-48 md:h-48 bg-white rounded-full p-1 border-[2px] border-dashed border-black cursor-pointer z-10 flex flex-col items-center justify-center text-center shadow-lg"
          >
            <div className="w-[75%] h-[75%]">
              <img
                src="/images/travel-3d.png"
                alt="Travel"
                className="w-full h-full object-contain"
              />
            </div>
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
                <div className="w-40 h-[1px] bg-[#6366F1] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.2)]" />
              </div>
            </div>
            <div className="absolute -top-3 bg-black text-white px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-tighter">
              Travel
            </div>
          </motion.div>

          <motion.div
            variants={childElement}
            onClick={scrollToProducts}
            animate={{ y: [10, -10, 10], rotate: [4, -4, 4] }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              default: springTransition,
            }}
            className="absolute z-30 w-48 h-48 md:w-60 md:h-60 bg-white rounded-full p-1 border-[3px] border-dashed border-[#6366F1] cursor-pointer flex flex-col items-center justify-center text-center shadow-xl"
          >
            <div className="w-[80%] h-[80%]">
              <img
                src="/images/home-3d.png"
                alt="Home"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="absolute -bottom-3 bg-[#6366F1] text-white px-4 py-1 rounded-full font-black text-xs uppercase tracking-tighter">
              Home
            </p>
          </motion.div>

          <motion.div
            variants={childElement}
            onClick={scrollToProducts}
            animate={{ y: [40, 60, 40], rotate: [10, -10, 10] }}
            transition={{
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              default: springTransition,
            }}
            className="absolute bottom-12 right-4 md:right-12 w-40 h-40 md:w-48 md:h-48 bg-white rounded-full p-1 border-[2px] border-dashed border-black cursor-pointer z-20 flex flex-col items-center justify-center text-center shadow-lg"
          >
            <div className="w-[75%] h-[75%]">
              <img
                src="/images/car-3d.png"
                alt="Car"
                className="w-full h-full object-contain"
              />
            </div>
            {/* HUD SIGN: NAVIGATE */}
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
                <div className="w-42 h-[1px] bg-[#6366F1] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.2)]" />
              </div>
            </div>
            <div className="absolute -top-3 bg-black text-white px-3 py-1 rounded-full font-black text-[10px] uppercase tracking-tighter">
              Cars
            </div>
          </motion.div>
        </div>
      </motion.main>

      <motion.section
        id="products-section"
        ref={productsRef}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-32 px-6 bg-[#6366F1] border-y-[4px] border-black text-white scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <motion.h2
              variants={childElement}
              className="text-[clamp(2.5rem,7vw,4.5rem)] font-[1000] tracking-tighter leading-none mb-6"
            >
              Our <span className="text-[#FFD646]">Products.</span>
            </motion.h2>
            <div className="w-16 h-1.5 bg-[#FFD646] mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              variants={childElement}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-10"
            >
              <div className="inline-block px-3 py-1 rounded-full border border-white bg-black/20 font-black text-[10px] uppercase tracking-widest">
                First Consumer Product
              </div>
              <h3 className="text-[clamp(2rem,5vw,3.5rem)] font-[1000] tracking-tighter leading-none">
                Meet <span className="text-[#91FF84]">Spotte.</span>
              </h3>
              <p className="text-xl font-bold leading-relaxed text-blue-50 max-w-md">
                Our personal maps and companion for anything that moves.
              </p>
              <div className="p-7 bg-white/10 backdrop-blur-md border border-white/20 rounded-[28px]">
                <p className="text-base font-bold italic leading-relaxed">
                  "We're building intelligent systems that put the user
                  first—providing the data you need for smarter risk
                  management."
                </p>
              </div>
              <button className="px-8 py-3 bg-white text-black border-2 border-black rounded-xl font-black text-lg shadow-[5px_5px_0px_0px_#000] cursor-not-allowed">
                Coming Soon
              </button>
            </motion.div>

            <motion.div
              variants={childElement}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative aspect-square max-w-md mx-auto w-full bg-[#000] rounded-[40px] border-[4px] border-black overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#FFD646] rounded-full border-4 border-black flex items-center justify-center animate-pulse">
                    <span className="text-5xl">📍</span>
                  </div>
                  <p className="mt-6 font-black text-lg uppercase tracking-tighter text-white">
                    Live Location Engine
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Modal: Tightened typography and internal spacing */}
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
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
