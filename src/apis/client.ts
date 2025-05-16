import axios from "../utils/axios";

export const getClients = async (): Promise<any[]> => {
  try {
    const response = await axios.get("/pub/clients");
    return response.data;
  } catch (error: any) {
    console.error(
      "Error fetching clients:",
      error.response?.data?.message || error.message
    );
    return [];
  }
};

export const getWhatClientsSays = async (): Promise<any[]> => {
  try {
    const response = await axios.get("/pub/clients/testimonials");
    return response.data;
  } catch (error: any) {
    console.error(
      "Error fetching what clients says:",
      error.response?.data?.message || error.message
    );
    return [];
  }
};
