// src/components/ProductForm.jsx
import React, { useEffect, useState } from "react";

export default function ProductForm({ onSubmit, editingProduct }) {
  const [form, setForm] = useState({ name: "", price: "" });

  useEffect(() => {
    if (editingProduct) {
      setForm(editingProduct);
    } else {
      setForm({ name: "", price: "" });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return;
    onSubmit(form);
    setForm({ name: "", price: "" });
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
      />
      <button type="submit">
        {editingProduct ? "Update Product" : "Add Product"}
      </button>
    </form>
  );
}
