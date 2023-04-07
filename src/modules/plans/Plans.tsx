import React, { useCallback } from "react";
import { usePlansApi } from "@web/services/hooks/usePlansApi";

import {
  PlanFormProvider,
  usePlanForm,
} from "@web/modules/plans/components/plansFormContext";
import { Button, Group } from "@mantine/core";
import FormDrawer from "@web/components/FormDrawer";
import { useDisclosure } from "@mantine/hooks";
import { PlansForm } from "@web/modules/plans/components/PlansForm";
import { TTable } from "@web/components/Table/Table";

type Props = {};

const Payments = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = usePlanForm({
    initialValues: {
      icon: "",
      name: "",
      features: [],
    },
    validate: {
      icon: (value) => value?.length > 0 || "Icon is required",
      name: (value) => value?.length > 0 || "Name is required",
      features: (value) => value.length > 0 || "Features is required",
    },
  });

  const { useFetchAllPlans, useCreatePlan } = usePlansApi();

  const { plans, isPlansLoading } = useFetchAllPlans();

  const createProd = useCallback(
    async (data: unknown) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      await useCreatePlan(data);
      close();
    },
    [useCreatePlan, close]
  );

  if (isPlansLoading) return <h1>Loading ...</h1>;

  return (
    <PlanFormProvider form={form}>
      <Group position="right" mb={4}>
        <Button onClick={open}>Open Drawer</Button>
      </Group>
      <TTable values={plans} />
      <FormDrawer opened={opened} onClose={close} title="Add new user">
        <PlansForm onSubmit={createProd} />
      </FormDrawer>
    </PlanFormProvider>
  );
};

export default Payments;
