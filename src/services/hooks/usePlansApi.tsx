import useSWR, { mutate } from "swr";
import { plansFetcher } from "@web/services/api/plansFetcher";

export const usePlansApi = () => {
  const useFetchAllPlans = () => {
    const { data, error, isLoading, mutate } = useSWR(
      plansFetcher.types.ALL,
      plansFetcher.all
    );
        return {
        plans: data,
        isPlansLoading: isLoading,
        plansError: error,
        refetchPlans: mutate,
        };
    
  };

  const useCreatePlan = async (data: unknown) => {
    const response = await plansFetcher.create(data);
    mutate(plansFetcher.types.ALL);
    return response;
  };

  const useUpdatePlan = async (data: unknown, id:string) => {
    const response = await plansFetcher.update(data, id);
    mutate(plansFetcher.types.ALL);
    return response;
  };

  const useDeletePlan = async (id:string) => {
    const response = await plansFetcher.delete(id);
    mutate(plansFetcher.types.ALL);
    return response;
  };

  return {
    useFetchAllPlans,
    useCreatePlan,
    useUpdatePlan,
    useDeletePlan
  };
};
