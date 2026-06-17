import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Animal from './Animal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Animal></Animal>
  </StrictMode>,
)
