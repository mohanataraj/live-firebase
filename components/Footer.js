"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = 2026; // Keeping it current!

  return (
    <footer className="bg-white border-t-[6px] border-black pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pb-12">
          {/* Logo & Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-4xl font-[1000] tracking-tighter text-black"
            >
              LIVE<span className="text-[#6366F1]">.</span>
            </Link>
            <p className="text-lg font-bold text-slate-600 max-w-xs leading-tight">
              Smart protection for the way you live now.
            </p>
          </div>

          {/* Social Stickers */}
          <div className="flex flex-wrap gap-4">
            {[
              { label: "TW", color: "#60A5FA" },
              { label: "IG", color: "#EC4899" },
              { label: "LI", color: "#6366F1" },
              { label: "✉️", color: "#FFD600" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-14 h-14 flex items-center justify-center bg-white border-4 border-black rounded-2xl text-xl font-black shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                style={{ "--hover-bg": social.color }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = social.color)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-4 border-black/5 flex flex-col md:flex-row justify-between gap-4">
          <div className="flex gap-6 text-sm font-black uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-[#6366F1]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#6366F1]">
              Terms
            </Link>
          </div>
          <p className="text-sm font-bold text-slate-500">
            © {currentYear} LIVE Insurance, Inc. Built for the future.
          </p>
        </div>
      </div>
    </footer>
  );
}
