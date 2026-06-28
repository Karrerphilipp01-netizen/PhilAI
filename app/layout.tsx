import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PhilAI 1.0",
  description: "Jarvis KI-Agent für dein 3D-Druck-Business"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
