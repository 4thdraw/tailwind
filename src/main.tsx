import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


import './index.css'

import Hd from './layout/Hd'
import Ft from './layout/Ft'
import Content from './pages/Content'


createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <BrowserRouter>
      <Hd />
      <Content />
      <Ft />
    </BrowserRouter>       
  </StrictMode>,
)
