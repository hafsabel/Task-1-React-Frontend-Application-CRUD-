// src/App.jsx
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

export default function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const addProduct = (product) => {
    const newProduct = { id: Date.now(), ...product };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setEditingProduct(null);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const editProduct = (product) => {
    setEditingProduct(product);
  };

  return (
    <div className="container">
      <h1 className="title">React CRUD Product Manager</h1>
      <ProductForm
        onSubmit={editingProduct ? updateProduct : addProduct}
        editingProduct={editingProduct}
      />
      <ProductList
        products={products}
        onEdit={editProduct}
        onDelete={deleteProduct}
      />
    </div>
  );
}
