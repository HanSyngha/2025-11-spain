/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#2b8cee",
                "background-light": "#f6f7f8",
                "background-dark": "#101922",
                "text-light": "#111418",
                "text-dark": "#f1f5f9",
                "subtext-light": "#617589",
                "subtext-dark": "#94a3b8",
                "card-light": "#ffffff",
                "card-dark": "#1e293b",
                "accent": "#f97316"
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
    plugins: [],
}
