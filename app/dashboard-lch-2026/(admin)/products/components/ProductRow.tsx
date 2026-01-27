"use client";

import { Product } from "@/app/types/product";
import { Button } from "@/app/components/ui/Button";

type Props = {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
};

export function ProductRow({ product, onEdit, onDelete }: Props) {
  const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

  return (
    <tr className="border-b last:border-b-0 hover:bg-gray-50 transition">
      <td className="px-4 py-3 font-medium text-gray-900">
        {product.name}
      </td>

      <td className="px-4 py-3">
        {product.imageUrl ? (
          <img
            src={`${BACKEND_URL}${product.imageUrl}`}
            alt={product.name}
            className="h-10 w-10 rounded-lg object-cover border"
          />
        ) : (
          <span className="text-xs text-gray-500">Sin imagen</span>
        )}
      </td>

      <td className="px-4 py-3 text-gray-700">
        ${product.price.toLocaleString()}
      </td>
 <td className="px-4 py-3 font-medium text-gray-900">
        {product.weight ? product.weight : <span>Sin peso asignado</span>}
      </td>
      <td className="px-4 py-3">
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
            product.stock > 0
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {product.stock > 0
            ? `${product.stock} disponibles`
            : "Sin stock"}
        </span>
      </td>
<td className="px-4 py-3 font-medium text-gray-900">
        {product.color ? product.color : <span>Sin color asignado</span>}
      </td>
      <td className="px-4 py-3">
        <div className="flex justify-end gap-2">
          <Button
           
            onClick={() => onEdit(product)}
            className="border bg-orange-500 text-white hover:bg-orange-600"
          >Editar</Button>
          <Button
      
            onClick={() => onDelete(product.id)}
            className="bg-red-500 text-white hover:bg-red-600"
          >Eliminar</Button>
        </div>
      </td>
    </tr>
  );
}
