import { NextResponse } from "next/server";

const backendBase =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

// Editar producto
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const formData = await req.formData();

  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));
  const image = formData.get("image") as File | null;
  const removeImage = formData.get("removeImage"); 

  const forwardFormData = new FormData();
  forwardFormData.append("name", name);
  forwardFormData.append("price", String(price));
  forwardFormData.append("stock", String(stock));

  if (removeImage) {
    forwardFormData.append("removeImage", "true");
  }

  if (image) {
    forwardFormData.append("image", image);
  }

  const resp = await fetch(`${backendBase}/admin/products/${id}`, {
    method: "PUT",
    body: forwardFormData,
    headers: {
      cookie: req.headers.get("cookie") || "",
    },
  });

  const data = await resp.json();
  return NextResponse.json(data, { status: resp.status });
}


// Eliminar producto
export async function DELETE(
  req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  const resp = await fetch(`${backendBase}/products/${id}`, {
    method: "DELETE",
    headers: {
      cookie: req.headers.get("cookie") || "",
    },
  });

  const data = await resp.json();
  return NextResponse.json(data, { status: resp.status });
}
