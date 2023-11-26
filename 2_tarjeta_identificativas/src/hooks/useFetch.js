import { useCallback, useState } from "react";

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("https://randomuser.me/api");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await response.json();

      setData(json.results);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { fetchData, isLoading, error, data };
}