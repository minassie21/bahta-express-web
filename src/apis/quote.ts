import axios from "../utils/axios";

export const sendQuote = async (formData: any): Promise<boolean> => {
  try {
    const response = await axios.post("/quote", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.status;
  } catch (error: any) {
    console.error(
      "Error sending quote:",
      error.response?.data?.message || error.message
    );
    return false;
  }
};
