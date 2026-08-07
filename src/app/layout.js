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
  title: "MT Scribe - Precision Medical Transcription Services",
  description: "99.9% accurate AAMT-compliant medical transcription services across Canada and the USA.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}