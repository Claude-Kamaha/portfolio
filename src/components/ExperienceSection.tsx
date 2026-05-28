"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "APR 2021 — PRESENT",
    role: "Frontend Developer",
    company: "EJARA",
    side: "left",
    color: "#4f7aff",
    bullets: [
      "Led a cross-functional squad delivering high-performance financial dashboards and retail investor platforms.",
      "Architected a modular Angular component library used across multiple regional mobile and web applications.",
      "Optimized state management using NgRx and complex RxJS stream pipelining, reducing data latency by 40%.",
    ],
  },
  {
    period: "NOV 2019 — MAR 2021",
    role: "Software Engineer",
    company: "Adipster",
    side: "right",
    color: "#8b5cf6",
    bullets: [
      "Engineered responsive web applications for fintech clients using modern JavaScript frameworks and Tailwind CSS.",
      "Collaborated with UI/UX designers to translate Figma prototypes into pixel-perfect, accessible codebases.",
    ],
  },
  {
    period: "APR 2019 — NOV 2019",
    role: "Software Intern",
    company: "Appstech",
    side: "left",
    color: "#22d3ee",
    bullets: [
      "Assisted in the development of enterprise ERP solutions, focusing on front-end data visualization modules.",
    ],
  },
  {
    period: "MAY 2018 — DEC 2018",
    role: "Frontend Intern",
    company: "Cible Etude et Conseil",
    side: "right",
    color: "#f472b6",
    bullets: [
      "Built and deployed a library management system using PHP and MySQL.",
      "Maintained and updated legacy corporate websites, ensuring cross-browser compatibility and responsiveness.",
    ],
  },
];

const roleIcons: Record<string, string> = {
  EJARA: "💼",
  Adipster: "</>",
  Appstech: "🎓",
  "Cible Etude et Conseil": "🔄",
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="!py-24">
      <div className="w-full mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl lg:text-7xl font-black leading-tight mb-4"
            >
              Claude Joelle
              <br />
              {/* <span className="text-[#4f7aff]">Joelle</span> */}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-base max-w-xs leading-relaxed mb-6"
            >
              Frontend Architect &amp; Data Stream Weaver. Specialist in
              building high-integrity reactive systems with Angular and RxJS.
            </motion.p>
            <div className="flex flex-wrap gap-2">
              {["Angular Expert", "RxJS Master", "Technical Lead"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="!px-3 !py-1.5 rounded-full text-xs font-semibold border border-white/15 text-slate-300"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Stats cards */}
          <div className="flex gap-4">
            <div className="!px-6 !py-5 rounded-xl border border-[#4f7aff]/30 bg-[#4f7aff]/10 text-center">
              <div className="text-2xl font-black text-white mb-1">12+</div>
              <div className="text-xs text-slate-400 max-w-[80px]">
                Projects Delivered across Fintech &amp; SaaS
              </div>
            </div>
            <div className="px-6 py-5 rounded-xl border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-center">
              <div className="text-2xl font-black text-white mb-1">👥</div>
              <div className="text-xs text-slate-400 max-w-[80px]">
                Squad Lead Mentoring &amp; team orchestration
              </div>
            </div>
          </div>
        </div>

        {/* Timeline heading */}
        <div className="text-center !mb-12 ">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Professional Trajectory
          </h3>
          <div className="w-12 h-0.5 bg-[#4f7aff] mx-auto mt-2 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: exp.side === "left" ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 80 }}
                className={`flex items-center gap-6 ${exp.side === "right" ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Card */}
                <div className="flex-1 lg:max-w-[calc(50%-2rem)]">
                  <div className="p-6 rounded-xl border border-white/10 bg-[#111827] hover:border-white/20 transition-all">
                    <div className="text-xs font-semibold text-slate-500 tracking-widest mb-2">
                      {exp.period}
                    </div>
                    <div className="text-lg font-bold text-white mb-1">
                      {exp.role}
                    </div>
                    <div
                      className="text-sm font-semibold mb-4"
                      style={{ color: exp.color }}
                    >
                      {exp.company}
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: exp.color }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center icon */}
                <div
                  className="hidden lg:flex w-12 h-12 rounded-xl items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg"
                  style={{ background: exp.color }}
                >
                  {i + 1}
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block flex-1 lg:max-w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-2xl border border-white/10 bg-[#111827]"
        >
          <h4 className="text-lg font-bold text-[#4f7aff] mb-3">
            Technical Philosophy
          </h4>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
            I believe code should be as elegant as the systems it serves. My
            approach centres on reactive programming patterns, ensuring that
            complex data streams remain observable, predictable, and performant.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
