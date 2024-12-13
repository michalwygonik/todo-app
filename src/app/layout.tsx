import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

export const metadata: Metadata = {
  title: "Todo - app",
  icons: { icon: { url: "/logo.png", href: "/logo.png" } },
};

const roboto = Roboto({
  variable: "--roboto-font",
  weight: ["400"],
  subsets: ["latin", "latin-ext"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} bg-slate-50`}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
