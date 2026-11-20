import type { Metadata, Viewport } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const [repositoryOwner = "seongmoon729", repositoryName = ""] =
  (process.env.GITHUB_REPOSITORY ?? "").split("/");
const siteOrigin = repositoryName.endsWith(".github.io")
  ? `https://${repositoryName}`
  : `https://${repositoryOwner}.github.io`;

export const viewport: Viewport = { colorScheme: "light" };

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "Seongmoon Jeong",
  description: "Seongmoon Jeong is a Ph.D. candidate in the IRIS Lab at Sungkyunkwan University, studying where adaptation should happen as image pipelines serve machine vision, and agent harnesses that adapt foundation models to specific tasks.",
  icons: { icon: `${basePath}/favicon.png?v=2` },
  openGraph: {
    title: "Seongmoon Jeong",
    description: "Adaptation for Machine Vision · Image Coding · RAW Data · Agent Harnesses",
    images: [{ url: `${basePath}/og.png?v=2`, width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
