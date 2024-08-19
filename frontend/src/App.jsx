// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import {ProductList} from './page/ProductList'
import {AddProduct} from './page/AddProduct'
import {EditProduct} from './page/EditProduct'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  )
}

export default App
