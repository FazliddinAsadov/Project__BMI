import useSWR, { mutate } from "swr";
import { adminsFetcher } from "@web/services/api/adminsFetcher";

export const useAdminsApi = () => {
  const useFetchAllAdmins = () => {
    const { data, error, isLoading, mutate } = useSWR(
      adminsFetcher.types.ALL,
      adminsFetcher.all
    );

    return {
        admins: data,
        isAdminsLoading: isLoading,
        adminsError: error,
        refetchAdmins: mutate,
    };
  };

  const useCreateAdmin = async (data: unknown) => {
    const response = await adminsFetcher.create(data);
    mutate(adminsFetcher.types.ALL);
    return response;
  };

  const useUpdateAdmin = async (data: unknown, id:string) => {
    const response = await adminsFetcher.update(data, id);
    mutate(adminsFetcher.types.ALL);
    return response;
  };

  const useDeleteAdmin = async (id:string) => {
    const response = await adminsFetcher.delete(id);
    mutate(adminsFetcher.types.ALL);
    return response;
  };

  return {
    useFetchAllAdmins,
    useCreateAdmin,
    useUpdateAdmin,
    useDeleteAdmin
  };
};
