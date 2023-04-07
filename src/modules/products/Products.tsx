import React, { useCallback } from "react";
import { useProductsApi } from "@web/services/hooks/useProductsApi";
import {
  ProductFormProvider,
  useProductForm,
} from "@web/modules/products/components/productFormContext";
import { Button, Group } from "@mantine/core";
import FormDrawer from "@web/components/FormDrawer";
import { useDisclosure } from "@mantine/hooks";
import { ProductsForm } from "@web/modules/products/components/ProductsForm";
import { TTable } from "@web/components/Table/Table";

type Props = {};

const Products = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useProductForm({
    initialValues: {
      image: "",
      name: "",
      price: 0,
      description: "",
      category: "",
    },
    validate: {
      image: (value) => value?.length > 0 || "Image is required",
      name: (value) => value?.length > 0 || "Name is required",
      price: (value) => value > 0 || "Price is required",
      description: (value) => value?.length > 0 || "Description is required",
      category: (value) => value?.length > 0 || "Category is required",
    },
  });

  const { useFetchAllProducts, CreateProduct } = useProductsApi();

  const { products, isProductsLoading, productsError } = useFetchAllProducts();

  const createProd = useCallback(
    async (data: unknown) => {
      await CreateProduct(data);
      close();
    },
    [CreateProduct, close]
  );

  if (isProductsLoading) return <h1>Loading ...</h1>;

  return (
    <ProductFormProvider form={form}>
      <Group position="right" mb={4}>
        <Button onClick={open}>Open Drawer</Button>
      </Group>
      <TTable values={products} />
      <FormDrawer opened={opened} onClose={close} title="Add new user">
        <ProductsForm onSubmit={createProd} />
      </FormDrawer>
    </ProductFormProvider>
  );
};

export default Products;
