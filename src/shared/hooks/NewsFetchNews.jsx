import { useState, useEffect } from 'react';
import { getNotice } from '../../services/api.jsx';

const useFetchNews = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await getNotice();
      if (response.error) {
        setError(response.e);
      } else {
        setNewsList(response.data);
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  return { newsList, loading, error };
};

export default useFetchNews;
