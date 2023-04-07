import requests from "@web/services/requests";

export const productsFetcher = {
  all: async () => {
    return await requests.get("/product");
  },
  create: async <T>(data: T) => {
    return await requests.post("/product/create", data);
  },
  update: async (data: any) => {},
  delete: async (id: string) => {},
  get: async (id: string) => {},

  types: {
    ALL: "/api/products",
    CREATE: "/api/products",
    UPDATE: "/api/products",
    DELETE: "/api/products",
    GET: "/api/products",
  },
};
