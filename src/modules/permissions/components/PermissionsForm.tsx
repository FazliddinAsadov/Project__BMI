// @flow
import * as React from "react";
import { FC } from "react";
import { usePermissionFormContext } from "@web/modules/permissions/components/permissionFormContext";
import {
  Box,
  Button,
  Group,
  TextInput,
} from "@mantine/core";

type Props = {
  onSubmit: <T>(data: T) => void;
};
export const PermissionsForm: FC<Props> = ({ onSubmit: onSubmitProduct }) => {
  const { getInputProps, onSubmit } = usePermissionFormContext();

  const handleSubmit = onSubmit(onSubmitProduct);

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextInput label="Name" placeholder="name" {...getInputProps("name")} />
      <TextInput label="Value" placeholder="Value" {...getInputProps("value")} />
      <Group position="right" mt={12}>
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  );
};
