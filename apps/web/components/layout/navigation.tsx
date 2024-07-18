import { Button } from "@repo/ui/src/components/button";
import Link from "next/link";
import { ThemeChanger } from "./theme-changer";
import { Logo } from "./logo";
import { Heading } from "lucide-react";
import { ThemeController } from "../theme-controller";
const navLinks = ["home", "product", "pricing"];
export const Navigation = () => {
  return (
    <header className="h-32 w-full flex items-center">
      <nav
        className="grow flex items-center justify-center "
        aria-labelledby="main-menu"
      >
        <Heading type="h2" className="sr-only" id="main-menu">
          Main Menu
        </Heading>
        <div className="md:w-[250px]">
          <Logo />
        </div>

        <ul className="flex mx-auto">
          {navLinks.map((link) => (
            <li key={link}>
              <Button
                asChild
                variant="outline"
                className="capitalize hover:underline hover:text-foreground"
              >
                <Link href={`/${link}`}>{link}</Link>
              </Button>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-3">
          <Button>Log In</Button>
          <Button variant="secondary">Register</Button>
        </div>
        <div className="ml-3 flex items-center justify-center h-full w-6">
          <ThemeController>
            <ThemeChanger />
          </ThemeController>
        </div>
      </nav>
    </header>
  );
};
