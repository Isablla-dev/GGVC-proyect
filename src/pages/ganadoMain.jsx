import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import GanadoPage from './ganado.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GanadoPage />
  </StrictMode>,
)