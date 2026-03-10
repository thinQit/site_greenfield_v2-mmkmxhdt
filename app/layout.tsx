import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "site_greenfield_v2",
  description: "Built with Codex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
