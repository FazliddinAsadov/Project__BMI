import { createFormContext } from "@mantine/form";
export interface OrderFormValues {
  location: {
    lng: number;
    lat: number;
  };
  customer: any;
  phone: number;
  cart: [];
  total: number;
  store: {
    name: string;
  };
}

export const [OrderFormProvider, useOrderFormContext, useOrderForm] =
  createFormContext<OrderFormValues>();
