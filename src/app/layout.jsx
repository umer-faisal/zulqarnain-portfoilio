import { site } from "@/config/site";
import "@/styles/globals.css";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://zulqarnainsaya.com",
  ),
  title: {
    default: `${site.name} — Shoot. Edit. Create.`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_US",
    siteName: site.name,
    images: [
      {
        url: site.logo.src,
        width: site.logo.width,
        height: site.logo.height,
        alt: site.logo.alt,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.description,
    images: [site.logo.src],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="m-0 bg-brand-deep text-brand-white font-body leading-relaxed antialiased">
        <a
          href="#main-content"
          className="skip-link fixed top-4 left-4 z-[110] px-4 py-3 bg-brand-yellow text-brand-dark font-label text-sm uppercase -translate-y-[200%] focus:translate-y-0 transition-transform duration-200"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
