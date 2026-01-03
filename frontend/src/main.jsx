import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './landing_page/Navbar'
import HomePage from './landing_page/home/HomePage'
import SignUp from './landing_page/signup/SignUp'
import AboutPage from './landing_page/about/AboutPage'
import ProductsPage from './landing_page/products/ProductsPage'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'
import Footer from './landing_page/Footer'
import NotFound from './landing_page/NotFound'
import { Toaster } from 'react-hot-toast'
import Login from './landing_page/login/Login'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={ <HomePage/> } />
      <Route path='/signup' element={ <SignUp/> } />
      <Route path="/login" element={<Login />} />
      <Route path='/about' element={ <AboutPage/> } />
      <Route path='/products' element={ <ProductsPage/> } />
      <Route path='/pricing' element={ <PricingPage/> } />
      <Route path='/support' element={ <SupportPage/> } />
      <Route path='/*' element={ <NotFound/> } />
    </Routes>
    <Toaster position="top-center" />
    <Footer/>
  </BrowserRouter>
)
