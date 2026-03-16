import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useImageGallery } from './useImageGallery'

describe('useImageGallery Hook', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useImageGallery())

    expect(result.current.open).toBe(false)
    expect(result.current.selectedImage).toBe('')
  })

  it('should open gallery and set image', () => {
    const { result } = renderHook(() => useImageGallery())
    const testImage = 'https://example.com/test.jpg'

    act(() => {
      result.current.handleOpen(testImage)
    })

    expect(result.current.open).toBe(true)
    expect(result.current.selectedImage).toBe(testImage)
  })

  it('should close gallery', () => {
    const { result } = renderHook(() => useImageGallery())
    const testImage = 'https://example.com/test.jpg'

    // Open first
    act(() => {
      result.current.handleOpen(testImage)
    })

    // Then close
    act(() => {
      result.current.handleClose()
    })

    expect(result.current.open).toBe(false)
    // Note: selectedImage usually stays the same after closing, which is fine
  })
})
