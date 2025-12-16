import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "Valentin Westermeyer - Développeur Web basé à Strasbourg",
    template: "%s | Valentin Westermeyer",
  },
  description:
    "Portfolio de Valentin Westermeyer, développeur web à Strasbourg, spécialisé WordPress et Next.js. Découvrez mes projets.",
  openGraph: {
    title: "Valentin Westermeyer | Développeur Next.js à Strasbourg",
    description:
      "Portfolio 2025 de Valentin Westermeyer, développeur web à Strasbourg spécialisé en Next.js et React. Création de sites web modernes et performants.",
    url: "https://valentin-westermeyer.fr",
    siteName: "Valentin Westermeyer - Développeur Web",
    images: [
      {
        url: "https://valentin-westermeyer.fr/og-image.jpg", // Créez une image spécifique pour le partage (1200x630px idéalement)
        width: 1200,
        height: 630,
        alt: "Valentin Westermeyer - Portfolio web",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
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
