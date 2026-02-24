"use client";
import { useState } from "react";
import { addUser } from "../utils/user-email";
import { motion, AnimatePresence } from "framer-motion";

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await addUser({ email });
      setSuccess(true);
      setEmail("");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="relative group">
        <input
          required
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-2xl border-4 border-black bg-slate-50 px-6 py-5 text-lg font-bold placeholder:text-slate-400 focus:bg-white focus:outline-none transition-colors"
        />
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 text-sm font-bold text-green-600 flex items-center gap-2"
          >
            <span>Congrats.</span> You're on the list!
          </motion.div>
        )}
      </div>

      <button
        disabled={isLoading}
        type="submit"
        className="w-full bg-[#FFD600] border-4 border-black rounded-2xl py-5 text-xl font-black uppercase tracking-tight shadow-[6px_6px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all disabled:opacity-50"
      >
        {isLoading ? "Joining..." : "Get early access"}
      </button>
    </form>
  );
}
