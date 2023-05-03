import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefHeader from '../shared/ChefHeader';

const Chef = () => {
    const data = useLoaderData();
    const {chef_picture} = useLoaderData();
    // console.log(data);
    return (
        <div>
            <ChefHeader data={data}></ChefHeader>
        </div>
    );
};

export default Chef;