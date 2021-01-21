import React from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import { BrowserRouter} from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  )
}

