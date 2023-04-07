import useSWR, { mutate } from "swr";
import { storesFetcher } from "@web/services/api/storesFetcher";

export const useStoresApi = () => {
  const useFetchAllStores = () => {
    const { data, error, isLoading, mutate } = useSWR(
      storesFetcher.types.ALL,
      storesFetcher.all
    );

    return {
        stores: data,
        isStoresLoading: isLoading,
        storesError: error,
        refetchStores: mutate,
    };
  };

  const useCreateStore = async (data: unknown) => {
    const response = await storesFetcher.create(data);
    mutate(storesFetcher.types.ALL);
    return response;
  };

  const useUpdateStore = async (data: unknown, id:string) => {
    const response = await storesFetcher.update(data, id);
    mutate(storesFetcher.types.ALL);
    return response;
  };

  const useDeleteStore = async (id:string) => {
    const response = await storesFetcher.delete(id);
    mutate(storesFetcher.types.ALL);
    return response;
  };

  return {
    useFetchAllStores,
    useCreateStore,
    useUpdateStore,
    useDeleteStore
  };
};
