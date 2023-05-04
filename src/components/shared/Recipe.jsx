import React from "react";
// const Rating = require("react-rating");
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Recipe = ({ recipe }) => {
  const { recipe_name, ingredients, method, rating, recipe_image,_id } = recipe;
  return (
    <div className="bg-yellow-200 p-4 m-4 rounded-md flex flex-col items-center shadow-lg">
      <h2
        className="text-center min-w-full text-3xl mb-6"
        style={{ fontFamily: "'Skranji', cursive" }}
      >
        {recipe_name}
      </h2>
      <img
        className="h-[300px] rounded-xl border-4 border-yellow-300"
        src={recipe_image}
        alt=""
      />
      <div className="w-full mt-4 mb-2">
      <Rating className="mx-auto" style={{ maxWidth: 150 }} value={4} ReadOnly />
      </div>
      <h2 className="mt-6 mb-6 text-xl font-semibold w-full text-left">
        Ingredients
      </h2>
      <ul className="list-disc p-4">
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <h2 className="mt-6 mb-6 text-xl font-semibold w-full text-left">
        Method
      </h2>
      <p className="mb-4">{method}</p>
      <button className="btn bg-red-600 text-white w-full border-0 mt-auto">Mark as Favorite</button>
    </div>
  );
};

export default Recipe;
