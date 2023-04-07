import useSWR, { mutate } from "swr";
import { productsFetcher } from "@web/services/api/productsFetcher";

export const useProductsApi = () => {
  const useFetchAllProducts = () => {
    const { data, error, isLoading, mutate } = useSWR(
      productsFetcher.types.ALL,
      productsFetcher.all
    );

    return {
      products: data,
      isProductsLoading: isLoading,
      productsError: error,
      refetchProducts: mutate,
    };
  };

  const CreateProduct = async <T,>(data: T) => {
    const response = await productsFetcher.create({
      ...data,
      store: "6407599c9dc76ae89ac9b2bf",
    });
    await mutate(productsFetcher.types.ALL);

    return response;
  };
  return {
    useFetchAllProducts,
    CreateProduct,
  };
};
