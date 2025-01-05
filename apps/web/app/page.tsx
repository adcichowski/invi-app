import { Chart } from "../ui/components/layout/home/chart";
import { Functionalities } from "../ui/components/layout/home/functionalities";
import { BackgroundGradientLines } from "../ui/components/layout/home/background-gradient-lines";
import { ThemeController } from "../ui/components/theme-controller";
import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";
import { Heading } from "ui/components/heading";
import { Paragraph } from "ui/components/paragraph";
import { Button } from "ui/components/button";

export default async function Home() {
  const session = await getSession();
  console.log(session);
  return (
    <div>
      {JSON.stringify(session, null, 2)}
      <article className="flex mt-20 justify-between flex-wrap xl:gap-x-10 md:gap-x-5 gap-5">
        <div className="flex flex-col gap-7 min-w-min max-w-lg">
          <div className="relative">
            <Heading type="h1">Master Your Money: Budget, Spend, Earn</Heading>
            <svg
              className="w-3/4 h-auto absolute -bottom-6 "
              viewBox="0 0 390 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 32.0841C29.3362 8.82199 69.1791 13.545 99.6674 16.6537C115.071 18.2244 128.621 21.3412 142.918 28.5831C167.798 41.1855 196.451 29.0825 220.74 19.7657C236.835 13.592 252.347 7 269.5 7C276.166 7 291.182 7.88391 297.5 10C345.968 26.2341 342.852 22.01 388 2"
                className="stroke-muted-foreground/30"
                strokeWidth="2.50638"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <Paragraph type="p">
            The platform provides access to the best banking offers and full
            insight into money flow, expenses, income, and investments.
          </Paragraph>
          <Button asChild variant="secondary" className="w-min">
            <Link href="/api/auth/login">Get Started</Link>
          </Button>
        </div>
        <div className="sm:max-w-2xl max-w-xl w-full">
          <Chart />
        </div>
        <Functionalities />
      </article>
      <article className="flex flex-col flex-start justify-center h-[700px] items-center gap-5 text-center">
        <ThemeController>
          <BackgroundGradientLines />
        </ThemeController>

        <Heading type="h2">Take Control of Your Finances</Heading>
        <Paragraph type="p">
          Sign up for InviApp and consume all functionalities.
        </Paragraph>
        <div>
          <Button>Register</Button>
          <Paragraph type="p" className="text-xs mt-1 font-light">
            Not required any credit card.
          </Paragraph>
        </div>
      </article>
    </div>
  );
}
