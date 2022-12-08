import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import parsedRSS from './components/parser'

function App() {

  return (
    <div className="App">
      <parsedRSS></parsedRSS>
    </div>
  )
}

export default App
