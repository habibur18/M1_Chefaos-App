import React from "react";
import Chefs from "../Home/ChefSection/Chefs";

import { useLoaderData } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import DisplayChefs from "../Home/ChefSection/DisplayChefs";
import useChefsData from "../ChefsAPI/ChefsAPI";

const OurChefs = () => {
  const chefs = useChefsData();
  // const chefs = useLoaderData();
  // for route title
  useTitle("Our Chefs");
  return (
    <div>
      <DisplayChefs chefs={chefs} />
    </div>
  );
};

export default OurChefs;
