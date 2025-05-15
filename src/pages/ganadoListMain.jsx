import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import GanadoListPage from './ganadoList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GanadoListPage />
  </StrictMode>,
)