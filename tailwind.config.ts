import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey30: "#F6F7F9",
        grey320: "#EEF0F2",
        grey470: "#BBC3C3",
        grey550: "#6D7274",
        black900: "#212322",
        blue50: "#F7FAFD",
        blue120: "#D7E7F2",
        blue1000: "#0071CE",
        blue1500: "#0055A6",
        cardDataColor: "rgba(255, 255, 255, 0.88)",
      },
      boxShadow: {
        cardShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.08)",
        partnerCardShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        "88px": "88px",
      },
      fontSize: {
        "12px": "12px",
        "22px": "22px",
        "32px": "32px",
      },
      lineHeight: {
        "18px": "18px",
        "30px": "30px",
      },
      letterSpacing: {
        "-0.64px": "-0.64px",
        "-0.24px": "-0.24px",
      },
      padding: {
        "5px": "5px",
        "8px": "8px",
        "18px": "18px",
        "72px": "72px",
        "104px": "104px",
        "216px": "216px",
      },
      height: {
        "35": "140px",
        "18px": "18px",
        "86px": "86px",
        "178px": "178px",
        "240px": "240px",
      },
      minHeight: {
        "178px": "178px",
      },
      width: {
        "68": "270px",
        "70": "282px",
        "108": "405px",
        "112": "468px",
        "90px": "90px",
        "115px": "115px",
        "117px": "117px",
        "125px": "125px",
        "130px": "130px",
        "220px": "220px",
        "328px": "328px",
        "375px": "375px",
        "404px": "404px",
        "464px": "464px",
        "560px": "560px",
        "568px": "568px",
        "592px": "592px",
        "624px": "624px",
        "1216px": "1216px",
      },
      minWidth: {
        "124px": "124px",
        "375px": "375px",
      },
      maxWidth: {
        "130px": "130px",
        "404px": "404px",
        "1440px": "1440px",
      },
      "1216px": "1216px",
      margin: {
        "5px": "5px",
        "14px": "14px",
        "56px": "56px",
        "136px": "136px",
      },
      gap: {
        "30px": "30px",
      },
      screens: {
        "xl-1440": "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
