import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import ProjectGallery from './ProjectGallery'

describe('ProjectGallery Component', () => {
  const mockImages = ['https://example.com/img1.jpg', 'https://example.com/img2.jpg']

  it('renders nothing if no images are provided', () => {
    const { container } = render(<ProjectGallery images={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders images correctly', () => {
    render(<ProjectGallery images={mockImages} />)
    
    expect(screen.getByText('Galerie')).toBeInTheDocument()
    
    // CardMedia renders as img elements
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
    expect(images[0]).toHaveAttribute('src', mockImages[0])
  })

  it('opens full screen dialog on image click and closes it', async () => {
    render(<ProjectGallery images={mockImages} />)
    
    const user = userEvent.setup()
    
    // Initially dialog is not present
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    
    // Click on the first image's container
    const firstImage = screen.getAllByRole('img')[0]
    await user.click(firstImage)
    
    // Dialog should be open
    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    
    // The selected image should be visible in full screen
    const fullScreenImage = screen.getByAltText('Full screen')
    expect(fullScreenImage).toHaveAttribute('src', mockImages[0])
    
    // Close the dialog
    const closeBtn = screen.getByLabelText('close')
    await user.click(closeBtn)
    
    // Wait for the dialog to be removed (Material UI transition)
    await waitForElementToBeRemoved(() => screen.queryByRole('dialog'))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
