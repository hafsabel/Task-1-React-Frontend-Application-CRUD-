// src/components/ProductList.jsx
import React from "react";

export default function ProductList({ products, onEdit, onDelete }) {
  if (products.length === 0)
    return <p className="empty">No products added yet.</p>;

  return (
    <div className="grid">
      {products.map((p) => (
        <div key={p.id} className="card">
          <h3>{p.name}</h3>
          <p>💰 {p.price} €</p>
          <div className="actions">
            <button onClick={() => onEdit(p)}>Edit</button>
            <button className="danger" onClick={() => onDelete(p.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
