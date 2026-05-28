import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Theme } from "@radix-ui/themes";




export const metadata: Metadata = {
  title: "Claude Joelle | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer specializing in Angular, RxJS, and micro-frontend architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
            				<Theme  appearance="dark">

        <Providers>{children}</Providers>
              				</Theme>

      </body>

    </html>
  );
}
