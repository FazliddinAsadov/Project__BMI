
import * as React from "react";
import { FC } from "react";

import { usePermissionsApi } from "@web/services/hooks/usePermissionsApi";
import { useRoleFormContext } from "@web/modules/roles/components/rolesFormContext";
import {
  Box,
  Button,
  Group,
  MultiSelect,
  TextInput,
} from "@mantine/core";

type Props = {
  onSubmit: <T>(data: T) => void;
};

export const RolesForm: FC<Props> = ({ onSubmit: onSubmitRole }) => {
  const { getInputProps, onSubmit } = useRoleFormContext();
  const data:any = [];
  const {useFetchAllPermissions } = usePermissionsApi();
  
  const { permissions, isPermissionsLoading, permissionsError } = useFetchAllPermissions();
  
  if (isPermissionsLoading) {
    return <h1>Loading ...</h1>;
    
  }else{
    permissions.forEach((element: { name: any; id: any; }) => {
      data.push({key:element.id ,label: element.name, value: element.id})
    });
  }
 



  const handleSubmit = onSubmit(onSubmitRole);

  return (
    <Box component="form" onSubmit={handleSubmit}>
      
      <TextInput label="Name" placeholder="name" {...getInputProps("name")} />

      
      <MultiSelect
      data={data}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
    />
      <Group position="right" mt={12}>
        <Button type="submit">Submit</Button>
      </Group>
    </Box>
  );
};
