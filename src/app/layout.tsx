import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/_component/Theme-provider";
import { ThemeSwitcher } from "@/app/_component/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmad Sulaeman",
  description: "InHouse Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + "delay-300	"}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
