import React from 'react';
import { NewsCard } from './NewsCard.jsx';
import useFetchNews from '../shared/hooks/NewsFetchNews.jsx';
import './newsFeed.css';

export const NewsFeed = () => {
  const { newsList, loading, error } = useFetchNews();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading news: {error.message}</p>;

  return (
    <div className="news-feed">
      {newsList.map(news => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};