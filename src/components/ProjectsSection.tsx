"use client";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-32 border-t border-white/5 relative overflow-hidden bg-[#0A0D14]"
    >
      {/* Background wobbly lines (Subtle SVG) */}
      <div className="absolute top-1/3 left-0 w-full h-[500px] pointer-events-none opacity-20 hidden md:block">
        <svg
          viewBox="0 0 1440 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M0,250 C320,150 420,350 720,250 C1020,150 1120,350 1440,250"
            stroke="#4f7aff"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
          <path
            d="M0,350 C320,250 420,450 720,350 C1020,250 1120,450 1440,350"
            stroke="#8b5cf6"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="w-full md:px-12 lg:px-24">
        {/* Top Section: Gymnastics Manager */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#1E293B] text-slate-300 tracking-widest border border-white/10 uppercase">
                Featured Work
              </span>
              <div className="h-px bg-white/10 flex-1 max-w-[100px]" />
            </div>

            <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              <span className="text-white text-6xl lg:text-7xl">
                Gymnastics
              </span>
              <br />
              <span className="text-[#a882ff] text-5xl lg:text-6xl tracking-tight">
                Manager
              </span>
            </h2>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              An enterprise-grade Nx Monorepo housing dual Angular applications.
              Designed for high-performance event tracking and real-time score
              dissemination across complex sporting environments.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {[
                "Nx Monorepo",
                "Angular 17+",
                "RxJS Streams",
                "Angular Signals",
                "Firebase",
              ].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10 bg-[#161b26] text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="px-8 py-3 rounded-xl bg-[#4f7aff] text-white font-bold text-sm hover:bg-[#3b63e8] transition-colors shadow-lg shadow-[#4f7aff]/20"
              >
                View Demo
              </a>
              <a
                href="#"
                className="px-8 py-3 rounded-xl border border-white/20 text-white font-bold text-sm hover:bg-white/5 transition-colors"
              >
                Github
              </a>
            </div>
          </motion.div>

          {/* Right Side: Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[500px]"
          >
            {/* Admin Control Card */}
            <div className="absolute top-0 left-0 w-[85%] sm:w-[75%] rounded-2xl border border-white/10 bg-[#111827] shadow-2xl p-5 z-10 hover:-translate-y-2 transition-transform">
              <div className="w-full aspect-[16/9] rounded-lg bg-gradient-to-br from-[#0a1128] to-[#121c38] overflow-hidden mb-5 relative flex items-center justify-center">
                {/* Mock dashboard UI */}
                <div className="absolute inset-4 border border-[#4f7aff]/20 rounded bg-[#0a1128]/50 flex p-2 gap-2">
                  <div className="w-1/3 flex flex-col gap-2">
                    <div className="h-4 w-full bg-[#4f7aff]/20 rounded" />
                    <div className="h-12 w-full bg-[#4f7aff]/10 rounded" />
                    <div className="h-12 w-full bg-[#4f7aff]/10 rounded" />
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex gap-2">
                      <div className="h-16 flex-1 bg-teal-400/10 rounded border border-teal-400/20" />
                      <div className="h-16 flex-1 bg-[#4f7aff]/10 rounded border border-[#4f7aff]/20" />
                    </div>
                    <div className="h-24 w-full bg-[#8b5cf6]/10 rounded border border-[#8b5cf6]/20 mt-1" />
                  </div>
                </div>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">
                Admin Control
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Centralized management for athletes, routines, and judging
                panels using Angular Signals for state synchronization.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-[#4f7aff] tracking-widest uppercase">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                REAL-TIME DATA FLOW
              </div>
            </div>

            {/* Live Scoreboard Card */}
            <div className="absolute top-[40%] sm:top-[30%] right-0 w-[85%] sm:w-[75%] rounded-2xl border border-white/10 bg-[#111827] shadow-[-10px_10px_30px_rgba(0,0,0,0.5)] p-5 z-20 hover:-translate-y-2 transition-transform">
              <div className="w-full aspect-[16/9] rounded-lg bg-gradient-to-br from-[#1c1c1c] to-[#000] overflow-hidden mb-5 relative flex items-center justify-center border border-white/5">
                <div className="text-4xl font-mono font-black tracking-widest text-[#a882ff] drop-shadow-[0_0_8px_rgba(168,130,255,0.6)]">
                  10:04
                </div>
                <div className="absolute top-2 right-3 text-[8px] font-bold text-red-500 animate-pulse">
                  ● LIVE
                </div>
              </div>
              <h4 className="text-white font-bold text-lg mb-2">
                Live Scoreboard
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Consumer-facing application optimized for performance and rapid
                updates via Firebase Firestore listeners.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-bold text-[#a882ff] tracking-widest uppercase">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                RXJS EVENT STREAM
              </div>
            </div>
          </motion.div>
        </div>

        {/* Roadmap Section */}
        <div className="mb-32 relative z-10">
          <div className="mb-12">
            <h3 className="text-3xl font-black text-white mb-2">The Roadmap</h3>
            <p className="text-slate-400 text-sm">
              Upcoming architectural explorations and data-driven experiments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Reactive Nexus (Large Card) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#4f7aff]/20 bg-gradient-to-br from-[#0d152a] to-[#0A0D14] p-8 md:p-12 min-h-[400px] flex flex-col justify-end relative overflow-hidden group"
            >
              {/* Abstract background shape (mimicking DNA/Node network) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                <div className="w-32 h-64 border-4 border-[#4f7aff] rounded-full blur-sm absolute rotate-12" />
                <div className="w-32 h-64 border-4 border-[#22d3ee] rounded-full blur-sm absolute -rotate-12" />
              </div>

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-[#22d3ee]/20 text-[#22d3ee] text-[10px] font-black uppercase tracking-widest rounded-full mb-4 border border-[#22d3ee]/30">
                  IN DEVELOPMENT
                </span>
                <h4 className="text-3xl font-bold text-white mb-3">
                  Reactive Nexus
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                  A visualizer for RxJS observable streams, turning complex data
                  pipelines into interactive 3D nodes.
                </p>
              </div>
            </motion.div>

            {/* Right: Two vertical cards */}
            <div className="flex flex-col gap-8">
              {/* Flux Engine Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex-1 rounded-3xl border border-white/5 bg-[#111827] p-8 md:p-10 flex flex-col justify-center hover:border-white/10 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-[#22d3ee] mb-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h4 className="text-xl font-bold text-white mb-2">
                  Flux Engine
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A lightweight state management library built on top of native
                  Angular Signals.
                </p>
              </motion.div>

              {/* Vault Sync Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex-1 rounded-3xl border border-white/5 bg-[#111827] p-8 md:p-10 flex flex-col justify-center hover:border-white/10 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-[#a882ff] mb-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <h4 className="text-xl font-bold text-white mb-2">
                  Vault Sync
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Encrypted document storage utilizing NestJS and distributed
                  cloud architectures.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Technical Philosophy bottom area */}
        <div className="bg-[#111827] rounded-3xl p-8 md:p-12 border border-white/5 w-full">
          <h3 className="text-2xl font-black text-white mb-10">
            Technical Philosophy
          </h3>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-lg bg-[#4f7aff]/20 border border-[#4f7aff]/30 flex items-center justify-center mt-1">
                  <svg
                    className="w-5 h-5 text-[#4f7aff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-2">
                    Monorepo Scalability
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Using Nx to maintain shared libraries between Admin and
                    Public facing apps, reducing code duplication by 60%.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-lg bg-[#a882ff]/20 border border-[#a882ff]/30 flex items-center justify-center mt-1">
                  <svg
                    className="w-5 h-5 text-[#a882ff]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-2">
                    Reactive Paradigms
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Transitioning from standard promises to high-frequency RxJS
                    streams for real-time scoring updates.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
              <div className="w-full max-w-sm rounded-[32px] border border-white/5 bg-[#0f1420] p-12 text-center shadow-inner flex flex-col items-center justify-center">
                <div className="text-[#a882ff] font-sans font-black text-6xl md:text-7xl mb-3 tracking-tighter">
                  99.9%
                </div>
                <div className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase">
                  Uptime Performance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
