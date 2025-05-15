import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import HistorialesPage from './historiales.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HistorialesPage />
  </StrictMode>,
)