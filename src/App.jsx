import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './Display'
import { DisplayProvider } from './context/DisplayContext'

function App() {
  
  return (
    <DisplayProvider>
      <Display />
    </DisplayProvider>
  )
}

export default App
