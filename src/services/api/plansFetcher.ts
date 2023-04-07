import requests from "@web/services/requests";

export const plansFetcher = {
  all: async () => {
    return await requests.get("/plan");
  },
  create: async (data: any) => {
    return await requests.post("/plan/create", data);
  },
  update: async (data: any, id: string) => {
    return await requests.put(`/plan/update/${id}`, data);
  },
  delete: async (id: string) => {
    return await requests.delete(`/plan/delete/${id}`, );
  },
  get: async (id: string) => {
    return await requests.get(`/plan/get/${id}`);
  },

  types: {
    ALL: "/api/plan",
    CREATE: "/api/plan",
    UPDATE: "/api/plan",
    DELETE: "/api/plan",
    GET: "/api/plan",
  },
};
