import React, { useCallback } from "react";
import { useAdminsApi } from "@web/services/hooks/useAdminsApi";
import {
  useAdminForm,
  AdminFormProvider,
} from "@web/modules/admins/components/adminFormContext";
import { useDisclosure } from "@mantine/hooks";
import { Button, Group } from "@mantine/core";
import { TTable } from "@web/components/Table/Table";
import FormDrawer from "@web/components/FormDrawer/FormDrawer";
import { AdminsForm } from "@web/modules/admins/components/AdminsForm";
import adminsLocaleEn from "./locale";

type Props = {};

const Admins = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useAdminForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "",
    },
    // validate: {
    //   name: (value) => value?.length > 0 || "Name is required",
    // },
  });
  const { useCreateAdmin, useDeleteAdmin, useFetchAllAdmins, useUpdateAdmin } =
    useAdminsApi();

  const { admins, isAdminsLoading, adminsError, refetchAdmins } =
    useFetchAllAdmins();

  const createProd = useCallback(
    async (data: unknown) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      await useCreateAdmin(data);
      close();
    },
    [useCreateAdmin, close]
  );

  if (isAdminsLoading) return <h1>{adminsLocaleEn.loading}</h1>;

  return (
    <AdminFormProvider form={form}>
      <Group position="right">
        <Button onClick={open}>{adminsLocaleEn.addAdmin}</Button>
      </Group>
      <TTable values={admins} />
      <FormDrawer
        opened={opened}
        onClose={close}
        title={adminsLocaleEn.drawerTitle}
      >
        <AdminsForm onSubmit={createProd} />
      </FormDrawer>
    </AdminFormProvider>
  );
};

export default Admins;
