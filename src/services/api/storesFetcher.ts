import requests from "@web/services/requests";

export const storesFetcher = {
  all: async () => {
    return await requests.get("/stores");
  },
  create: async (data: any) => {
    return await requests.post("/stores/create", data);
  },
  update: async (data: any, id: string) => {
    return await requests.put(`/stores/update/${id}`, data);
  },
  delete: async (id: string) => {
    return await requests.delete(`/stores/delete/${id}`, );
  },
  get: async (id: string) => {
    return await requests.get(`/stores/get/${id}`);
  },

  types: {
    ALL: "/api/stores",
    CREATE: "/api/stores",
    UPDATE: "/api/stores",
    DELETE: "/api/stores",
    GET: "/api/stores",
  },
};
