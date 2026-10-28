import { site } from "@/config/site";
import "@/styles/globals.css";

export const metadata = {
  title: {
    default: `${site.name} — Shoot. Edit. Create.`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_US",
    siteName: site.name,
  },
  twitter: { card: "summary", title: site.name, description: site.description },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
