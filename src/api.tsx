export const API_URL = import.meta.env.VITE_API_URL as string;

export async function fetchFromApi(
  endpoint: string,
  method: string = "GET",
  body?: unknown
) {
  let url = "";
  API_URL.endsWith("/") ? (url = API_URL.slice(0, -1)) : (url = API_URL);
  try {
    const options: RequestInit = {
      method,
      headers: { "Content-Type": "application/json" },
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(`${url}${endpoint}`, options);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
