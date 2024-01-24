import React from 'react';
import './Category.css'

const Category = ({category}) => {
    const {logo,category_name,availability} = category 
    return (
        <div className='category' >
            <img src={logo} alt="" />
            <p>{category_name}</p>
            <small>{availability}</small>
        </div>
    );
};

export default Category;