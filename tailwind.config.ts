import type { Config } from 'tailwindcss'
const config: Config = {
    content: [ './pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}' ],
    theme: { extend: { colors: { accent: '#f59e0b', techblue: '#2563eb', techviolet: '#7c3aed' } } },
    plugins: []
}
export default config