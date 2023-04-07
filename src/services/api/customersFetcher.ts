import requests from "@web/services/requests";

export const customersFetcher = {
  all: async () => {
    return await requests.get("/customer");
  },
  create: async (data: any) => {
    return await requests.post("/customer/create", data);
  },
  update: async (data: any, id: string) => {
    return await requests.put(`/customer/update/${id}`, data);
  },
  delete: async (id: string) => {
    return await requests.delete(`/customer/delete/${id}`, );
  },
  get: async (id: string) => {
    return await requests.get(`/customer/get/${id}`);
  },

  types: {
    ALL: "/api/customer",
    CREATE: "/api/customer",
    UPDATE: "/api/customer",
    DELETE: "/api/customer",
    GET: "/api/customer",
  },
};
