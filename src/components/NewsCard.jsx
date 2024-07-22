import React from 'react';
import './newsCard.css';

export const NewsCard = ({ news }) => {
  return (
    <div className="news-card">
      <img src={news.imageUrl} alt={news.title} className="news-image" />
      <div className="news-content">
        <h2 className="news-title">{news.title}</h2>
        <p className="news-description">{news.content}</p>
        <p className="news-author">By {news.author}</p>
        <p className="news-date">{new Date(news.publishedDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
};