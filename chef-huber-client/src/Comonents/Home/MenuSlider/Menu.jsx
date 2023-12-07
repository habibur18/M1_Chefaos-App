import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"; // Import ReactDOM for modal rendering
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [spaceBetween, setSpaceBetween] = useState(30);

  useEffect(() => {
    fetch(
      "https://chef-hunter-chefaos-hcvs6lpld-randomhabibur.vercel.app/menu/v1/"
    )
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(2);
      }
    };
    const handleResizeSpace = () => {
      if (window.innerWidth >= 768) {
        setSpaceBetween(30);
      } else {
        setSpaceBetween(10);
      }
    };
    handleResize();
    handleResizeSpace();
    window.addEventListener("resize", handleResize);
    window.addEventListener("resizespace", handleResizeSpace);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resizespace", handleResizeSpace);
    };
  }, []);

  const openModal = (menu) => {
    setSelectedMenu(menu);
  };

  const closeModal = () => {
    setSelectedMenu(null);
  };

  const renderModal = () => {
    if (!selectedMenu) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 h-1/2 overflow-y-scroll">
          <button
            onClick={closeModal}
            className=" text-right w-full text-2xl text-yellow-700  hover:text-red-500"
          >
            Close
          </button>
          <div>
            <h2 className="text-3xl font-semibold">{selectedMenu.title}</h2>
            <h1>Menu Courses:</h1>
            <ul>
              {selectedMenu.courses.map((course, index) => (
                <li className="space-y-2" key={index}>
                  <h2 className="text-xl my-3 font-semibold">
                    {course.course_title}
                  </h2>
                  <ul>
                    {course.dishes.map((dish, i) => (
                      <li key={i}>{dish}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  // Render the modal using ReactDOM
  return (
    <div>
      <div
        style={{
          padding: "20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          // navigation={true} // Enable navigation arrows
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {menu.map((menu) => (
            <SwiperSlide key={menu.id}>
              <div key={menu.id}>
                <div className="relative">
                  <img
                    className="rounded-lg"
                    src={menu.image}
                    alt={menu.title}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10">
                    <div className="w-full h-full">
                      <div className="flex items-end h-full">
                        <div
                          style={{ color: "#fff" }}
                          className="p-5 space-y-4"
                        >
                          <p className="text-3xl font-semibold">{menu.title}</p>
                          <button
                            onClick={() => {
                              openModal(menu);
                            }}
                            className="border-b-2 text-2xl my-3 font-extralight"
                          >
                            See Menu
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Render the modal using ReactDOM */}
      {ReactDOM.createPortal(renderModal(), document.body)}
    </div>
  );
};

export default Menu;
