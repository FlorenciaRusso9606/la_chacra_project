export type EditProductFormState = {
  id: number;
  name?: string;
  price?: number;
  stock?: number;
  color?: string;
  weight?: string;
  imageFile?: File;
  removeImage?: boolean;
};
