"use client";
import { motion } from "framer-motion";

const codeSnippet = `@Component({
  selector: 'architect-root',
  template: '<kinetic-flow />'
})

export class Portfolio {
  experience$ = of(4.5).pipe(
    map(years => \`Senior\`)
  );
}`;

const coreTech = ["Angular", "RxJS", "TypeScript", "Micro Frontends", "Nx"];

const stats = [
  { value: "4+", label: "YEARS EXPERIENCE" },
  { value: "25+", label: "PROJECTS SHIPPED" },
  { value: "100%", label: "ANGULAR FOCUS" },
  { value: "∞", label: "CONTINUOUS FLUX" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between pt-24 pb-0"
    >
      {/* Main Hero */}
      <div className="w-full mx-auto px-6 flex-1 flex flex-col justify-center py-16">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex flex-col w-full ">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4f7aff]/30 bg-[#4f7aff]/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-slate-300 uppercase">
                Available for Architecture Consulting
              </span>
            </motion.div>

            {/* Name + Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-7xl font-black leading-[1.05] mb-6!"
            >
              Claude Joelle
              <br />
              <span className="text-[#4f7aff]">Senior Frontend</span>
              <br />
              Engineer
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-slate-400 text-lg mb-8! "
            >
              An <strong className="text-white">Angular Specialist</strong>{" "}
              crafting high-performance, reactive systems. With 4+ years of
              expertise in building scalable{" "}
              <strong className="text-white">micro frontends</strong> and
              architecting complex data streams using{" "}
              <strong className="text-white">RxJS</strong>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10!"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6! py-3! rounded-full bg-[#4f7aff] text-white font-semibold hover:bg-[#3b63e8] transition-all hover:gap-3"
              >
                View Work
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6! py-3! rounded-full border border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all"
              >
                Get in touch
              </a>
            </motion.div>

            {/* Core Tech */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="text-slate-500 text-sm">Core Tech:</span>
              {coreTech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    i === 0
                      ? "border-[#4f7aff] text-[#4f7aff] bg-[#4f7aff]/10"
                      : "border-white/15 text-slate-300 hover:border-[#4f7aff]/50 transition-colors"
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right — Code card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 80 }}
            className="hidden lg:block w-[380px] rounded-xl border border-white/10 bg-[#111827]/90 backdrop-blur overflow-hidden shadow-2xl shadow-[#4f7aff]/10"
          >
            {/* Titlebar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0f1629]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <pre className="p-5 text-xs leading-7 text-slate-300 font-mono overflow-auto">
              <code>{codeSnippet}</code>
            </pre>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="border-t border-white/5 bg-[#0f1629]/60 backdrop-blur"
      >
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black text-white mb-1">
                {s.value}
              </div>
              <div className="text-xs font-semibold tracking-widest text-slate-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
