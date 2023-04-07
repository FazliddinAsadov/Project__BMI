import React, { useCallback } from "react";
import { useOrdersApi } from "@web/services/hooks/useOrdersApi";
import {
  useOrderForm,
  useOrderFormContext,
  OrderFormProvider,
} from "@web/modules/orders/components/ordersFormContext";
import { OrderForm } from "@web/modules/orders/components/OrdersForm";
import { useDisclosure } from "@mantine/hooks";
import { Button, Group } from "@mantine/core";
import { TTable } from "@web/components/Table/Table";
import FormDrawer from "@web/components/FormDrawer";
import orderLocaleEn from "./locale";

type Props = {};

const Orders = (props: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useOrderForm({
    initialValues: {
      location: {
        lng: 0,
        lat: 0,
      },
      cart: [],
      phone: 0,
      customer: {},
      total: 0,
      store: {
        name: "",
      },
    },
    // validate: {

    // },
  });

  const { useCreateOrder, useDeleteOrder, useFetchAllOrders, useUpdateOrder } =
    useOrdersApi();

  const { orders, isOrdersLoading, ordersError, refetchOrders } =
    useFetchAllOrders();
  console.log("orders", orders);

  const createProd = useCallback(
    async (data: unknown) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      await useCreateOrder(data);
      close();
    },
    [useCreateOrder, close]
  );

  if (isOrdersLoading) return <h1>{orderLocaleEn.loading}</h1>;
  return (
    <OrderFormProvider form={form}>
      <TTable values={orders} />
    </OrderFormProvider>
  );
};

export default Orders;
