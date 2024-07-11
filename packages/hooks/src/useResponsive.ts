import { useEffect, useState } from 'react'

interface ResponsiveState {
  mobile: boolean
  tablet: boolean
  laptop: boolean
  desktop: boolean
}

export const useResponsive = (): ResponsiveState => {
  const [responsiveState, setResponsiveState] = useState<ResponsiveState>({
    mobile: false,
    tablet: false,
    laptop: false,
    desktop: false
  })

  const handleWindowSizeChange = () => {
    const width = window.innerWidth
    setResponsiveState({
      mobile: width <= 640,
      tablet: width > 640 && width <= 1024,
      laptop: width > 1024 && width <= 1440,
      desktop: width > 1440
    })
  }

  useEffect(() => {
    // Initial setup
    handleWindowSizeChange()

    // Event listener for window resize
    window.addEventListener('resize', handleWindowSizeChange)

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, []) // Empty dependency array ensures this effect runs only once

  return responsiveState
}
