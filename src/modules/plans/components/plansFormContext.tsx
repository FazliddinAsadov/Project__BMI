import { createFormContext } from "@mantine/form";

export interface PlanFormValues {
  name: string;
  features: Array<string>;
  icon: string;
}

export const [PlanFormProvider, usePlanFormContext, usePlanForm] =
  createFormContext<PlanFormValues>();
