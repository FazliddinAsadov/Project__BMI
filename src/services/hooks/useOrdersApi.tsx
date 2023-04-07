import useSWR, { mutate } from "swr";
import { ordersFetcher } from "@web/services/api/ordersFetcher";

export const useOrdersApi = () => {
  const useFetchAllOrders = () => {
    const { data, error, isLoading, mutate } = useSWR(
      ordersFetcher.types.ALL,
      ordersFetcher.all
    );

    return {
      orders: data,
      isOrdersLoading: isLoading,
      ordersError: error,
      refetchOrders: mutate,
    };
  };

  const useCreateOrder = async (data: unknown) => {
    const response = await ordersFetcher.create(data);
    mutate(ordersFetcher.types.ALL);
    return response;
  };

  const useUpdateOrder = async (data: unknown, id:string) => {
    const response = await ordersFetcher.update(data, id);
    mutate(ordersFetcher.types.ALL);
    return response;
  };

  const useDeleteOrder = async (id:string) => {
    const response = await ordersFetcher.delete(id);
    mutate(ordersFetcher.types.ALL);
    return response;
  };

  return {
    useFetchAllOrders,
    useCreateOrder,
    useUpdateOrder,
    useDeleteOrder
  };
};
