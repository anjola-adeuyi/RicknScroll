import { useState, useEffect } from 'react';
import axios from 'axios';

interface QueryResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useQuery = <T>(url: string): QueryResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url, { signal });
        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request canceled');
        } else if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
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
