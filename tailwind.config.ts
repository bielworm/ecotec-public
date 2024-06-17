import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            500: '#2D3364',
            800: '#273246',
          },
          yellow: {
            600: '#FF9E0D',
          },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
