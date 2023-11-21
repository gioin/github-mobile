const BASE_URL = "https://api.github.com";

export const fetchData = async (endpoint: string): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error: any) {
    throw error;
  }
};
