import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sans = Inter({ variable: "--font-sans", subsets: ["latin"] });
const serif = Source_Serif_4({ variable: "--font-serif", subsets: ["latin"] });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const [repositoryOwner = "seongmoon729", repositoryName = ""] =
  (process.env.GITHUB_REPOSITORY ?? "").split("/");
const siteOrigin = repositoryName.endsWith(".github.io")
  ? `https://${repositoryName}`
  : `https://${repositoryOwner}.github.io`;

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "Seongmoon Jeong — Computer Vision Researcher",
  description: "Academic CV of Seongmoon Jeong, a computer vision researcher working on image compression, machine perception, and RAW-domain vision.",
  icons: { icon: `${basePath}/favicon.png` },
  openGraph: {
    title: "Seongmoon Jeong — Computer Vision Researcher",
    description: "Image Compression · Machine Perception · RAW-domain Vision",
    images: [{ url: `${basePath}/og.png`, width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
