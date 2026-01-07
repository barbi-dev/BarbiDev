import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'

test('renders hero CTA in either language', async () => {
    render(<Home />)
    expect(await screen.findByText(/Message on WhatsApp|Escríbeme por WhatsApp/i)).toBeInTheDocument()
})

test('renders Projects section title', async () => {
    render(<Home />)
    expect(await screen.findByText(/Featured Projects|Proyectos Destacados/i)).toBeInTheDocument()
})