import requests from "@web/services/requests";

export const ordersFetcher = {
  all: async () => {
    return await requests.get("/order");
  },
  create: async (data: any) => {
    return await requests.post("/order/create", data);
  },
  update: async (data: any, id: string) => {
    return await requests.put(`/order/update/${id}`, data);
  },
  delete: async (id: string) => {
    return await requests.delete(`/order/delete/${id}`, );
  },
  get: async (id: string) => {
    return await requests.get(`/order/get/${id}`);
  },

  types: {
    ALL: "/api/order",
    CREATE: "/api/order",
    UPDATE: "/api/order",
    DELETE: "/api/order",
    GET: "/api/order",
  },
};
