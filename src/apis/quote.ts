import axios from "../utils/axios";

export const sendQuote = async (formData: any): Promise<void> => {
  try {
    const response = await axios.post("/quote", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.data.message);
  } catch (error: any) {
    console.error(
      "Error sending quote:",
      error.response?.data?.message || error.message
    );
  }
};
