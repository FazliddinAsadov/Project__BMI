import React, { useCallback } from "react";
import { useRolesApi } from "@web/services/hooks/useRolesApi";


import {
  RoleFormProvider,
  useRoleForm,
} from "@web/modules/roles/components/rolesFormContext";
import { Button, Group } from "@mantine/core";
import FormDrawer from "@web/components/FormDrawer";
import { useDisclosure } from "@mantine/hooks";
import { RolesForm } from "@web/modules/roles/components/RolesForm";
import { TTable } from "@web/components/Table/Table";

type Props = {};

const Roles = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useRoleForm({
    initialValues: {

      name: "",
      permissions: [],
      
    },
    // validate: {
    //   name: (value) => value?.length > 0 || "Name is required",
    // },
  });
  const { useFetchAllRoles, CreateRole } = useRolesApi();

  

    const { roles, isRolesLoading, rolesError, refetchRoles } = useFetchAllRoles();
  console.log("roles", roles);
  const createProd = useCallback(
    async (data: unknown) => {
      await CreateRole(data);
      close();
    },
    [CreateRole, close]
  );

  if (isRolesLoading) return <h1>Loading ...</h1>;

  return (
    <RoleFormProvider form={form}>
      <Group position="right" mb={4}>
        <Button onClick={open}>Open Drawer</Button>
      </Group>
      <TTable values={roles} />
      <FormDrawer opened={opened} onClose={close} title="Add new user">
        <RolesForm onSubmit={createProd} />
      </FormDrawer>
    </RoleFormProvider>
  );
};

export default Roles;
