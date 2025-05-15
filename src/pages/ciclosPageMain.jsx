import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import CiclosPage from './ciclosPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CiclosPage/>
  </StrictMode>,
)