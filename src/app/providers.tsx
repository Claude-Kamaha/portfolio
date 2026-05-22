"use client";

// Simple app provider — no Chakra UI needed.
// Uses Radix UI primitives + Tailwind for all styling.
export function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
