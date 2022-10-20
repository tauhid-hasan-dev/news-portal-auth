import React from 'react';
import { FaBookmark, FaShareAlt, FaEye, FaStar } from 'react-icons/fa';

const NewsSummeryCard = ({news}) => {
    const {_id, author, details, total_view, rating, title, thumbnail_url, image_url} = news
    const {name, published_date, img} = author;
    const {number} = rating;
    return (
        <div className='p-5'>
            <div className="card bg-base-100 shadow-xl rounded-md ">
                <footer className="flex justify-between items-center border-gray-300  p-4 bg-base-300 text-base-content border-b-2">
                    <div className='flex gap-2'>
                        <div >
                            <img className='rounded-full w-12 h-12' src={img} alt="" />
                        </div>
                        <div>
                            <p className='text-lg font-semibold'>{name}</p>
                            <p>{published_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <FaBookmark/>
                        <FaShareAlt/>
                    </div>
                </footer>
               
                <div className="card-body px-3">
                    <h2 className="card-title">{title}</h2>
                </div>
                <div className='px-3 object-cover'>
                     <img src={image_url} alt="" />
                </div>
                <p className='px-5 py-2'>{details}</p>
                <footer className="border-gray-300 p-4 bg-base-300 text-base-content border-t-2">
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center  gap-2'>
                            <div>
                                <FaStar/>
                            </div>
                            <div>
                                {number}
                            </div>
                        </div>
                        <div className='flex items-center  gap-2'>
                            <div>
                                <FaEye/>
                            </div>
                            <div>
                                {total_view}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default NewsSummeryCard;