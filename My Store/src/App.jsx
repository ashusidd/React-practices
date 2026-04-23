import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Admin from './pages/Admin'

function App() {
  // LocalStorage se data uthana
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("pro_store_data");
    return saved ? JSON.parse(saved) : [];
  });

  // Jab bhi products update hon, LocalStorage mein save karna
  useEffect(() => {
    localStorage.setItem("pro_store_data", JSON.stringify(products));
  }, [products]);

  // Product add karne ka logic
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Product delete karne ka logic
  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-rose-500">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home products={products} deleteProduct={deleteProduct} />} />
          <Route path="/admin" element={<Admin addProduct={addProduct} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App