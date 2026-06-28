import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "PhilAI Browser",
  description: "Jarvis KI-Agent für dein 3D-Druck-Business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
