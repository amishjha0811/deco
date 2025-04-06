import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'
import { BrowserRouter} from 'react-router-dom'
import Whatsapp from './components/Whatsapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <App/>
      <Whatsapp/>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)