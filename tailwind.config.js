/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["var(--font-poppins-mono)"],
            },
            MediaQueryList: {
                ss: ["@media screen(width: "]
            }
        },
    },
    plugins: [],
};
