import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {
    const { data: categories = [], } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
            .then(res => res.json())
    });
    return (
        <div className='text-center mt-12'>
            <h2 className='text-4xl font-bold'>Products Category</h2>
            {
                categories.map(category => <Category
                    key={category._id}
                    category={category}
                ></Category>)
            }
        </div>
    );
};

export default Categories;