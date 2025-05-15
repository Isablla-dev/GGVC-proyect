import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import PruebasApp from './pruebas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PruebasApp />
  </StrictMode>,
)