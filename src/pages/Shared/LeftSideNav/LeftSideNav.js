import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [catagories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/news-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div >
            <p className='text-xl lg:text-2xl'>Categories</p>
            {
                catagories.map(category => <p key={category.id}><Link className='underline text-blue-600' to={`/category/${category.id}`}>{category.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSideNav;