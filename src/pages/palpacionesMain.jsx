import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import PalpacionesPage from './palpaciones.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PalpacionesPage/>
  </StrictMode>,
)