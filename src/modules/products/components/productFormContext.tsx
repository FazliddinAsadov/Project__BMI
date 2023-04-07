import { createFormContext } from "@mantine/form";

export interface ProductFormValues {
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

export const [ProductFormProvider, useProductFormContext, useProductForm] =
  createFormContext<ProductFormValues>();
