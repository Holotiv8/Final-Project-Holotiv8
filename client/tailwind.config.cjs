/** @type {import('tailwindcss').Config} */
module.exports = {
	safelist: [
		{
			pattern: /.*/,
		},
	],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		fontFamily: {
			display: ["Poppins", "sans-serif"],
			Montserrat: ["Montserrat", "sans-serif"],
		},
		extend: {
			animation: { shine: "shine 1s" },
			keyframes: { shine: { "100%": { left: "125%" } } },
			boxShadow: {
				'shadow-inner': '0 35px 60px -15px rgba(0, 0, 0, 0.4)',
			  }
		},
	},
	plugins: [],
};
