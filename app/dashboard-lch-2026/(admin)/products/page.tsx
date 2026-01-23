"use client";

import { useEffect, useState } from "react";
import api from "@/app/lib/axios";
import { ProductsTable } from "./components/ProductsTable";
import { EditProductForm } from "./components/EditProductForm";
import { Button } from "@/app/components/ui/Button";
import { Product } from "@/app/types/product";
import { EditProductFormState } from "@/app/types/editProduct";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("¿Eliminar producto?")) return;
    await api.delete(`/products/${id}`);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleSave = async (form: EditProductFormState) => {
    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("price", String(form.price));
    formData.append("stock", String(form.stock));

    if (form.removeImage) {
      formData.append("removeImage", "true");
    }

    if (form.imageFile) {
      formData.append("image", form.imageFile);
    }

    const res = await api.put(`/products/${form.id}`, formData);
    const updatedProduct = res.data;

    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );

    setEditingProduct(null);
  };

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Productos</h1>
        <Button label="Nuevo producto" />
      </div>

      <ProductsTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {editingProduct && (
        <EditProductForm
          product={editingProduct}
          onSave={handleSave}
          onCancel={() => setEditingProduct(null)}
        />
      )}
    </section>
  );
}
