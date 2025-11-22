import { Poppins } from "next/font/google";
import "./globals.css";
import UIChrome from "@/components/UIChrome";
import CarouselProvider from "@/contexts/CarouselContext";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Valentin Westermeyer",
  description: "Portfolio 2025 Valentin Westermeyer, développeur à Strasbourg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.className} antialiased touch-none overflow-hidden`}
      >
        <CarouselProvider>
          <UIChrome />
          {children}
        </CarouselProvider>
      </body>
    </html>
  );
}
