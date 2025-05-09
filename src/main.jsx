import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import { ScrollToTop } from './components/index.js'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <ToastContainer />
        <ScrollToTop />
        <App/>
      </CartProvider>
    </Router>
  </StrictMode>,
)
