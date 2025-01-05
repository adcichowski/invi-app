import type { Metadata } from "next";
import "globals.css";
import { Navigation } from "../ui/components/layout/navigation";
import { ThemeProvider } from "next-themes";
import { Chivo } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";

// If loading a variable font, you don't need to specify the font weight
export const metadata: Metadata = {
  title: "InviApp: Invest, Earn, Budget",
  description:
    "Take control of your finances with InviApp. Track investments, monitor earnings, and manage your budget all in one place. Smart insights for smarter financial decisions.",
  keywords:
    "financial tracker, investment management, budget planner, personal finance, earnings tracker, money management, financial goals",
};

const chivo = Chivo({
  weight: ["200", "300", "500", "700", "900"],
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
      <body className="w-full h-full flex flex-col max-w-screen-xl mx-auto bg-transparent px-4 py-2 pt-6 xl:px-0">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <UserProvider>
            <Navigation />
            <main className="grow">{children}</main>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
