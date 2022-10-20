import React from 'react';

const NewsSummeryCard = ({news}) => {
    const {_id, author, details, total_view, rating, title, thumbnail_url, image_url} = news
    const {name, published_date, img} = author;
    const {number} = rating;
    return (
        <div className='p-5'>
            <div className="card bg-base-100 shadow-xl rounded-md">
                <footer className="flex border-gray-300 p-4 bg-base-300 text-base-content border-t-2">
                    <div className='flex gap-2'>
                        <div>
                            <img className='rounded-full w-12 h-12' src={img} alt="" />
                        </div>
                        <div>
                            <p>{name}</p>
                            <p>{published_date}</p>
                        </div>
                    </div>
                </footer>
               
                <div className="card-body px-3 text-center">
                    <h2 className="card-title">{title}</h2>
                </div>
                <img src={image_url} alt="" />
                <p className='px-5 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quae ut tenetur consequuntur assumenda fuga officiis, expedita beatae porro nisi!</p>
                <footer className="footer border-gray-300 p-4 bg-base-300 text-base-content border-t-2">
                    <div>
                        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default NewsSummeryCard;