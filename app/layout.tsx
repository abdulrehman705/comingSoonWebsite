import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryClientProviders from "./components/ReractQueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comming Soon",
  description: "This is Task of Comming Soon Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProviders>
        <body className={inter.className}>{children}</body>
      </QueryClientProviders>
    </html>
  );
}
