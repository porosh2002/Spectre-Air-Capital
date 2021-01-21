import React from 'react'
import './App.css'
import { BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home'
export default function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

