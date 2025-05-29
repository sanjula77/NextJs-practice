// This is the root layout for your Next.js app. It wraps all pages and must include <html> and <body> tags.
import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
