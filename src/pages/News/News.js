import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData(); 
    const { author, details, title, thumbnail_url, image_url, category_id} = news
    const {name, published_date, img} = author;
    return (
        <div className='p-5'>
            <div className="card  bg-base-100 shadow-xl rounded-md">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <Link to={`/category/${category_id}`}>
                        <button className="btn btn-primary">See all news in this category</button>
                    </Link>
                
                </div>
            </div>
        </div>
        </div>
    );
};

export default News;