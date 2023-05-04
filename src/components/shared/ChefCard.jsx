import { GiHotMeal } from 'react-icons/gi'
import { SlLike } from 'react-icons/sl'
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
const ChefCard = ({chef}) => {
    const {id,chef_name,chef_picture,years_of_experience,number_of_recipes,likes} = chef;
    return (
        <div className="flex flex-col bg-gradient-to-t from-orange-300 to-transparent rounded-lg p-2 m-2">
            <LazyLoad offset={300}>
            <img className="sm:w-full lg:w-[300px] h-[300px] object-cover object-top rounded-lg" src={chef_picture} alt="" />
            </LazyLoad>
            <div className="flex flex-col items-start text-left h-full">
            <h2 className="mt-5 text-center w-full text-xl font-bold">{chef_name}</h2>
            <h2 className='mt-5 ml-2'>{years_of_experience} <span className='ml-1'>Years of experience</span></h2>
            <h2 className='ml-2'><span className='flex'><GiHotMeal className='text-black text-lg mr-2'/><span>{number_of_recipes}</span><span className='ml-1'>Recipes</span></span></h2>
            <h2 className='ml-2'><span className='flex'><SlLike className='text-black text-lg mr-2'/><span>{likes}</span><span className='ml-1'>Likes</span></span></h2>
            <Link className="w-full" to={`/chef/${id}`}><button className="btn w-full mt-5 bg-red-600 hover:bg-red-700 border-0">View Recipes</button></Link>
            </div>
        </div>
    );
};

export default ChefCard;