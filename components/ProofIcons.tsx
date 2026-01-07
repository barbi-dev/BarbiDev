import React from "react";

type IconName = "projects" | "visualizer" | "github" | "testimonials";

type Props = {
  name: IconName;
  size?: number; // px
  className?: string;
};

const common = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function ProofIcon({ name, size = 32, className }: Props) {
  switch (name) {
    case "projects":
      return (
        <svg {...common} width={size} height={size} stroke="#ff4500" className={className}>
          <path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z" />
          <path d="M11 18v4" />
          <path d="M7 15.5l7 -4" />
          <path d="M14 7.5v4" />
          <path d="M14 11.5l4 2.5" />
          <path d="M11 13v-7.5l-4 -2.5l-4 2.5" />
          <path d="M7 8l4 -2.5" />
          <path d="M18 10l4 -2.5" />
        </svg>
      );

    case "visualizer":
      return (
        <svg {...common} width={size} height={size} stroke="#ff3b30" className={className}>
          <path d="M9 12v-4" />
          <path d="M15 12v-2" />
          <path d="M12 12v-1" />
          <path d="M3 4h18" />
          <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
          <path d="M12 16v4" />
          <path d="M9 20h6" />
        </svg>
      );

    case "github":
      return (
        <svg {...common} width={size} height={size} stroke="#ff3b30" className={className}>
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
      );

    case "testimonials":
      return (
        <svg {...common} width={size} height={size} stroke="#ff3b30" className={className}>
          <path d="M3 18l18 -12h-18l9 14l9 -14v10l-18 -10z" />
        </svg>
      );

    default:
      return null;
  }
}
