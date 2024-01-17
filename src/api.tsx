const API_URL_ENV = import.meta.env.VITE_API_URL as string;
export const API_URL = API_URL_ENV.endsWith("/")
  ? API_URL_ENV.slice(0, -1)
  : `${API_URL_ENV}`;

export async function fetchFromApi(
  endpoint: string,
  method: string = "GET",
  body?: unknown
) {
  try {
    const options: RequestInit = {
      method,
      headers: { "Content-Type": "application/json" },
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(`${API_URL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
