import { createFormContext } from "@mantine/form";

export interface AdminFormValues {
  name: string;
  email: string;
  password: string;
  role: string;
}

export const [AdminFormProvider, useAdminFormContext, useAdminForm] =
  createFormContext<AdminFormValues>();
