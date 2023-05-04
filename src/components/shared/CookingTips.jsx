import React from "react";
import { MdTipsAndUpdates } from "react-icons/md";
import TipCard from "./TipCard";
import { useState, useEffect } from "react";
const CookingTips = () => {
  const [tips, setTips] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/tips`)
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);
  return (
    <div>
      <section
        className="w-full flex flex-col items-center justify-center pt-10 pb-10 px-2 bg-orange-100"
        id="ProTips"
      >
        <MdTipsAndUpdates className="text-7xl text-amber-500 mb-4" />
        <h2 className="text-lg lg:text-3xl font-bold">_Pro Tips_</h2>
        <p className="text-center font-medium tracking-wider mt-6 text-orange-700">
          Cooking is an art.<br></br>But always keep these things in mind to
          cook the best possible meal.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center mt-8">
          {tips.tips?.map((tip) => (
            <TipCard key={tip.id} tip={tip}></TipCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CookingTips;
