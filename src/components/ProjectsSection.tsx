"use client";
import { motion } from "framer-motion";

const projects = [
  {
    featured: true,
    label: "FEATURED WORK",
    title: "Gymnastics Manager",
    titleAccent: "Manager",
    description:
      "An enterprise-grade Nx Monorepo housing dual Angular applications. Designed for high-performance event tracking and real-time score dissemination across complex sporting environments.",
    tags: [
      "Nx Monorepo",
      "Angular 17+",
      "RxJS Streams",
      "Angular Signals",
      "Firebase",
    ],
    links: {
      demo: "https://gymnastics-manager-admin.web.app",
      github: "https://github.com/Claude-Kamaha",
    },
    subCards: [
      {
        title: "Admin Control",
        desc: "Centralized management for athletes, routines, and judging panels using Angular Signals for state synchronization.",
        badge: "REAL-TIME DATA FLOW",
      },
      {
        title: "Live Scoreboard",
        desc: "Consumer-facing application optimized for performance and rapid updates via Firebase Firestore listeners.",
        badge: "RXJS EVENT STREAM",
      },
    ],
  },
];

const roadmap = [
  {
    title: "Reactive Nexus",
    badge: "IN DEVELOPMENT",
    desc: "A visualizer for RxJS observable streams, turning complex data pipelines into interactive 3D nodes.",
  },
  {
    title: "Flux Engine",
    desc: "A lightweight state management library built on top of native Angular Signals.",
  },
  {
    title: "Vault Sync",
    desc: "Encrypted document storage utilizing NestJS and distributed cloud architectures.",
  },
];

const philosophy = [
  {
    icon: "◈",
    title: "Monorepo Scalability",
    desc: "Using Nx to maintain shared libraries between Admin and Public facing apps, reducing code duplication by 60%.",
  },
  {
    icon: "⚡",
    title: "Reactive Paradigms",
    desc: "Transitioning from standard promises to high-frequency RxJS streams for real-time scoring updates.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 border-t border-white/5">
      <div className="w-full mx-auto px-6">
        {projects.map((project) => (
          <div key={project.title} className="mb-20">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold border border-white/20 text-slate-400 tracking-widest">
                {project.label}
              </span>
            </motion.div>

            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-start">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl lg:text-6xl font-black leading-tight mb-4">
                  {project.title.split(" ")[0]}
                  <br />
                  <span className="text-[#4f7aff]">{project.titleAccent}</span>
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium border border-white/15 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-[#4f7aff] text-white font-semibold text-sm hover:bg-[#3b63e8] transition-colors"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-white/40 transition-colors"
                  >
                    Github
                  </a>
                </div>
              </motion.div>

              {/* Right — sub-cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {project.subCards.map((card, i) => (
                  <div
                    key={card.title}
                    className={`p-5 rounded-xl border border-white/10 bg-[#111827] flex flex-col gap-3 ${
                      i === 1 ? "sm:mt-8" : ""
                    }`}
                  >
                    <div className="w-full aspect-video rounded-lg bg-gradient-to-br from-[#0f1629] to-[#1e2a4a] flex items-center justify-center text-3xl opacity-60">
                      {i === 0 ? "📊" : "🏅"}
                    </div>
                    <h4 className="text-white font-bold text-sm">
                      {card.title}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {card.desc}
                    </p>
                    <span className="text-xs font-semibold text-[#22d3ee] tracking-widest">
                      ▷ {card.badge}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        ))}

        {/* Roadmap */}
        <div className="border-t border-white/5 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-3xl font-black text-white mb-2">The Roadmap</h3>
            <p className="text-slate-400 text-sm">
              Upcoming architectural explorations and data-driven experiments.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left — featured roadmap */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="row-span-2 relative rounded-2xl border border-white/10 bg-[#111827] overflow-hidden p-8 flex flex-col justify-end min-h-[300px]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111827]/90" />
              <div className="relative">
                <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold bg-[#22d3ee]/20 text-[#22d3ee] border border-[#22d3ee]/30">
                  {roadmap[0].badge}
                </span>
                <h4 className="text-2xl font-black text-white mb-2">
                  {roadmap[0].title}
                </h4>
                <p className="text-slate-400 text-sm">{roadmap[0].desc}</p>
              </div>
            </motion.div>

            {roadmap.slice(1).map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-[#111827]"
              >
                <div className="text-2xl mb-3">{i === 0 ? "⚡" : "🔒"}</div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Philosophy */}
        <div className="mt-16 border-t border-white/5 pt-16">
          <h3 className="text-2xl font-black text-white mb-8">
            Technical Philosophy
          </h3>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-5">
              {philosophy.map((p) => (
                <div key={p.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4f7aff]/20 border border-[#4f7aff]/30 flex items-center justify-center text-lg flex-shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">
                      {p.title}
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed">
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-right">
              <div className="text-6xl font-black text-white">99.9%</div>
              <div className="text-xs font-semibold tracking-widest text-slate-500 mt-1">
                UPTIME PERFORMANCE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
