import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default:
      "Valentin Westermeyer | Développeur Next.js et WordPress à Strasbourg",
    template: "%s | Valentin Westermeyer",
  },
  description:
    "Portfolio de Valentin Westermeyer, développeur web à Strasbourg, spécialisé WordPress et Next.js. Découvrez mes projets.",
  openGraph: {
    title:
      "Valentin Westermeyer | Développeur Next.js et WordPress à Strasbourg",
    description:
      "Portfolio 2025 de Valentin Westermeyer, développeur web à Strasbourg spécialisé en Next.js et React. Création de sites web modernes et performants.",
    url: "https://www.vlntn.fr",
    siteName: "Valentin Westermeyer - Développeur Web",
    images: [
      {
        url: "https://bto1vhg21okdlu4o.public.blob.vercel-storage.com/Banner.png",
        width: 1200,
        height: 630,
        alt: "Valentin Westermeyer - Portfolio web - Développeur Next.js et WordPress à Strasbourg",
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
