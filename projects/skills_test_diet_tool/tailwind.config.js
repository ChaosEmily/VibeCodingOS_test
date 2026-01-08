/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'diet-water': '#3b82f6',
                'diet-veggie': '#22c55e',
            }
        },
    },
    plugins: [],
}
