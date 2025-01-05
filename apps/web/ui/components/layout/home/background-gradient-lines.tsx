"use client";
import { useTheme } from "next-themes";

export const BackgroundGradientLines = () => {
  const { theme } = useTheme();
  const stopColor = {
    primary: theme === "dark" ? "white" : "black",
    secondary: theme === "dark" ? "#999999" : "#222222",
    third: theme === "dark" ? "#A8A8A8" : "#4A4A4A",
  };

  return (
    <svg
      viewBox="0 0 1452 493"
      fill="none"
      className="w-full absolute left-0 -z-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 491L152.038 462.446L272.825 487.871H468.857L685.681 442.231H977.749L1148.04 406.386H1287.64L1451 372"
        stroke="url(#paint0_linear_196_533)"
        strokeOpacity="0.1"
        strokeWidth="4"
      />
      <path
        d="M1 210L138.229 187.925L259.184 207.581H455.489L672.615 172.296H965.09L1135.62 144.584H1275.41L1439 118"
        stroke="url(#paint1_linear_196_533)"
        strokeOpacity="0.1"
        strokeWidth="4"
      />
      <path
        d="M13 94L150.229 71.9247L271.184 91.581H467.489L684.615 56.2964H977.09L1147.62 28.5843H1287.41L1451 2"
        stroke="url(#paint2_linear_196_533)"
        strokeOpacity="0.1"
        strokeWidth="4"
      />
      <path
        d="M4 362L141.038 333.446L261.825 358.871H457.857L674.681 313.231H966.749L1137.04 277.386H1276.64L1440 243"
        stroke="url(#paint3_linear_196_533)"
        strokeOpacity="0.1"
        strokeWidth="4"
      />
      <defs>
        <linearGradient
          id="paint0_linear_196_533"
          x1="733"
          y1="372"
          x2="733"
          y2="491"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={stopColor.primary} />
          <stop offset="0.695" stopColor="#999999" stopOpacity="0.05" />
          <stop offset="0.725" stopColor="#A8A8A8" stopOpacity="0.05" />
          <stop offset="1" stopColor={stopColor.primary} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_196_533"
          x1="720"
          y1="118"
          x2="720"
          y2="210"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={stopColor.primary} />
          <stop offset="0.695" stopColor="#999999" stopOpacity="0.05" />
          <stop offset="0.725" stopColor="#A8A8A8" stopOpacity="0.05" />
          <stop offset="1" stopColor={stopColor.primary} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_196_533"
          x1="732"
          y1="2"
          x2="732"
          y2="94"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={stopColor.primary} />
          <stop offset="0.695" stopColor="#999999" stopOpacity="0.05" />
          <stop offset="0.725" stopColor="#A8A8A8" stopOpacity="0.05" />
          <stop offset="1" stopColor={stopColor.primary} />
        </linearGradient>
        <linearGradient
          id="paint3_linear_196_533"
          x1="722"
          y1="243"
          x2="722"
          y2="362"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={stopColor.primary} />
          <stop offset="0.695" stopColor="#999999" stopOpacity="0.05" />
          <stop offset="0.725" stopColor="#A8A8A8" stopOpacity="0.05" />
          <stop offset="1" stopColor={stopColor.primary} />
        </linearGradient>
      </defs>
    </svg>
  );
};
