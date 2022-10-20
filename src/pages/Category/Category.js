import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <p>Total news {news.length}</p>
        </div>
    );
};

export default Category;