// @flow
import * as React from "react";
import { FC } from "react";
// import { usePermissionFormContext } from "@web/modules/permissions/components/permissionFormContext";
import { useAdminFormContext } from "@web/modules/admins/components/adminFormContext";
import {
  Box,
  Button,
  Group,
  NumberInput,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";
import { useRolesApi } from "@web/services/hooks/useRolesApi";
import adminsLocaleEn from "../locale";

type Props = {
  onSubmit: <T>(data: T) => void;
};
export const AdminsForm: FC<Props> = ({ onSubmit: onSubmitProduct }) => {
  const { useFetchAllRoles, CreateRole } = useRolesApi();

  const { roles, isRolesLoading, rolesError, refetchRoles } =
    useFetchAllRoles();
  console.log("roles", roles);
  const { getInputProps, onSubmit } = useAdminFormContext();

  const handleSubmit = onSubmit(onSubmitProduct);

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextInput label="Name" placeholder="Name" {...getInputProps("name")} />
      <TextInput
        label="Email"
        placeholder="Email"
        {...getInputProps("email")}
      />
      <PasswordInput
        placeholder="Password"
        label="Password"
        withAsterisk
        {...getInputProps("password")}
      />
      <Select
        label="Role"
        placeholder="Role"
        data={roles}
        {...getInputProps("store")}
      />
      <Group position="right" mt={12}>
        <Button type="submit">{adminsLocaleEn.drawerSubmitBtn}</Button>
      </Group>
    </Box>
  );
};
