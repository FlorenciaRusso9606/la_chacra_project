"use client";

import { Product } from "@/app/types/product";
import { ProductRow } from "./ProductRow";

type Props = {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
};

export function ProductsTable({ products, onEdit, onDelete }: Props) {

  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b">
          <tr className="text-left text-gray-600">
            <th className="px-4 py-3 font-medium">Producto</th>
            <th className="px-4 py-3 font-medium">Imagen</th>
            <th className="px-4 py-3 font-medium">Precio</th>
             <th className="px-4 py-3 font-medium">Peso</th>
            <th className="px-4 py-3 font-medium">Stock</th>            
              <th className="px-4 py-3 font-medium">Color</th>
            <th className="px-4 py-3 font-medium text-right">Acciones</th>
          </tr>
        </thead>

        <tbody>
          
           {products.map((p) => (
                    <ProductRow key={p.id} product={p} onEdit={onEdit} onDelete={onDelete}/>
                  ))}
        </tbody>
      </table>

      {products.length === 0 && (
        <div className="p-6 text-center text-sm text-gray-500">
          No hay productos cargados
        </div>
      )}
    </div>
  );
}
