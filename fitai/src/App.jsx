import { useState } from 'react'

import styles from './styles/styles.css'

import Hero from './components/Hero'
import LandingCarousel from './components/LandingCarousel'
import ExampleProject from './components/ExampleProject'

function App() {
  return (
    <>
      <Hero />
      <LandingCarousel />
      <ExampleProject />
    </>
  )
}

export default App
