import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from '../Pages/HomePage/ui/HomePage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
