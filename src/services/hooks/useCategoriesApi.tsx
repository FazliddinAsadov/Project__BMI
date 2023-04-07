import * as React from "react";
import useSWR, { mutate } from "swr";
import { categoriesFetcher } from "@web/services/api/categoriesFetcher";

export const useCategoriesApi = () => {
  const useFetchAllCategories = () => {
    const { data, error, isLoading, mutate } = useSWR(
      categoriesFetcher.types.ALL,
      categoriesFetcher.all
    );

    return {
      categories: data,
      isCategoriesLoading: isLoading,
      categoriesError: error,
      refetchCategories: mutate,
    };
  };

  const useCreateCategory = async (data: unknown) => {
    const response = await categoriesFetcher.create(data);
    mutate(categoriesFetcher.types.ALL);
    return response;
  };

  const useUpdateCategory = async (data: unknown, id:string) => {
    const response = await categoriesFetcher.update(data, id);
    mutate(categoriesFetcher.types.ALL);
    return response;
  };

  const useDeleteCategory = async (id:string) => {
    const response = await categoriesFetcher.delete(id);
    mutate(categoriesFetcher.types.ALL);
    return response;
  };

  return {
    useFetchAllCategories,
    useCreateCategory,
    useUpdateCategory,
    useDeleteCategory
  };
};
