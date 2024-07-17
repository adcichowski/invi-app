import { Button } from "@repo/ui/src/components/button";
import { Heading } from "@repo/ui/src/components/heading";
import { Paragraph } from "@repo/ui/src/components/paragraph";

export default function Home() {
  return (
    <section className="flex mt-20 justify-between">
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
        <Button variant="secondary" className="w-min">
          Get Started
        </Button>
      </div>
      <div className="w-[700px] bg-red-100"></div>
    </section>
  );
}
