"use client";
import { motion } from "framer-motion";

const tierOne = {
  title: "Frontend Core",
  icon: "◈",
  tier: "TIER 01",
  tags: ["Angular", "RxJS", "TypeScript", "SCSS"],
};
const tierTwo = {
  title: "Libraries",
  icon: "⧉",
  tier: "TIER 02",
  tags: ["React", "React Query", "Tailwind CSS", "Redux"],
};
const tools = {
  title: "Tools & Process",
  icon: "🛠",
  tags: ["Git", "Agile", "Clickup", "CI/CD"],
  desc: "Managing flow with systemic precision.",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black leading-tight mb-4">
              Technical
              <br />
              <span className="text-[#4f7aff]">Ecosystem</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-[240px]">
              Architecting reactive interfaces with precision and intent. My
              stack is a blend of structural integrity and fluid performance.
            </p>

            {/* Profile mini-card */}
            <div className="p-4 rounded-xl border border-white/10 bg-[#111827] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4f7aff] to-[#8b5cf6] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                CJ
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Claude Joelle
                </div>
                <div className="text-xs text-[#4f7aff]">Software Engineer</div>
                <div className="text-xs text-slate-500 mt-1">
                  Angular · RxJS · TypeScript
                </div>
              </div>
            </div>
          </motion.div>

          {/* Middle — Tier 01 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl border border-white/10 bg-[#111827] h-fit"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl">{tierOne.icon}</span>
              <span className="text-xs font-semibold tracking-widest text-slate-500">
                {tierOne.tier}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-5">
              {tierOne.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tierOne.tags.map((t, i) => (
                <span
                  key={t}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                    i === 1
                      ? "bg-[#4f7aff] text-white"
                      : "border border-white/15 text-slate-300"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Tier 02 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl border border-white/10 bg-[#111827]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{tierTwo.icon}</span>
                <span className="text-xs font-semibold tracking-widest text-slate-500">
                  {tierTwo.tier}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-5">
                {tierTwo.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tierTwo.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full text-sm font-medium border border-white/15 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="p-6 rounded-xl border border-white/10 bg-[#111827]">
              <div className="text-2xl mb-3">{tools.icon}</div>
              <h3 className="text-lg font-bold text-white mb-1">
                {tools.title}
              </h3>
              <p className="text-xs text-slate-500 mb-4">{tools.desc}</p>
              <div className="flex flex-wrap gap-2">
                {tools.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border border-white/15 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
