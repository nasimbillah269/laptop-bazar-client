
import React from 'react';
import { Link, } from 'react-router-dom';
const Category = ({ category }) => {
    const { category_name, categoryId } = category;
    console.log(categoryId, category_name);
    return (
        <div>
            <Link to={`/category/${categoryId}`}><p>{category_name}</p></Link>
        </div>
    );
};

export default Category;