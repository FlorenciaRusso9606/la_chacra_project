export interface Product{
    id: number;
    name: string;
    price: number;
    stock: number;
    weight?: string;
    imageUrl?: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}