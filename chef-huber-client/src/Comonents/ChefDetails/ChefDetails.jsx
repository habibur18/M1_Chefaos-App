import React from "react";
import { useLoaderData } from "react-router-dom";
import "./ChefDetails.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { useState } from "react";
import { useEffect } from "react";

const ChefDetails = () => {
  const specificChefDetails = useLoaderData();
  console.log(specificChefDetails);
  const {
    chefPhotoUrl,
    chefName,
    yearsExperience,
    chefDescription,
    likes,
    numRecipes,
    recipes,
  } = specificChefDetails;
  console.log(recipes);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="chef-details-container bg-gray-200 py-10 px-3">
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div
          className={`container mx-auto flex flex-col md:flex-row gap-5 overflow-x-hidden
              chef-details-single-column
              chef-details-multi-column
          `}
        >
          <div className="chef-photo rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-600">
            <img
              style={{ minWidth: "500px", maxHeight: "600px" }}
              src={chefPhotoUrl}
              alt={chefName}
            />
          </div>
          <div className="chef-details lg:w-2/3 lg:mt-16">
            <h1 className="text-3xl font-bold mt-2">{chefName}</h1>
            <p className="text-gray-600">Experience: {yearsExperience} years</p>
            <p className="text-gray-600">Number of recipes: {numRecipes}</p>
            {chefDescription.length < 250 ? (
              <p className="text-gray-700 mt-4">
                {chefDescription} {chefDescription}
              </p>
            ) : (
              <p className="text-gray-700 mt-4">{chefDescription}</p>
            )}
          </div>
        </div>
        <div className="container mx-auto" id="show-recipes">
          <div className="">
            <h1 className="text-3xl font-semibold mt-2">Special Recipes</h1>
            <p className="text-gray-600 my-3">
              You can see top popular recipes {chefName} serve
            </p>
            <div>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {recipes.map((recipe, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="rounded-lg"
                      src={recipe.recipeImages}
                      alt={recipe.name}
                    />
                    <div>
                      <h1>{recipe.name}</h1>
                      <h1>Rating : {recipe.rating}</h1>
                      <button>View Details</button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
