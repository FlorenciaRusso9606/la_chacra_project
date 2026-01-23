export interface EditProductFormState  {
  id: number;
  name: string;
  price: number;
  stock: number;
  imageFile?: File;
  removeImage?: boolean;
};