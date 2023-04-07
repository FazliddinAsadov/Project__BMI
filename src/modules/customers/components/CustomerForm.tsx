// @flow
import * as React from "react";
import { FC } from "react";
// import { usePermissionFormContext } from "@web/modules/permissions/components/permissionFormContext";
import { useCustomerFormContext } from "@web/modules/customers/components/customerFormContext";
import {
  Box,
  Button,
  Group,
  NumberInput,
  Select,
  TextInput,
} from "@mantine/core";
import { useStoresApi } from "@web/services/hooks/useStoresApi";
import customersLocaleEn from "../locale";

type Props = {
  onSubmit: <T>(data: T) => void;
};
export const CustomerForm: FC<Props> = ({ onSubmit: onSubmitProduct }) => {
  const { getInputProps, onSubmit } = useCustomerFormContext();
  const { useFetchAllStores } = useStoresApi();
  const { stores, isStoresLoading, storesError, refetchStores } =
    useFetchAllStores();

  console.log(stores);

  const handleSubmit = onSubmit(onSubmitProduct);

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextInput
        label="FirstName"
        placeholder="Firstname"
        {...getInputProps("first_name")}
      />
      <TextInput
        label="LastName"
        placeholder="Lastname"
        {...getInputProps("last_name")}
      />
      <NumberInput
        label="ChatID"
        placeholder="ChatID"
        {...getInputProps("chatid")}
      />
      <NumberInput
        label="Phone Number"
        placeholder="Phone Number"
        {...getInputProps("phone")}
      />
      <TextInput
        label="Username"
        placeholder="Username"
        {...getInputProps("username")}
      />
      <Select
        label="Store"
        placeholder="Store"
        data={[{ value: "640756e661e2316f92f26439", label: "Calalilly" }]}
        {...getInputProps("store")}
      />
      <Group position="right" mt={12}>
        <Button type="submit">{customersLocaleEn.drawerSubmitBtn}</Button>
      </Group>
    </Box>
  );
};
