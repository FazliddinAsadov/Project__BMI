import * as React from "react";
import useSWR, { mutate } from "swr";
import { permissionsFetcher } from "@web/services/api/permissionsFetcher";

export const usePermissionsApi = () => {
  const useFetchAllPermissions = () => {
    const { data, error, isLoading, mutate } = useSWR(
      permissionsFetcher.types.ALL,
      permissionsFetcher.all
    );

    return {
        permissions: data,
        isPermissionsLoading: isLoading,
        permissionsError: error,
        refetchPermissions: mutate,
    };
  };

  const CreatePermission = async (data: unknown) => {
    const response = await permissionsFetcher.create(data);
    mutate(permissionsFetcher.types.ALL);
    return response;
  };

  const useUpdatePermission = async (data: unknown, id:string) => {
    const response = await permissionsFetcher.update(data, id);
    mutate(permissionsFetcher.types.ALL);
    return response;
  };

  const useDeletePermission = async (id:string) => {
    const response = await permissionsFetcher.delete(id);
    mutate(permissionsFetcher.types.ALL);
    return response;
  };

  return {
    useFetchAllPermissions,
    CreatePermission,
    useUpdatePermission,
    useDeletePermission
  };
};
