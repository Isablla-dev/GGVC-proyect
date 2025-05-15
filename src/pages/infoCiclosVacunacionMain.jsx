import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import InfoCiclosVacunacionPage from './infoCiclosVacunacion.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InfoCiclosVacunacionPage/>
  </StrictMode>,
)