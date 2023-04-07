import requests from "@web/services/requests";

export const rolesFetcher = {
  all: async () => {
    return await requests.get("/role");
  },
  create: async (data: any) => {
    return await requests.post("/role/create", data);
  },
  update: async (data: any, id: string) => {
    return await requests.put(`/role/update/${id}`, data);
  },
  delete: async (id: string) => {
    return await requests.delete(`/role/delete/${id}`, );
  },
  get: async (id: string) => {
    return await requests.get(`/role/get/${id}`);
  },

  types: {
    ALL: "/api/role",
    CREATE: "/api/role",
    UPDATE: "/api/role",
    DELETE: "/api/role",
    GET: "/api/role",
  },
};
