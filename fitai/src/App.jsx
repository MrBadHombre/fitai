import { useState } from 'react'

import styles from './styles/styles.css'

import Counter from './components/Counter'
import Hero from './components/Hero'
import LandingCarousel from './components/LandingCarousel'

function App() {
  return (
    <>
      <Hero />
      <LandingCarousel />
    </>
  )
}

export default App
