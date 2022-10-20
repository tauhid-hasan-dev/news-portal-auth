import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../Shared/NewSummeryCard/NewsSummeryCard';

const Home = () => {
    const allNews = useLoaderData()
  /*   console.log(news) */
    return (
        <div>
            {
                allNews.map(news => <NewsSummeryCard key= {news._id} news={news}></NewsSummeryCard>)
            }
        </div>
    );
};

export default Home;