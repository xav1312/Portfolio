import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useContactForm } from './useContactForm'
import emailjs from '@emailjs/browser'

// Mock the emailjs library
vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn(),
  },
}))

describe('useContactForm Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useContactForm())

    expect(result.current.formData).toEqual({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
    expect(result.current.loading).toBe(false)
    expect(result.current.feedback).toBeNull()
    expect(result.current.openSnackbar).toBe(false)
  })

  it('should handle input changes correctly', () => {
    const { result } = renderHook(() => useContactForm())

    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John Doe' },
      } as React.ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.formData.name).toBe('John Doe')
  })

  it('should handle successful form submission', async () => {
    const { result } = renderHook(() => useContactForm())
    
    // Setup form data
    act(() => {
      result.current.handleChange({ target: { name: 'name', value: 'John' } } as any)
      result.current.handleChange({ target: { name: 'email', value: 'john@example.com' } } as any)
      result.current.handleChange({ target: { name: 'subject', value: 'Hello' } } as any)
      result.current.handleChange({ target: { name: 'message', value: 'Test message' } } as any)
    })

    // Mock successful emailjs send
    vi.mocked(emailjs.send).mockResolvedValueOnce({ status: 200, text: 'OK' })

    const mockEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.FormEvent

    await act(async () => {
      await result.current.handleSubmit(mockEvent)
    })

    expect(mockEvent.preventDefault).toHaveBeenCalled()
    expect(emailjs.send).toHaveBeenCalledWith(
      'service_zg1eul5',
      'template_5tzxrzl',
      {
        from_name: 'John',
        from_email: 'john@example.com',
        subject: 'Hello',
        message: 'Test message',
      },
      'jkNsqHSvO0DKnc0tv'
    )
    
    // Check successful feedback and reset state
    expect(result.current.feedback).toEqual({ type: 'success', message: 'Merci ! Votre message a bien été envoyé.' })
    expect(result.current.formData).toEqual({ name: '', email: '', subject: '', message: '' })
    expect(result.current.openSnackbar).toBe(true)
    expect(result.current.loading).toBe(false)
  })

  it('should handle failed form submission', async () => {
    const { result } = renderHook(() => useContactForm())
    
    act(() => {
      result.current.handleChange({ target: { name: 'name', value: 'John' } } as any)
    })

    // Mock failed emailjs send
    vi.mocked(emailjs.send).mockRejectedValueOnce(new Error('Network error'))

    const mockEvent = {
      preventDefault: vi.fn(),
    } as unknown as React.FormEvent

    await act(async () => {
      await result.current.handleSubmit(mockEvent)
    })

    expect(result.current.feedback).toEqual({
      type: 'error',
      message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.",
    })
    expect(result.current.openSnackbar).toBe(true)
    expect(result.current.loading).toBe(false)
  })

  it('should close snackbar', () => {
    const { result } = renderHook(() => useContactForm())

    // First open it by submitting
    vi.mocked(emailjs.send).mockRejectedValueOnce(new Error('Network error'))
    const mockEvent = { preventDefault: vi.fn() } as unknown as React.FormEvent

    act(() => {
      result.current.handleSubmit(mockEvent)
    })

    // Now close it
    act(() => {
      result.current.closeSnackbar()
    })

    expect(result.current.openSnackbar).toBe(false)
  })
})
