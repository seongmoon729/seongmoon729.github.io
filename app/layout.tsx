import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sans = Inter({ variable: "--font-sans", subsets: ["latin"] });
const serif = Source_Serif_4({ variable: "--font-serif", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seongmoon Jeong — Computer Vision Researcher",
  description: "Academic CV of Seongmoon Jeong, a computer vision researcher working on image compression, machine perception, and RAW-domain vision.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Seongmoon Jeong — Computer Vision Researcher",
    description: "Image Compression · Machine Perception · RAW-domain Vision",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
