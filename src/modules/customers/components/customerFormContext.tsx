import { createFormContext } from "@mantine/form";

export interface CustomerFormValues {
  first_name: string;
  last_name: string;
  chatid: number;
  phone: string;
  username: string;
  store: string;
}

export const [CustomerFormProvider, useCustomerFormContext, useCustomerForm] =
  createFormContext<CustomerFormValues>();
