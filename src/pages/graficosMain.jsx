import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import GraficosPage from './graficos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GraficosPage />
  </StrictMode>,
)