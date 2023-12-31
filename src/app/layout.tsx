import Providers from "@/lib/Providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next_AI_Pro",
  description: "Next Level AI Solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className="max-w-screen-2xl mx-auto relative">{children}</body>
      </html>
    </Providers>
  );
}
