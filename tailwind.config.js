/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
		'./app.vue',
	],
	theme: {
		extend: {
			colors: {
				'dark-gray': '#363636',
				blue: '#497ef5',
				'blue-light': '#8cafff',
			},
			// fontFamily: {
			// 	serif: ['Lora', 'serif'],
			// 	'sans-serif': ['Lato', 'sans-serif'],
			// 	cursive: ['Feeling Passionate', 'cursive'],
			// },
		},
	},
	plugins: [],
};
