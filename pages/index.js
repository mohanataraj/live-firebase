"use client";

import { useState, useRef } from "react"; // Added useRef
import { motion, AnimatePresence } from "framer-motion";
import { NextSeo } from "next-seo";
import SignupForm from "../components/Signup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const springTransition = { type: "spring", stiffness: 150, damping: 15 };

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Create a reference for the products section
  const productsRef = useRef(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#FDFCF5] overflow-hidden text-black font-sans selection:bg-yellow-200">
      <NextSeo title="Live Insurance | Smart Protection" />
      <Header />

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={springTransition}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-5 py-2 rounded-full border-2 border-black bg-[#E0F2FE] font-bold text-sm uppercase tracking-wider shadow-[4px_4px_0px_0px_#000]"
          >
            Live and Protected
          </motion.div>

          <h1 className="text-[clamp(3.5rem,9vw,6rem)] font-[900] leading-[0.85] tracking-tighter mb-8 text-black">
            Insurance <br />
            <span className="text-[#6366F1]">reimagined.</span>
          </h1>

          <p className="text-xl md:text-2xl font-bold text-slate-800 max-w-md mb-10 leading-snug">
            Simple, smart, and built for how you actually live today. No fluff,
            just cover.
          </p>

          <div className="flex flex-col gap-6 items-start">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative px-12 py-6 bg-[#000] text-white rounded-2xl font-black text-2xl transition-all hover:scale-105 active:scale-95 shadow-[10px_10px_0px_0px_rgba(99,102,241,1)]"
            >
              Join the waitlist
            </button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl w-full p-8 bg-[#FFD646] rounded-[40px] shadow-xl border-2 border-black/5"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/40 rounded-full flex items-center justify-center border border-black/10">
                    <span className="text-lg">!</span>
                  </div>
                  <h3 className="font-[1000] text-xl tracking-tight text-black">
                    Important Notice:
                  </h3>
                </div>

                {/* The Divider Line from the image */}
                <div className="w-38 h-[3px] bg-black/80 rounded-full mb-1" />

                {/* The Body: Standard lowercase/sentence case for legibility */}
                <p className="text-[15px] leading-relaxed font-bold text-black/80">
                  We are currently focusing on intelligent consumer technology
                  and data systems. We do not provide insurance products at this
                  time. Insurance services are slated for a future phase &
                  regulatory approvals.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: 3D Bubble Cards */}
        <div className="relative h-[500px] w-full flex items-center justify-center translate-y-4 lg:translate-y-8">
          {/* TRAVEL BUBBLE */}
          <motion.div
            onClick={scrollToProducts}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              y: [-10, 10, -10],
              rotate: [-8, 8, -8],
              opacity: 1,
              scale: 1,
            }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 60 }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              default: springTransition,
            }}
            className="absolute top-0 left-4 md:left-12 w-44 h-44 md:w-52 md:h-52 bg-white rounded-full p-1 border-[3px] border-dashed border-black cursor-pointer z-10 flex flex-col items-center justify-center text-center shadow-lg overflow-visible"
          >
            <div className="w-[80%] h-[80%] rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/images/travel-3d.png"
                alt="Travel 3D"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute right-[105%] top-1/2 -translate-y-1/2 hidden lg:flex items-end pointer-events-none z-[70]">
              <div className="flex flex-col items-end min-w-max">
                <div className="flex items-baseline gap-2 mb-[-1px] mr-2">
                  <div className="flex">
                    {"Travel with".split("").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.05,
                          duration: 0.3,
                          repeat: Infinity,
                          repeatDelay: 3,
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
                <div className="w-38 h-[1px] bg-[#6366F1] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.2)]" />
              </div>
            </div>
            <div className="absolute -top-4 bg-black text-white px-4 py-1.5 rounded-full font-[900] text-[10px] md:text-xs uppercase tracking-tighter shadow-md">
              Travel
            </div>
          </motion.div>

          {/* HOME BUBBLE */}
          <motion.div
            onClick={scrollToProducts}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              y: [10, -10, 10],
              rotate: [4, -4, 4],
              opacity: 1,
              scale: 1,
            }}
            whileHover={{ scale: 1.15, rotate: 0, zIndex: 50 }}
            transition={{
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              default: springTransition,
            }}
            className="absolute z-30 w-52 h-52 md:w-64 md:h-64 bg-white rounded-full p-1 border-[4px] border-dashed border-[#6366F1] cursor-pointer flex flex-col items-center justify-center text-center shadow-xl"
          >
            <div className="w-[85%] h-[85%] rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/images/home-3d.png"
                alt="Home 3D"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="absolute -bottom-3 bg-[#6366F1] text-white px-4 py-1.5 rounded-full font-black text-xs md:text-sm uppercase tracking-tighter shadow-lg">
              Home
            </p>
          </motion.div>

          {/* CAR BUBBLE */}
          <motion.div
            onClick={scrollToProducts}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              y: [50, 70, 50],
              rotate: [10, -10, 10],
              opacity: 1,
              scale: 1,
            }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 60 }}
            transition={{
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              },
              rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              default: springTransition,
            }}
            className="absolute bottom-12 right-4 md:right-12 w-44 h-44 md:w-52 md:h-52 bg-white rounded-full p-1 border-[3px] border-dashed border-black cursor-pointer z-20 flex flex-col items-center justify-center text-center shadow-lg overflow-visible"
          >
            <div className="w-[80%] h-[80%] rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/images/car-3d.png"
                alt="Car 3D"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute right-[105%] top-1/2 -translate-y-1/2 hidden lg:flex items-end pointer-events-none z-[70]">
              <div className="flex flex-col items-end min-w-max">
                <div className="flex items-baseline gap-2 mb-[-1px] mr-2">
                  <div className="flex">
                    {"Navigate with".split("").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.05,
                          duration: 0.3,
                          repeat: Infinity,
                          repeatDelay: 3,
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
                <div className="w-44 h-[1px] bg-[#6366F1] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.2)]" />
              </div>
            </div>
            <div className="absolute -top-4 bg-black text-white px-4 py-1.5 rounded-full font-[900] text-[10px] md:text-xs uppercase tracking-tighter shadow-md">
              Cars
            </div>
          </motion.div>
        </div>
      </main>

      <section
        id="products-section"
        ref={productsRef}
        className="py-24 px-6 bg-[#6366F1] border-y-[6px] border-black text-white overflow-hidden scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[clamp(3rem,8vw,5.5rem)] font-[1000] tracking-tighter leading-none mb-4">
              Our <span className="text-[#FFD646]">Products.</span>
            </h2>
            <div className="w-24 h-2 bg-[#FFD646] mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-1 rounded-full border-2 border-white bg-black/20 font-black text-xs uppercase tracking-widest">
                First Consumer Product
              </div>

              <h3 className="text-[clamp(3rem,6vw,5rem)] font-[1000] tracking-tighter leading-none">
                Meet <span className="text-[#91FF84]">Spotte.</span>
              </h3>

              <p className="text-2xl font-bold leading-snug text-blue-50">
                Our personal maps and companion for anything that moves. Built
                to help you take smart decisions and ensure safer insurance.
              </p>

              <div className="p-8 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-[32px]">
                <p className="text-lg font-bold">
                  "We're building intelligent systems that put the user
                  first—providing the data you need for smarter risk
                  management."
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block px-8 py-4 bg-white text-black border-4 border-black rounded-2xl font-black text-xl shadow-[8px_8px_0px_0px_#000] cursor-not-allowed"
              >
                Coming Soon
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-[#000] rounded-[48px] border-[6px] border-black overflow-hidden shadow-[30px_30px_0px_0px_rgba(0,0,0,0.2)]"
            >
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 bg-[#FFD646] rounded-full border-4 border-black flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(145,255,132,0.4)]">
                    <span className="text-6xl">📍</span>
                  </div>
                  <p className="mt-6 font-black text-2xl uppercase tracking-tighter text-white">
                    Live Location Engine
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MODAL & FOOTER REMAIN UNCHANGED --- */}
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
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={springTransition}
              className="relative w-full max-w-lg bg-white border-[6px] border-black rounded-[48px] p-12 shadow-[24px_24px_0px_0px_#000]"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 font-black text-3xl hover:rotate-90 transition-transform"
              >
                ✕
              </button>
              <h2 className="text-5xl font-black tracking-tighter mb-6 leading-none">
                Grab your <br />
                spot.
              </h2>
              <p className="text-lg font-bold text-slate-600 mb-8">
                Join the list for early access and zero-fluff insurance updates.
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
