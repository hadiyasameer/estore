import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css'
import Main from './Components/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductDetails from './Components/ProductDetails'
import CategoryPage from './Components/CategoryPage';

function App() {

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />

        </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App