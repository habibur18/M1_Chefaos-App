// ImageGallery.jsx
import React, { useEffect, useState } from "react";
import MyMansonry from "./MyMansory";

const ImageGallery = () => {
  // Sample image URLs, replace with your own
  const imageUrls = [
    "https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/landing/header_hero_masonry/dishes/dish-162.jpg,w_210,h_295,c_1,q_80,fd_1,e_.webp",
    "https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/landing/landing02/personalize-your-menu_02.jpg,w_233,h_328,c_1,q_80,fd_1,e_.webp",
    "https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/landing/landing02/personalize-your-menu_01.jpg,w_233,h_306,c_1,q_80,fd_1,e_.webp",
    "https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/landing/header_hero_masonry/dishes/dish-94.jpg,w_210,h_240,c_1,q_80,fd_1,e_.webp",
    "https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/landing/landing02/experience_01.jpg,w_278,h_279,c_1,q_80,fd_1,e_.webp",
    "https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/landing/header_hero_masonry/guest/guest-50.jpg,w_210,h_240,c_1,q_80,fd_1,e_.webp",
    "https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/landing/header_hero_masonry/dishes/dish-184.jpg,w_210,h_309,c_1,q_80,fd_1,e_.webp",
    "https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/landing/header_hero_masonry/dishes/dish-88.jpg,w_210,h_280,c_1,q_80,fd_1,e_.webp",
    "https://d1hdnpfpyy58x9.cloudfront.net/context/frontend/landing/header_hero_masonry/dishes/dish-159.jpg,w_210,h_325,c_1,q_80,fd_1,e_.webp",
  ];

  return (
    <div
      style={{
        maxHeight: "500px",
        overflow: "hidden",
        clipPath:
          "polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 98%, 79% 94%, 49% 98%, 19% 94%, 0 98%)",
      }}
    >
      <MyMansonry imageUrls={imageUrls}></MyMansonry>
    </div>
  );
};

export default ImageGallery;
