import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", axes: ["opsz"] });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Fermor: finance you can actually read",
  description: "Understand where your money stands, act on it, and watch it grow. Without the jargon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
