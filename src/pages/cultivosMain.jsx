import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import CultivosPage from './cultivos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CultivosPage />
  </StrictMode>,
)