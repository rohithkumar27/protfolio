import FloatingContact from "@/components/floating-contact";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import dynamic from "next/dynamic";

const SpaceRevolvingBackground = dynamic(() => import("@/components/space-revolving-background").then(mod => mod.SpaceRevolvingBackground), { ssr: false });
const RevolvingContentWrapper = dynamic(() => import("@/components/revolving-content-wrapper").then(mod => mod.RevolvingContentWrapper), { ssr: false });

import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
          fontSans.variable
        )}
        style={{
          fontSize: '16px',
          WebkitTextSizeAdjust: '100%',
          textSizeAdjust: '100%'
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <TooltipProvider delayDuration={0}>
            <SpaceRevolvingBackground />
            <RevolvingContentWrapper>
              <div className="max-w-2xl mx-auto px-container-padding relative mobile-z-fix" style={{ zIndex: 100 }}>
                {children}
              </div>
            </RevolvingContentWrapper>
            <FloatingContact />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
