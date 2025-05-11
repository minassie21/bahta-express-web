import axios from "../utils/axios";

export const getServices = async (): Promise<any[]> => {
  try {
    const response = await axios.get("/pub/services");
    return response.data.data;
  } catch (error: any) {
    console.error(
      "Error fetching services:",
      error.response?.data?.message || error.message
    );
    return [];
  }
};
