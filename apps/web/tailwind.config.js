/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        './styles/**/*.css',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                amber: {
                    DEFAULT: "#FFBF00",
                    dark: "#FF9900",
                    light: "#FFD966",
                },
                aluminum: {
                    DEFAULT: "#E5E5E5",
                    dark: "#999999",
                    light: "#F5F5F5",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "#FFBF00",
                    foreground: "#000000",
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
                    DEFAULT: "#FFBF00",
                    foreground: "#000000",
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
            fontFamily: {
                cinzel: ['"Cinzel Decorative"', 'serif'],
                quattrocento: ['"Quattrocento Sans"', 'sans-serif'],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
                xl: "calc(var(--radius) + 4px)",
                xs: "calc(var(--radius) - 6px)",
            },
            boxShadow: {
                xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                glow: "0 0 60px rgba(255,191,0,0.3), 0 0 120px rgba(255,191,0,0.1)",
                "glow-lg": "0 0 80px rgba(255,191,0,0.5), 0 0 160px rgba(255,191,0,0.2)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                "meteor-effect": {
                    "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
                    "70%": { opacity: 1 },
                    "100%": {
                        transform: "rotate(215deg) translateX(-500px)",
                        opacity: 0,
                    },
                },
                "ticker": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "pulse-glow": {
                    "0%, 100%": { boxShadow: "0 0 20px rgba(255,191,0,0.3)" },
                    "50%": { boxShadow: "0 0 40px rgba(255,191,0,0.6)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "meteor-effect": "meteor-effect 5s linear infinite",
                "ticker": "ticker 30s linear infinite",
                "pulse-glow": "pulse-glow 3s ease-in-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
