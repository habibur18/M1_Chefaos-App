import React from "react";
import { useNavigate } from "react-router-dom";
import "./chefs.css"; // Assuming you have additional custom styles

const Chefs = ({ chef }) => {
  const navigate = useNavigate();
  const {
    chefPhotoUrl,
    chefName,
    yearsExperience,
    likes,
    numRecipes,
    id,
    chefDescription,
  } = chef;

  const handleNavigate = () => {
    navigate(`/chefdetails/${id}`);
  };

  const truncatedDescription =
    chefDescription.length > 200
      ? chefDescription.slice(0, 200) + "..."
      : chefDescription;

  return (
    <div
      id="chefsCard"
      className="border-2 flex flex-col rounded-lg overflow-hidden transition-transform transform hover:scale-105"
    >
      <div
        className="w-full px-5 relative"
        style={{
          background: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
        }}
      >
        <div
          className="w-full md:hidden lg:block lg:h-80 bg-cover bg-center"
          style={{ backgroundImage: `url(${chefPhotoUrl})` }}
        />
      </div>
      <div className="bottom mt-auto p-3">
        <div>
          <div className="flex justify-between">
            <div className="border">
              <h3 className="text-2xl font-bold text-gray-800">{chefName}</h3>
              <p className="text-gray-600">Experience: {yearsExperience}</p>
              <p className="text-gray-600">Number of recipes: {numRecipes}</p>
            </div>
            <img className="w-32 lg:hidden" src={chefPhotoUrl} alt="" />
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-600">Likes: {likes}</p>
            <button
              className="px-2 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
              onClick={handleNavigate}
            >
              View Recipes
            </button>
          </div>
        </div>
        <p className="text-gray-700 mt-3">{truncatedDescription}</p>
        {chefDescription.length > 200 && (
          <button
            className="text-blue-500 hover:underline mt-2"
            onClick={handleNavigate}
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default Chefs;
