import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefHeader from "../shared/ChefHeader";
import Recipe from "../shared/Recipe";

const Chef = () => {
  const [isLoading, setIsLoading] = useState(true);
  const data = useLoaderData();
  const { chef_picture, recipes, _id } = data;
  // console.log(data);
  useEffect(() => {
    if (recipes.length > 0) {
      setIsLoading(false);
    }
  }, [recipes]);

  return (
    <div>
      <ChefHeader data={data}></ChefHeader>

      {isLoading ? (
        <div
          style={{ border: "32px solid orange" }}
          class="mx-auto my-7 w-[300px] h-[300px] rounded-full animate-pulse"
        ></div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 mb-4">
          {recipes.map((recipe) => (
            <Recipe recipe={recipe} key={_id}></Recipe>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chef;
