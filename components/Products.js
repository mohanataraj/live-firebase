import React, { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { Apple, Play, Bell } from "lucide-react";

const Products = () => {
  const [isSoonOpen, setIsSoonOpen] = useState(false);
  const { scrollY } = useScroll();

  // Parallax Logic
  const rawY = useTransform(scrollY, [500, 2000], [100, -100]);
  const parallaxY = useSpring(rawY, { stiffness: 100, damping: 30 });

  const childElement = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const SpotteLogo = () => (
    <div className="relative flex items-center justify-center w-full max-w-[140px] aspect-square">
      <svg viewBox="0 0 200 200" className="w-full h-full z-10 drop-shadow-xl">
        <circle
          cx="100"
          cy="100"
          r="88"
          fill="none"
          stroke="#6366F1"
          strokeWidth="16"
        />
        <circle
          cx="100"
          cy="100"
          r="62"
          fill="none"
          stroke="#91FF84"
          strokeWidth="16"
        />
        <motion.circle
          cx="100"
          cy="100"
          r="38"
          fill="none"
          stroke="#6366F1"
          strokeWidth="16"
          strokeDasharray="90 29"
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <circle
          cx="100"
          cy="100"
          r="16"
          fill="none"
          stroke="#91FF84"
          strokeWidth="12"
        />
        <motion.circle
          cx="100"
          cy="100"
          r="6"
          fill="#6366F1"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      className="py-32 px-6 bg-[#6366F1] border-y-[6px] border-black text-white relative overflow-hidden"
    >
      {/* Background Grid & Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -40], x: [0, 40] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-100px] opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -100, 0], opacity: [0, 0.4, 0] }}
            transition={{ duration: 8 + Math.random() * 5, repeat: Infinity }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: parallaxY }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div
          variants={childElement}
          className="flex flex-col items-center text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-[1000] tracking-tight uppercase text-white">
            Our Products
          </h2>
          <div className="mt-6 h-1 w-32 rounded-full bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: 1 }}
              className="absolute inset-0 w-1/2 bg-white"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              variants={childElement}
              className="inline-block px-4 py-1.5 rounded-full border-2 border-black bg-white text-black font-bold text-xs uppercase shadow-[4px_4px_0px_0px_#000]"
            >
              Navigational Personal companion
            </motion.div>
            <motion.h3
              variants={childElement}
              className="text-5xl lg:text-7xl font-[1000] tracking-tighter leading-[0.9] uppercase"
            >
              Meet <br />
              <span className="text-black">Spotte.</span>
            </motion.h3>
            <motion.p
              variants={childElement}
              className="text-xl font-semibold text-white/90 max-w-sm"
            >
              Smart connection. Instant protection & intelligent awareness for
              every turn and every destination—all on demand.
            </motion.p>

            <motion.div
              variants={childElement}
              className="flex flex-wrap gap-4 pt-4 justify-center"
            >
              <button
                onClick={() => setIsSoonOpen(true)}
                className="flex items-center gap-3 bg-black text-white px-7 py-4 rounded-2xl border-2 border-white/10 font-black uppercase text-xs shadow-[6px_6px_0px_0px_#000] hover:bg-[#91FF84] hover:text-black transition-all"
              >
                <Apple size={18} /> App Store
              </button>
              <button
                onClick={() => setIsSoonOpen(true)}
                className="flex items-center gap-3 bg-black text-white px-7 py-4 rounded-2xl border-2 border-white/10 font-black uppercase text-xs shadow-[6px_6px_0px_0px_#000] hover:bg-[#91FF84] hover:text-black transition-all"
              >
                <Play size={18} fill="currentColor" /> Play Store
              </button>
            </motion.div>
          </div>

          {/* Right Side Card */}
          <motion.div
            variants={childElement}
            className="flex justify-center lg:justify-end"
          >
            <motion.button
              onClick={() => setIsSoonOpen(true)}
              whileHover={{ scale: 1.02, rotate: -1 }}
              /* Added 'flex flex-col items-center' to center everything horizontally */
              className="relative w-full max-w-[440px] bg-[#FFD646] border-[6px] border-black rounded-[50px] p-12 lg:p-16 shadow-[30px_30px_0px_0px_#000] group flex flex-col items-center text-center"
            >
              {/* The logo will now be centered due to items-center on the parent */}
              <SpotteLogo />

              <div className="mt-12 space-y-4">
                <h4 className="text-5xl lg:text-6xl font-[1000] uppercase tracking-tighter text-white">
                  Open <br />
                  <span className="text-[#6366F1] group-hover:text-black transition-colors">
                    Spotte
                  </span>
                </h4>
                <p className="text-black font-black text-[11px] tracking-[0.5em] uppercase opacity-40">
                  Press to Launch
                </p>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* REFINED COMING SOON MODAL */}
      <AnimatePresence>
        {isSoonOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSoonOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-md bg-white border-[5px] border-black rounded-[40px] p-10 shadow-[20px_20px_0px_0px_#000] text-center"
            >
              <button
                onClick={() => setIsSoonOpen(false)}
                className="absolute top-6 right-8 font-black text-2xl hover:rotate-90 transition-transform text-black"
              >
                ✕
              </button>

              <div className="w-20 h-20 bg-[#91FF84] border-4 border-black rounded-3xl mx-auto mb-6 flex items-center justify-center rotate-3 shadow-[6px_6px_0px_0px_#000]">
                <Bell size={40} className="text-black" />
              </div>

              <h2 className="text-4xl font-[1000] tracking-tighter mb-4 text-black uppercase">
                Spotting Soon.
              </h2>
              <p className="text-lg font-bold text-slate-600 mb-8 leading-tight">
                Watch our page to get your{" "}
                <span className="text-[#6366F1] underline decoration-4">
                  spot early
                </span>
                . We're tuning the engine for launch.
              </p>

              <button
                onClick={() => setIsSoonOpen(false)}
                className="w-full py-4 bg-black text-white font-black rounded-2xl text-xl shadow-[6px_6px_0px_0px_#6366F1] hover:translate-y-1 hover:shadow-none transition-all"
              >
                GOT IT!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Products;
