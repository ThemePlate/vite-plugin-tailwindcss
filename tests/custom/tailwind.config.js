/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	theme: {
		extend: {
			backgroundImage: {
				'hero-pattern': "url('/img/hero-pattern.svg')",
				'fancy-button': 'linear-gradient(90deg,#a62112 -1.9%,#cb5b32 10.74%,#eee383 41.51%,#eee383 58.54%,#cb5b32 88.76%,#a62112 102.5%)',
			},
			colors: {
				custom: '#2e7d32',
				brand: {
					DEFAULT: '#d32f2f',
					accent: '#0170b8',
				}
			},
			fontFamily: {
				'lexend-deca': ['"Lexend Deca"', 'sans-serif']
			},
			fontSize: {
				banner: '6em',
				'3xl': '2rem',
			},
			spacing: {
				minimum: '1rem',
				default: '2rem',
				double: '4rem',
			}
		},
	},
	plugins: [],
}
