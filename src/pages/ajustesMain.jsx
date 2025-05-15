import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import AjustesPage from './ajustes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AjustesPage />
  </StrictMode>,
)