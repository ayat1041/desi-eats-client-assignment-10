import React from 'react';
import { SiCodechef } from 'react-icons/si'
import { useEffect, useState } from 'react';
import ChefCard from './ChefCard';
const Chefs = () => {
    const [chefs,setChefs] = useState([]);
    useEffect(()=>{
        fetch(`https://desi-eats-server-ayat1041.vercel.app/chef`)
        .then(res=>res.json())
        .then(data=>setChefs(data))
    },[])
    return (
        <section className='w-full flex flex-col items-center justify-center pt-10 pb-10 px-2 bg-orange-100' id="ourChefs">
            <SiCodechef className='text-7xl text-amber-500 mb-4'/>
            <h2 className="text-lg lg:text-3xl font-bold">_Our Chefs_</h2>
            <p className='text-center font-medium tracking-wider mt-6 text-orange-700'>We have picked Countries best chefs recipes<br></br>to have an Orchestra of the Royale Indian Cuisine.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-center mt-8'>
            {
            chefs.chefs?.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
            }
            </div>
        </section>
    );
};

export default Chefs;