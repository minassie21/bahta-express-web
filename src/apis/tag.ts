import { useEffect, useState } from "react";
import axios from "../utils/axios";

export const useTags = () => {
  const [tags, setTags] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get("/tags");
        setTags(response.data.data);
      } catch (error: any) {
        const errorMsg = error.response?.data?.message || error.message;
        console.error("Error fetching tags:", errorMsg);
        setError(errorMsg);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  return { tags, loading, error };
};
