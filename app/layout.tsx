import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSE Fest 2026 — Metropolitan University",
  description:
    "CSE Fest 2026 at Metropolitan University, Sylhet — a four-day technology, programming, hackathon, e-sports, sports and cultural festival from 3–6 December 2026.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
