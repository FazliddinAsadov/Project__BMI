import React, { useCallback } from "react";
import { usePermissionsApi } from "@web/services/hooks/usePermissionsApi";
import {
  PermissionFormProvider,
  usePermissionForm,
} from "@web/modules/permissions/components/permissionFormContext";
import { Button, Group } from "@mantine/core";
import FormDrawer from "@web/components/FormDrawer";
import { useDisclosure } from "@mantine/hooks";
import { PermissionsForm } from "@web/modules/permissions/components/PermissionsForm";
import { TTable } from "@web/components/Table/Table";
type Props = {};

const Permissions = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = usePermissionForm({
    initialValues: {
      name: "",
      value: "",
    },
    //   validate: {

    //     name: (value) => value?.length > 0 || "Name is required",
    //     },
  });

  const {
    CreatePermission,
    useDeletePermission,
    useFetchAllPermissions,
    useUpdatePermission,
  } = usePermissionsApi();

  const { permissions, isPermissionsLoading, permissionsError } =
    useFetchAllPermissions();

  const createProd = useCallback(
    async (data: unknown) => {
      await CreatePermission(data);
      close();
    },
    [CreatePermission, close]
  );

  if (isPermissionsLoading) return <h1>Loading ...</h1>;

  return (
    <PermissionFormProvider form={form}>
      <Group position="right" mb={4}>
        <Button onClick={open}>Open Drawer</Button>
      </Group>
      <TTable values={permissions} />
      <FormDrawer opened={opened} onClose={close} title="Add New Permission">
        <PermissionsForm onSubmit={createProd} />
      </FormDrawer>
    </PermissionFormProvider>
  );
};

export default Permissions;
