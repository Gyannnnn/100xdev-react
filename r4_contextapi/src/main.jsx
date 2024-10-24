import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextApi from './ContextApi.jsx'
import Recoil from './Recoil.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ContextApi/> */}
    <Recoil/>
  </StrictMode>,
)
