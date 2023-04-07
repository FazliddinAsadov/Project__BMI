import requests from "@web/services/requests";

export const permissionsFetcher = {
  all: async () => {
    return await requests.get("/permission");
  },
  create: async (data: any) => {
    return await requests.post("/permission/create", data);
  },
  update: async (data: any, id: string) => {
    return await requests.put(`/permission/update/${id}`, data);
  },
  delete: async (id: string) => {
    return await requests.delete(`/permission/delete/${id}`, );
  },
  get: async (id: string) => {
    return await requests.get(`/permission/get/${id}`);
  },

  types: {
    ALL: "/api/permission",
    CREATE: "/api/permission",
    UPDATE: "/api/permission",
    DELETE: "/api/permission",
    GET: "/api/permission",
  },
};
