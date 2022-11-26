
import React from 'react';
import { Link, } from 'react-router-dom';
const Category = ({ category }) => {
    const { category_name, categoryId } = category;

    return (
        <div >
            <Link to={`/category/${categoryId}`}>
                <p className='text-1xl font-semibold bg-neutral text-neutral-content w-3/12 mx-auto py-4 my-12' >{category_name}</p>
            </Link>
        </div>
    );
};

export default Category;