import useSWR, { mutate } from "swr";
import { rolesFetcher } from "@web/services/api/rolesFetcher";

export const useRolesApi = () => {
  const useFetchAllRoles = () => {
    const { data, error, isLoading, mutate } = useSWR(
      rolesFetcher.types.ALL,
      rolesFetcher.all
    );
        return {
        roles: data,
        isRolesLoading: isLoading,
        rolesError: error,
        refetchRoles: mutate,
        };
  };

  const CreateRole = async (data: unknown) => {
    const response = await rolesFetcher.create(data);
    mutate(rolesFetcher.types.ALL);
    return response;
  };

  const useUpdateRole = async (data: unknown, id:string) => {
    const response = await rolesFetcher.update(data, id);
    mutate(rolesFetcher.types.ALL);
    return response;
  };

  const useDeleteRole = async (id:string) => {
    const response = await rolesFetcher.delete(id);
    mutate(rolesFetcher.types.ALL);
    return response;
  };

  return {
    useFetchAllRoles,
    CreateRole,
    useUpdateRole,
    useDeleteRole
  };
};
