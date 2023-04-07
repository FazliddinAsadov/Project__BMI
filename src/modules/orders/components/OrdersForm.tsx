// @flow
import * as React from "react";
import { FC } from "react";
import { useOrderFormContext } from "@web/modules/orders/components/ordersFormContext";
import {
  Box,
  Button,
  Group,
  NumberInput,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";

type Props = {
  onSubmit: <T>(data: T) => void;
};
export const OrderForm: FC<Props> = ({ onSubmit: onSubmitPlan }) => {
  const { getInputProps, onSubmit } = useOrderFormContext();

  const handleSubmit = onSubmit(onSubmitPlan);

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextInput
        label="Icon"
        placeholder="temporary"
        {...getInputProps("icon")}
      />
      <TextInput label="Name" placeholder="name" {...getInputProps("name")} />

      <Select
        label="Features"
        placeholder="features"
        data={[
          { value: "640759769dc76ae89ac9b2bb", label: "Home" },
          { value: "640759769dc76ae89ac9b2bb", label: "Accessories" },
          { value: "640759769dc76ae89ac9b2bb", label: "Cakes" },
        ]}
        {...getInputProps("features")}
      />

      <Group position="right" mt={12}>
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  );
};
