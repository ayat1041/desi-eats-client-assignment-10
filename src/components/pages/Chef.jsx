import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefHeader from '../shared/ChefHeader';
import Recipe from '../shared/Recipe';

const Chef = () => {
    const data = useLoaderData();
    const {chef_picture,recipes,_id} = useLoaderData();
    // console.log(data);
    return (
        <div>
            <ChefHeader data={data}></ChefHeader>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-6 mb-4'>
                {
                    recipes.map(recipe=><Recipe recipe={recipe} key={_id}></Recipe>)
                }
            </div>
        </div>
    );
};

export default Chef;