"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-white font-semibold text-sm">
           Claude Kamaha Architect
        </span>
        <p className="text-slate-500 text-xs text-center">
          © 2026 powered by Claude Kamaha.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/Claude-Kamaha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 text-xs hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joelle-k-01961311b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 text-xs hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kamahaclaudejoelle@gmail.com"
            className="text-slate-500 text-xs hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
