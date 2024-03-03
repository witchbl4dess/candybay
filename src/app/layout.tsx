import { ThemeProvider } from "@/providers/theme-provider";
import { Nunito_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const font = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "candybay",
  description: "fuck sh0pify",
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              {children}
          </ThemeProvider>
        </body>
      </html>
  );
}