import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        sectionTitle: "rgba(0, 0, 0, 0.5)",
        supportingText: "rgba(0, 0, 0, 0.85)",
        border: "rgba(0, 0, 0, 0.1)",
        button: "#FFAB00",
        input: "hsl(var(--input))",
        ring: "#FFAB00",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        buttonShadowDefault:
          "0px 0px 1px 1px #5F00FF, 0px 4px 20px 0px rgba(95, 0, 255, 0.45), 0px 16px 20px 0px rgba(95, 0, 255, 0.20)",
        buttonShadowHoverd:
          "0px 0px 1px 1px #5F00FF, 0px 4px 20px 0px rgba(95, 0, 255, 0.45)",
        buttonShadowPressed: "0px 48px 1px 1px rgba(0, 0, 0, 0.20) inset",
        containerShadow: "0px 0px 100px 0px rgba(207, 185, 255, 0.50)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config