import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

// Configure Outfit for headings (variable font)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// Configure Inter for body text (variable font)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://petrolabsindia.com"),
  title: {
    default: "PetroLabs India Pvt. Ltd. - Accurate Diagnostics",
    template: "%s | PetroLabs India",
  },
  description:
    "Petrolabs India Private Ltd, in association with Spectro Scientific USA, supplies oil, fuel, and fluid analysis instruments to Indian industry and military.",
  keywords: [
    "Petroleum Testing",
    "Oil Analysis",
    "Fluid Analysis Instruments",
    "Spectro Scientific",
    "Lubrication Training",
    "NABL Accredited Lab",
    "PetroLabs India",
  ],
  authors: [{ name: "PetroLabs India" }],
  creator: "PetroLabs India",
  publisher: "PetroLabs India",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "PetroLabs India Pvt. Ltd.",
    description:
      "Leading supplier of oil, fuel, and fluid analysis instruments to the Indian industry and military. Offering expert testing services and NABL accredited training.",
    url: "https://petrolabsindia.com",
    siteName: "PetroLabs India",
    images: [
      {
        url: "https://res.cloudinary.com/ddl0gpm3n/image/upload/v1785158739/logo-new_hbe9p9.png",
        width: 1200,
        height: 630,
        alt: "PetroLabs India Pvt. Ltd.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PetroLabs India Pvt. Ltd.",
    description:
      "Leading supplier of oil, fuel, and fluid analysis instruments to the Indian industry and military.",
    images: [
      "https://res.cloudinary.com/ddl0gpm3n/image/upload/v1785158739/logo-new_hbe9p9.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
