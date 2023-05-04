import React from "react";

const TipCard = ({ tip }) => {
  const { id, title, description } = tip;
  return (
    <div className="flex flex-col bg-gradient-to-t from-transparent to-orange-300 rounded-lg p-2 m-2 h-[350px] my-4">
      <div className="flex flex-col items-start text-left h-full">
        <h2 className="mt-5 text-center w-full text-xl font-bold text-red-600 drop-shadow-lg">
          {title}
        </h2>
        <h2 className="mt-6 ml-2 drop-shadow-md text-center">{description}</h2>
      </div>
    </div>
  );
};

export default TipCard;
