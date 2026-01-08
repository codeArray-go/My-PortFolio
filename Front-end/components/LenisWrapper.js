"use client"

import { ReactLenis } from 'lenis/react'
import { useRef } from 'react'

const LenisWrapper = ({ children }) => {
  const lenisRef = useRef();

  return (
    <ReactLenis
      root
      options={{
        duration: 1.6,
        smoothWheel: true,
        smoothTouch: true
      }}
      ref={lenisRef}
    >
      {children}
    </ ReactLenis >
  )
}

export default LenisWrapper;
