"use client";

import { useState } from "react";
import { Product } from "@/app/types/product";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/Form/Input";
import { EditProductFormState } from "@/app/types/editProduct";

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

  return (
    <div className="mt-6 p-4 border rounded bg-white max-w-md">
      <h2 className="font-bold mb-3">Editar producto</h2>

      <Input
        label="Nombre"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

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

      {product.imageUrl && (
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.removeImage}
            onChange={(e) =>
              setForm({ ...form, removeImage: e.target.checked })
            }
          />
          Eliminar imagen actual
        </label>
      )}

      <Input
        label="Nueva imagen"
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setForm({ ...form, imageFile: file });
          }
        }}
      />

      <div className="flex gap-2 mt-3">
        <Button label="Guardar" onClick={() => onSave(form)} />
        <Button label="Cancelar" onClick={onCancel} />
      </div>
    </div>
  );
}
