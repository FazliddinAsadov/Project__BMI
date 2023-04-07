const requests = {
  get: async (url: string) => {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(BASE_URL + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  },
  post: async <T>(url: string, data: T) => {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(BASE_URL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  },
  put: async <T>(url: string, data: T) => {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(BASE_URL + url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  },
  delete: async <T>(url: string,) => {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(BASE_URL + url, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  },
};

export default requests;
