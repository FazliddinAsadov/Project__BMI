import requests from "@web/services/requests";

export const adminsFetcher = {
  all: async () => {
    return await requests.get("/admin");
  },
  create: async (data: any) => {
    return await requests.post("/admin/create", data);
  },
  update: async (data: any, id: string) => {
    return await requests.put(`/admin/update/${id}`, data);
  },
  delete: async (id: string) => {
    return await requests.delete(`/admin/delete/${id}`, );
  },
  get: async (id: string) => {
    return await requests.get(`/admin/get/${id}`);
  },

  types: {
    ALL: "/api/admin",
    CREATE: "/api/admin",
    UPDATE: "/api/admin",
    DELETE: "/api/admin",
    GET: "/api/admin",
  },
};
