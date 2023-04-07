import { createFormContext } from "@mantine/form";

export interface RolesFormValues {
  name: string;
  permissions: string[];
}

export const [RoleFormProvider, useRoleFormContext, useRoleForm] =
  createFormContext<RolesFormValues>();
