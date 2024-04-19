import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

interface QueryResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useQuery = <T>(url: string): QueryResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(url, { signal });
        setData(response.data);
      } catch (error) {
        console.log({ error });
        setLoading(false);
        if (axios.isCancel(error)) {
          console.log('Request canceled');
        } else {
          const axiosError = error as AxiosError;
          if (axiosError.response) {
            // Server responded with a non-2xx status code
            setError(error as Error);
          } else if (axiosError.request) {
            // No response received
            setError(new Error('No response received from server'));
          } else {
            // Something went wrong in setting up the request
            setError(new Error('An unknown error occurred'));
          }
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Clean up function
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, loading, error };
};

export default useQuery;
