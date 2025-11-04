import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { trTR } from "@clerk/localizations";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // title: "Fuarlarım",
  title: {
    template: "%s | Fuarlarım",
    default: "Fuarlarım",
  },
  description: "Dünyadaki fuarlardan haberdar olun",
  keywords: "fuar, çin, vize, danışmanlık, gezi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={trTR}>
      <html lang="en">
        <body
          className={`${inter.className} antialiased`}
          suppressHydrationWarning
        >
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
