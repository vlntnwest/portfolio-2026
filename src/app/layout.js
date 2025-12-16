import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Valentin Westermeyer",
  description: "Portfolio 2025 Valentin Westermeyer, développeur à Strasbourg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className} antialiased touch-none overflow-x-hidden scrollbar-hidden`}
      >
        <main className="flex flex-col h-auto">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
