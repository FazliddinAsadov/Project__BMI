import React, { useCallback } from "react";
import { useCustomersApi } from "@web/services/hooks/useCustomersApi";
import { Button, Group } from "@mantine/core";
import {
  useCustomerForm,
  CustomerFormProvider,
} from "@web/modules/customers/components/customerFormContext";
import { useDisclosure } from "@mantine/hooks";
import { TTable } from "@web/components/Table/Table";
import FormDrawer from "@web/components/FormDrawer";
import { CustomerForm } from "@web/modules/customers/components/CustomerForm";
import customersLocaleEn from "./locale";

type Props = {};

const Customers = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useCustomerForm({
    initialValues: {
      first_name: "",
      last_name: "",
      chatid: 0,
      phone: "",
      username: "",
      store: "",
    },
    validate: {
      first_name: (value: string) =>
        value.length > 0 ? null : "Invalid firstname",
      last_name: (value: string) =>
        value.length > 0 ? null : "Invalid lastname",
      username: (value: string) =>
        value.length > 0 ? null : "Invalid username",
      chatid: (value: number) => (value ? null : "Invalid chatid"),
      phone: (value: string) => (value ? null : "Invalid phone"),
      store: (value: string) => (value ? null : "Invalid store"),
    },
  });
  const {
    useCreateCustomer,
    useDeleteCustomer,
    useFetchAllCustomers,
    useUpdateCustomer,
  } = useCustomersApi();

  const { customers, isCustomersLoading, customersError, refetchCustomers } =
    useFetchAllCustomers();

  const createProd = useCallback(
    async (data: unknown) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      await useCreateCustomer(data);
      close();
    },
    [useCreateCustomer, close]
  );
  if (isCustomersLoading) return <h1>{customersLocaleEn.loading}</h1>;

  return (
    <CustomerFormProvider form={form}>
      <Group position="right">
        <Button onClick={open}>{customersLocaleEn.addCustomer}</Button>
      </Group>
      <TTable values={customers} />
      <FormDrawer
        opened={opened}
        onClose={close}
        title={customersLocaleEn.drawerTitle}
      >
        <CustomerForm onSubmit={createProd} />
      </FormDrawer>
    </CustomerFormProvider>
  );
};

export default Customers;
