"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const contactInfo = [
  {
    icon: "✉",
    label: "kamahaclaudejoelle@gmail.com",
    href: "mailto:kamahaclaudejoelle@gmail.com",
  },
  {
    icon: "⟁",
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/joelle-k-01961311b/",
  },
  {
    icon: "</>",
    label: "GitHub Repository",
    href: "https://github.com/Claude-Kamaha",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire this to an email service
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-white mb-4">
              Get in <span className="text-[#8b5cf6]">Touch</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-xs">
              Open for collaborations, architectural consultations, or a
              friendly debate about RxJS operators.
            </p>

            <div className="space-y-4">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-[#111827] hover:border-[#4f7aff]/40 hover:bg-[#111827]/80 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1e2a4a] border border-white/10 flex items-center justify-center text-sm text-slate-300 group-hover:border-[#4f7aff]/40 transition-colors flex-shrink-0">
                    {c.icon}
                  </div>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    {c.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl border border-white/10 bg-[#111827] space-y-5"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 tracking-widest mb-2 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0f1629] border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#4f7aff]/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 tracking-widest mb-2 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#0f1629] border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#4f7aff]/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 tracking-widest mb-2 uppercase">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#0f1629] border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-[#4f7aff]/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#4f7aff] text-white font-bold text-sm hover:bg-[#3b63e8] transition-all hover:shadow-lg hover:shadow-[#4f7aff]/25 active:scale-[0.99]"
              >
                {sent ? "✓ Message Sent!" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
