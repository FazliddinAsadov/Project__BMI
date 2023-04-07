import useSWR, { mutate } from "swr";
import { customersFetcher } from "@web/services/api/customersFetcher";

export const useCustomersApi = () => {
  const useFetchAllCustomers = () => {
    const { data, error, isLoading, mutate } = useSWR(
      customersFetcher.types.ALL,
      customersFetcher.all
    );

    return {
      customers: data,
      isCustomersLoading: isLoading,
      customersError: error,
      refetchCustomers: mutate,
    };
  };

  const useCreateCustomer = async (data: unknown) => {
    const response = await customersFetcher.create(data);
    mutate(customersFetcher.types.ALL);
    return response;
  };

  const useUpdateCustomer = async (data: unknown, id:string) => {
    const response = await customersFetcher.update(data, id);
    mutate(customersFetcher.types.ALL);
    return response;
  };

  const useDeleteCustomer = async (id:string) => {
    const response = await customersFetcher.delete(id);
    mutate(customersFetcher.types.ALL);
    return response;
  };

  return {
    useFetchAllCustomers,
    useCreateCustomer,
    useUpdateCustomer,
    useDeleteCustomer
  };
};
