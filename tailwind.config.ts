import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {},
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './*.vue',
  ],
  plugins: [],
}
