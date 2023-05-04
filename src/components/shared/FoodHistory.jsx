import React from 'react';
import { BsFillBookFill } from 'react-icons/bs'
const FoodHistory = () => {
    return (
        <div>
            <section
        className="w-full flex flex-col items-center justify-center pt-10 pb-10 px-2 bg-orange-100">
        <BsFillBookFill className="text-7xl text-amber-500 mb-4" />
        <h2 className="text-lg lg:text-3xl font-bold">_Hi<span className='text-red-700'>Story</span> Time!_</h2>
        <img className='rounded-md mt-8 mb-8 w-[90vw] lg:w-[70vw]' src="https://www.thestatesman.com/wp-content/uploads/2017/08/1484288755-spices-representational-image-getty-images.jpg" alt="" />
        <p className="tracking-wider text-justify mt-6 w-[90vw] lg:w-[70vw]"><i>
        Indian cuisine has a rich and fascinating history that spans thousands of years. The food of India has been influenced by a diverse range of cultures, including the Persians, Mughals, Portuguese, and British, among others. Indian cuisine is known for its complex flavors and spices, which are used to create dishes that are both savory and sweet.<br/><br/>

One of the most important contributions to Indian cuisine was made by the Mughals, who brought with them a love of rich, creamy dishes and delicate spices. The Mughal influence can be seen in many popular Indian dishes, including biryani, kebabs, and butter chicken.<br/><br/>

Another important influence on Indian cuisine was the British, who introduced a range of new ingredients and cooking techniques. The British influence can be seen in dishes like mulligatawny soup, which is a fusion of Indian and British culinary traditions.

Despite the many cultural influences on Indian cuisine, it has remained true to its roots, with many dishes still prepared using traditional cooking techniques and ingredients. Today, Indian cuisine is enjoyed all over the world, with many restaurants specializing in traditional Indian dishes, as well as modern fusion cuisine that blends Indian flavors with other culinary traditions.
</i></p>
        <div className="grid grid-cols-1 justify-center mt-8">
        </div>
      </section>
        </div>
    );
};

export default FoodHistory;