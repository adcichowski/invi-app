import type { Metadata } from "next";
import "@repo/ui/globals.css";
import { Navigation } from "../components/layout/navigation";
import { ThemeProvider } from "next-themes";
import { Chivo, Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const metadata: Metadata = {
  title: "InviApp: Invest, Earn, Budget",
  description:
    "Take control of your finances with InviApp. Track investments, monitor earnings, and manage your budget all in one place. Smart insights for smarter financial decisions.",
  keywords:
    "financial tracker, investment management, budget planner, personal finance, earnings tracker, money management, financial goals",
};

const chivo = Chivo({
  weight: ["500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`bg-background w-full h-full light dark ${chivo.className}`}
      suppressHydrationWarning
    >
      <body className="w-full h-full flex flex-col max-w-screen-xl mx-auto bg-transparent">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="grow">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
