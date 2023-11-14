/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			keyframes: {
				animatedgradient: {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
			},
			backgroundSize: {
				"300%": "300%",
			},
			animation: {
				gradient: "animatedgradient 6s ease infinite alternate",
			},
			colors: {
				"hippie-blue": {
					50: "#f1f8fa",
					100: "#dcecf1",
					200: "#bddbe4",
					300: "#90c1d0",
					400: "#64a3b9",
					500: "#40829a",
					600: "#386b82",
					700: "#32586c",
					800: "#304b5a",
					900: "#2c404d",
					950: "#192933",
				},
			},
		},
	},
};
