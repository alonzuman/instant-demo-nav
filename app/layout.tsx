import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PromptBox } from "./prompt-box";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="h-12 w-full right-0 left-0 bg-pink-50 flex justify-between fixed top-0 px-4 gap-4 items-center">
          <Link href="/">Home</Link>
          <PromptBox />
          <Link href="/profile">Profile</Link>
        </header>
        <main className='mt-12'>{children}</main>
      </body>
    </html>
  );
}
