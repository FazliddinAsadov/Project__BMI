import { createFormContext } from "@mantine/form";

export interface PermissionFormValues {
  name: string;
  value: string;
}

export const [PermissionFormProvider, usePermissionFormContext, usePermissionForm] =
  createFormContext<PermissionFormValues>();
