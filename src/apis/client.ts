import axios from "../utils/axios";

export const getClients = async (): Promise<any[]> => {
  try {
    const response = await axios.get("/pub/clients");
    return response.data;
  } catch (error: any) {
    console.error(
      "Error fetching services:",
      error.response?.data?.message || error.message
    );
    return [];
  }
};
