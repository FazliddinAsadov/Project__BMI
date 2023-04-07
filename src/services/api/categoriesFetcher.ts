import requests from "@web/services/requests";

export const categoriesFetcher = {
  all: async () => {
    return await requests.get("/category");
  },
  create: async (data: any) => {
    return await requests.post("/category/create", data);
  },
  update: async (data: any, id: string) => {
    return await requests.put(`/category/update/${id}`, data);
  },
  delete: async (id: string) => {
    return await requests.delete(`/category/delete/${id}`, );
  },
  get: async (id: string) => {
    return await requests.get(`/category/get/${id}`);
  },

  types: {
    ALL: "/api/category",
    CREATE: "/api/category",
    UPDATE: "/api/category",
    DELETE: "/api/category",
    GET: "/api/category",
  },
};
