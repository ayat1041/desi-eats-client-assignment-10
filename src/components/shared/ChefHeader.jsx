import React from "react";
import { GiHotMeal } from "react-icons/gi";
import { SlLike } from "react-icons/sl";
const ChefHeader = ({ data }) => {
  const { chef_name, bio, likes,number_of_recipes,years_of_experience, chef_picture } = data;
  const banner = 'https://user-images.githubusercontent.com/57280365/236184950-97bb1880-51e1-4b00-b18c-078a82f973d1.jpg'
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{backgroundImage : `url(${banner})`}}
    >
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] lg:bg-gradient-to-r from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.7)]"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 justify-between">
        <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            <strong className="block font-extrabold text-yellow-400 mt-2">
              {chef_name}.
            </strong>
          </h1>
          <p className="text-white mt-4">{bio}</p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <div className="bg-yellow-200 p-4 flex flex-col items-center rounded-lg m-2">
                <SlLike className="text-black text-lg" />
                <span className="mt-3">{likes}</span>
            </div>
            <div className="bg-yellow-200 p-4 flex flex-col items-center rounded-lg m-2">
                <GiHotMeal className="text-black text-lg" />
                <span className="mt-3">{number_of_recipes}</span>
            </div>
            <div className="bg-yellow-200 p-4 flex flex-col items-center rounded-lg m-2">
                <span className="font-bold">XP</span>
                <span className="mt-3">{years_of_experience}</span>
            </div>
          </div>
        </div>
        <div>
        <img className="sm:w-full lg:w-[300px] h-[300px] object-cover object-top rounded-full m-0 mt-6 mx-auto lg:mt-0 lg:mr-14 border-4 border-yellow-500" src={chef_picture} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ChefHeader;
