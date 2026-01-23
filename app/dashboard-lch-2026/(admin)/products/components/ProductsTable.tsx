"use client";

import { Button } from "@/app/components/ui/Button";
import { Product } from "@/app/types/product";
import { useState } from "react";
type Props = {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
};


  export function ProductsTable({ products, onEdit, onDelete }: Props) {
  const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

  return (
    <table className="w-full border border-gray-200">
      <thead>
        <tr className="bg-green-100 text-left">
          <th className="p-2">Nombre</th>
          <th className="p-2">Imagen</th>
          <th className="p-2">Precio</th>
          <th className="p-2">Stock</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>

      <tbody>
        {products.map((p) => (
          <tr key={p.id} className="border-t">
            <td className="p-2">{p.name}</td>
            <td className="p-2">
              {p.imageUrl ? (
                <img
                  src={`${BACKEND_URL}${p.imageUrl}`}
                  alt={p.name}
                  className="h-10 w-10 rounded object-cover"
                />
              ) : (
                <span className="text-xs text-gray-400">—</span>
              )}
            </td>
            <td className="p-2">${p.price.toLocaleString()}</td>
            <td className="p-2">{p.stock}</td>
            <td className="p-2 flex gap-2">
              <Button label="Editar" onClick={() => onEdit(p)} />
              <Button
                label="Eliminar"
                onClick={() => onDelete(p.id)}
                className="text-red-600"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

          
  