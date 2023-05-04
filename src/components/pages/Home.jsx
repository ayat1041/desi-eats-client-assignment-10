import React from "react";
import Header from "../shared/Header";
import Chefs from "../shared/Chefs";
import CookingTips from "../shared/CookingTips";
import FoodHistory from "../shared/FoodHistory";
const Home = () => {
  return (
    <div>
      <Header></Header>
      <Chefs></Chefs>
      <CookingTips></CookingTips>
      <FoodHistory></FoodHistory>
    </div>
  );
};

export default Home;
