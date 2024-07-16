import type { Metadata } from "next";
import "@repo/ui/globals.css";
import { Navigation } from "../components/layout/navigation";
import { ThemeProvider } from "next-themes";
export const metadata: Metadata = {
  title: "InviApp: Invest, Earn, Budget",
  description:
    "Take control of your finances with InviApp. Track investments, monitor earnings, and manage your budget all in one place. Smart insights for smarter financial decisions.",
  keywords:
    "financial tracker, investment management, budget planner, personal finance, earnings tracker, money management, financial goals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-background w-full h-full light dark"
      suppressHydrationWarning
    >
      <body className="w-full h-full px-5">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
