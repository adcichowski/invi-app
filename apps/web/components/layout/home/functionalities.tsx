import { Heading } from "@repo/ui/src/components/heading";
import { BarChartBigIcon, ReceiptIcon, WalletIcon } from "lucide-react";
import React from "react";

const listFunctionality = [
  {
    title: "Budget",
    description:
      "Create and manage your monthly budget to stay on top of your spending.",
    Icon: WalletIcon,
  },
  {
    title: "Expense Tracking",
    description:
      "Easily track your expenses and categorize them to understand your spending habits.",
    Icon: ReceiptIcon,
  },
  {
    title: "Earnings Tracking",
    description:
      "Monitor your income sources and track your earnings to better understand your financial situation.",
    Icon: BarChartBigIcon,
  },
];
export const Functionalities = () => {
  return (
    <>
      <Heading type="h2" className="sr-only" id="functionality-list">
        Main Menu
      </Heading>
      <dl className="flex flex-wrap gap-x-20 gap-y-5 my-20 mx-auto justify-center md:justify-normal">
        {listFunctionality.map(({ title, Icon, description }) => (
          <div key={title} className="flex flex-col max-w-[300px]">
            <Icon className="h-6 w-min" />
            <dt className="font-semibold text-primary-foreground text-lg">
              {title}
            </dt>
            <dd className="text-muted-foreground text-sm">{description}</dd>
          </div>
        ))}
      </dl>
    </>
  );
};
