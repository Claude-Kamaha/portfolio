"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

const experiences = [
  {
    period: "APR 2021 — PRESENT",
    role: "Frontend Developer",
    company: "EJARA",
    side: "left",
    color: "#a882ff",
    icon: BriefcaseIcon,
    bullets: [
      "Leading a cross-functional squad to deliver high-performance financial dashboards and retail investor platforms.",
      "Architected a modular Angular component library used across multiple regional mobile and web applications.",
      "Optimized state management using NgRx and complex RxJS stream pipelining, reducing data latency by 40%.",
    ],
  },
  {
    period: "NOV 2019 — MAR 2021",
    role: "Software Engineer",
    company: "Adipnter",
    side: "right",
    color: "#a882ff",
    icon: CodeBracketIcon,
    bullets: [
      "Engineered responsive web applications for fintech clients using modern JavaScript frameworks and Tailwind CSS.",
      "Collaborated with UI/UX designers to translate Figma prototypes into pixel-perfect, accessible codebases.",
    ],
  },
  {
    period: "JUN 2019 — OCT 2019",
    role: "Software Intern",
    company: "Appstech",
    side: "left",
    color: "#38bdf8",
    icon: AcademicCapIcon,
    bullets: [
      "Assisted in the development of enterprise ERP solutions, focusing on front-end data visualization modules.",
    ],
  },
  {
    period: "FEB 2019 — MAY 2019",
    role: "Frontend Intern",
    company: "Cible Etude et Conseil",
    side: "right",
    color: "#94a3b8",
    icon: ClockIcon,
    bullets: [
      "Maintained and updated legacy corporate websites, ensuring cross-browser compatibility and responsiveness.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 mx-auto px-6">
      {/* Top Experience Profile Area (from Image 8) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        {/* Left Side: Profile Text */}
        <div className="flex flex-col">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl lg:text-8xl font-black leading-tight mb-6"
          >
            <span className="text-white">Claude</span>
            <br />
            <span className="text-[#8ba5ff]">Joelle</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg md:text-xl max-w-md leading-relaxed mb-8"
          >
            Frontend Architect &amp; Data Stream Weaver. Specialist in building
            high-integrity reactive systems with Angular and RxJS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {["Angular Expert", "RxJS Master", "Technical Lead"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-xs font-semibold border border-white/10 bg-white/5 text-slate-300 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Portrait Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative w-full max-w-[500px] mx-auto lg:ml-auto aspect-square"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#111827] to-[#1e293b] shadow-2xl overflow-hidden border border-white/10">
            <Image
              src="/joe.png"
              alt="Claude Joelle Portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Timeline heading */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-white tracking-tight mb-4">
          Professional Trajectory
        </h3>
        <div className="w-16 h-1 bg-[#a882ff] mx-auto rounded-full" />
      </div>

      {/* Timeline */}
      <div className="relative mb-32">
        <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex items-center gap-8 ${exp.side === "right" ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 lg:max-w-[calc(50%-2.5rem)]">
                <div className="p-8 rounded-2xl border border-white/5 bg-[#111827] shadow-xl hover:border-white/10 transition-all relative group">
                  <div className="text-xs font-bold text-slate-500 tracking-widest mb-3 uppercase">
                    {exp.period}
                  </div>
                  <div className="text-xl font-bold text-white mb-1">
                    {exp.role}
                  </div>
                  <div
                    className="text-sm font-bold mb-6 uppercase"
                    style={{ color: exp.color }}
                  >
                    {exp.company}
                  </div>
                  <ul className="space-y-3">
                    {exp.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed"
                      >
                        {/* Enhanced checkmark icon matches Image 8 */}
                        <div
                          className="mt-1 flex-shrink-0 w-4 h-4 flex items-center justify-center rounded-full"
                          style={{ backgroundColor: exp.color }}
                        >
                          <svg
                            className="w-2.5 h-2.5 text-[#111827]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div
                className="hidden lg:flex w-14 h-14 rounded-2xl items-center justify-center text-white shadow-xl relative z-10"
                style={{ background: exp.color }}
              >
                <exp.icon className="w-6 h-6" />
              </div>

              <div className="hidden lg:block flex-1 lg:max-w-[calc(50%-2.5rem)]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Cards row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-[#4f7aff]/30 bg-[#0f1629] flex flex-col justify-center shadow-xl"
        >
          <h4 className="text-lg font-bold text-[#8ba5ff] mb-4">
            Technical Philosophy
          </h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            I believe code should be as elegant as the systems it serves. My
            approach centers on reactive programming patterns, ensuring that
            complex data streams remain observable, predictable, and performant.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-2xl bg-[#7ba3ff] text-[#0f1423] flex flex-col justify-center shadow-xl"
        >
          <svg
            className="w-8 h-8 mb-4 text-[#0f1423] opacity-80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <div className="text-3xl font-black mb-2">12+ Projects</div>
          <div className="text-sm font-semibold opacity-80">
            Delivered across Fintech &amp; SaaS
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-2xl bg-[#612cce] text-white flex flex-col justify-center shadow-xl"
        >
          <svg
            className="w-8 h-8 mb-4 text-white opacity-80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <div className="text-3xl font-black mb-2">Squad Lead</div>
          <div className="text-sm font-semibold opacity-80">
            Mentoring &amp; team orchestration
          </div>
        </motion.div>
      </div>
    </section>
  );
}
