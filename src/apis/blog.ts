import axios from "../utils/axios";

export const getBlogs = async (): Promise<any[]> => {
  try {
    const response = await axios.get("/pub/blogs");
    return response.data.data;
  } catch (error: any) {
    console.error(
      "Error fetching blogs:",
      error.response?.data?.message || error.message
    );
    return [];
  }
};
export const getAllBlogs = async (): Promise<any[]> => {
  try {
    const response = await axios.get("/pub/all-blogs");
    return response.data.data;
  } catch (error: any) {
    console.error(
      "Error fetching blogs:",
      error.response?.data?.message || error.message
    );
    return [];
  }
};

export const getBlogDetail = async (blogId: any): Promise<any[]> => {
  try {
    const response = await axios.get(`/blog/details/${blogId}`);

    return response.data.data;
  } catch (error: any) {
    console.error(
      "Error fetching blogs:",
      error.response?.data?.message || error.message
    );
    return [];
  }
};
export const getRelatedBlogs = async (data: {
  post_id: string;
}): Promise<any[]> => {
  try {
    const response = await axios.post(`/blog/related`, data);
    return response.data.data || [];
  } catch (error: any) {
    console.error(
      "Error fetching related blogs:",
      error.response?.data?.message || error.message
    );
    return [];
  }
};
