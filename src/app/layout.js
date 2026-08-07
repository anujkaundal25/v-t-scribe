import { Cinzel, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/component/ui/Header";
import Footer from "@/component/ui/Footer";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "V T Scribe - Precision Medical Transcription Services",
  description:
    "99.9% accurate AAMT-compliant medical transcription services across Canada and the USA.",
  icons: {
    icon: "/fav.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${poppins.variable} h-full antialiased scroll-smooth`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}