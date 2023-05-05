import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import LazyLoad from "react-lazy-load";

const Recipe = ({ recipe }) => {
  const { recipe_name, ingredients, method, rating, recipe_image, _id } =
    recipe;
  const [disable, setDisable] = useState(false);

  const handleToast = () => toast(`${recipe_name} is marked as favourite`);
  const handleDisable = () => {
    setDisable(true);
  };
  return (
    <div className="bg-yellow-200 p-4 m-4 rounded-md flex flex-col items-center shadow-lg">
      <h2
        className="text-center min-w-full text-3xl mb-6"
        style={{ fontFamily: "'Skranji', cursive" }}
      >
        {recipe_name}
      </h2>
      <LazyLoad offset={50}>
      <img
        className="h-[300px] rounded-xl border-4 border-yellow-300"
        src={recipe_image}
        alt=""
      />
      </LazyLoad>
      <div className="w-full mt-4 mb-2">
        <Rating
          className="mx-auto"
          style={{ maxWidth: 150 }}
          value={4}
          ReadOnly
        />
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
      {disable ? (
        <button
          onClick={() => {
            handleToast();
            handleDisable();
          }}
          className="btn bg-red-600 text-white w-full border-0 mt-auto"
          disabled
        >
          Marked as Favorite
        </button>
      ) : (
        <button
          onClick={() => {
            handleToast();
            handleDisable();
          }}
          className="btn bg-red-600 text-white w-full border-0 mt-auto"
        >
          Mark as Favorite
        </button>
      )}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      >
      </ToastContainer>
    </div>
  );
};

export default Recipe;
