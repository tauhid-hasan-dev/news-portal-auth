import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../Shared/NewSummeryCard/NewsSummeryCard';

const Category = () => {
    const newsByCategory = useLoaderData();
    console.log(newsByCategory);
    return (
        <div>
            <p>Total news {newsByCategory.length}</p>
            {
                newsByCategory.map(news => <NewsSummeryCard key={news._id} news = {news}></NewsSummeryCard>)
            }
        </div>
    );
};

export default Category;