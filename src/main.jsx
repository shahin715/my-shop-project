import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router";
import { OrderProvider } from './sections/Order/OrderContext.jsx'; // ✅ import the context

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <OrderProvider> {/* ✅ Wrap App with Provider */}
        <App />
      </OrderProvider>
    </BrowserRouter>
  </StrictMode>
);
