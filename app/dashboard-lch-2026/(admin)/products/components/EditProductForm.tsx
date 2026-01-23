"use client";

import { useState } from "react";
import { Product } from "@/app/types/product";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/Form/Input";
import { EditProductFormState } from "@/app/types/editProduct";
import { X } from 'lucide-react';
type Props = {
  product: Product;
  onSave: (product: EditProductFormState) => void;
  onCancel: () => void;
};

export function EditProductForm({ product, onSave, onCancel }: Props) {
  const [form, setForm] = useState<EditProductFormState>({
    id: product.id,
    name: product.name,
    price: product.price,
    stock: product.stock,
    removeImage: false,
  });

  const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

  const hasNewImage = Boolean(form.imageFile);

  return (
 
<div className="flex flex-col items-center justify-between pb-6 pt-2">
  <div className="flex items-center justify-between border-b px-6 w-full">
  <h2 className="text-lg font-semibold">Editar producto</h2>
  <Button
  label={ <X />}
    onClick={onCancel}
    className="text-gray-400 hover:text-gray-600"
  />
  
</div>


      <div className="space-y-4 py-4">
        <Input
          label="Nombre"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Precio"
            type="number"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: Number(e.target.value) })
            }
          />

          <Input
            label="Stock"
            type="number"
            value={form.stock}
            onChange={(e) =>
              setForm({ ...form, stock: Number(e.target.value) })
            }
          />
        </div>

        {product.imageUrl && !hasNewImage && (
          <div className="space-y-2">
            <span className="text-sm font-medium text-gray-700">
              Imagen actual
            </span>

            <div className="flex items-center gap-4">
              <img
                src={`${BACKEND_URL}${product.imageUrl}`}
                alt={product.name}
                className="h-16 w-16 rounded-lg object-cover border"
              />

              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={form.removeImage}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      removeImage: e.target.checked,
                    })
                  }
                />
                Eliminar imagen
              </label>
            </div>
          </div>
        )}

        <Input
          label="Nueva imagen"
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setForm({
                ...form,
                imageFile: file,
                removeImage: false,
              });
            }
          }}
        />
      </div>


      <div className="mt-6 flex justify-end gap-2">
        <Button
          label="Cancelar"
          onClick={onCancel}
          className="border border-gray-300 text-gray-700 hover:bg-gray-50"
        />
        <Button
          label="Guardar cambios"
          onClick={() => onSave(form)}
          className="bg-green-600 text-white hover:bg-green-700"
        />
      </div>
    </div>
  );
}
