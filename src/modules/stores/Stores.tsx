import React from "react";
import { useStoresApi } from "@web/services/hooks/useStoresApi";

type Props = {};

const Stores = (props: Props) => {
  const { useCreateStore, useDeleteStore, useFetchAllStores, useUpdateStore } = useStoresApi();
  const { stores, isStoresLoading, storesError, refetchStores } = useFetchAllStores();
  console.log("stores", stores);
  if (isStoresLoading) return <h1>Loading ...</h1>;

  return <div>Stores page</div>;
};

export default Stores;
  