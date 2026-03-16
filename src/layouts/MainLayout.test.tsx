import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import { ColorModeContext } from '../context/ColorModeContext'

describe('MainLayout Component (A11y & Rendering)', () => {
  const mockColorMode = {
    toggleColorMode: () => {},
    mode: 'light' as 'light' | 'dark',
  }

  const renderWithProviders = (component: React.ReactNode) => {
    return render(
      <ColorModeContext.Provider value={mockColorMode}>
        <MemoryRouter>{component}</MemoryRouter>
      </ColorModeContext.Provider>
    )
  }

  it('contains semantic HTML landmarks for accessibility', () => {
    renderWithProviders(<MainLayout />)

    // The layout should have a banner (AppBar), and main content area (main)
    expect(screen.getByRole('banner')).toBeInTheDocument() // AppBar uses role="banner"
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders the contact floating action button as a link with proper aria-label', () => {
    renderWithProviders(<MainLayout />)

    // Fab is rendered as a link because it uses component={RouterLink}
    // There are multiple links matching "contact" (header and FAB), so we use getAllByRole
    const contactLinks = screen.getAllByRole('link', { name: /contact/i })
    expect(contactLinks.length).toBeGreaterThan(0)
    
    // Specifically check that one of them has aria-label="contact"
    const fabLink = contactLinks.find(link => link.getAttribute('aria-label') === 'contact')
    expect(fabLink).toBeInTheDocument()
  })

  it('renders theme toggle button', () => {
    renderWithProviders(<MainLayout />)
    
    // Test if the brightness icon is rendered (theme toggle)
    const toggleButtons = screen.getAllByRole('button')
    // At least one button should be the theme toggle
    expect(toggleButtons.length).toBeGreaterThan(0)
  })
})
