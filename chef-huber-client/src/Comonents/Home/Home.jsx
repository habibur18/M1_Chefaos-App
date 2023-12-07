import React, { useEffect, useState } from "react";
import ImageGallery from "./TopSection/ImageGallery";
import DisplayChefs from "./ChefSection/DisplayChefs";
import Sponsor from "./sponsor/Sponsor";
import Menu from "./MenuSlider/Menu";
import useChefsData from "../ChefsAPI/ChefsAPI";
import { useLoaderData } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";

const Home = () => {
  // const chefs = useChefsData();
  const chefs = useLoaderData();
  // for route title
  useTitle("Home Page", chefs);
  return (
    <div className="p-5">
      <div className=" my-32 flex flex-col items-center md:flex-col lg:flex-row gap-16 overflow-hidden">
        <div style={{ minWidth: "400px" }} className="text-center lg:ml-48">
          <h1 className="text-4xl font-semibold">Private Chef in Dhaka</h1>
          <p className="my-4 text-lg">
            Hire one of our 13 Private Chefs in Dhaka and personalize your menu,
            300 clients in Dhaka have already booked their chef!
          </p>
          <button className="text-lg px-14 py-3 rounded-full bg-yellow-400">
            Start
          </button>
        </div>
        <div>
          {/* credit >> https://www.youtube.com/@nastydeveloper5260/videos */}
          <ImageGallery />
        </div>
      </div>
      <main style={{ maxWidth: "1200px" }} className="mx-auto">
        {/* Chef showcase */}
        <section>
          <DisplayChefs chefs={chefs} />
        </section>
        {/* sponsor section */}
        <section>
          <h1 className="text-4xl text-center font-semibold">Our Sponsors</h1>
          <div>
            <Sponsor />
          </div>
        </section>
        <section>
          <Menu />
        </section>
      </main>
    </div>
  );
};

export default Home;
