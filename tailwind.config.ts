import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "900px": " 900px",
        "800px": "800px",
        "1300px": "1300px",
        "650px": "650px",
        "500px": "500px",
        "600px": "600px",
        "700px" : "700px",
        "400px": "400px",
        
      }
    },
  },
  plugins: [],
};
export default config;
