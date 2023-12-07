import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/setting");
  };

  const [scrollingUp, setScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollingUp(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav
        className={`flex justify-between items-center px-5 py-5 transition-all ${
          scrollingUp ? "top-0" : "-top-32"
        } fixed w-full bg-white z-10 ${
          scrollingUp ? "animate-slideDown" : "animate-slideUp"
        }`}
      >
        <h1 className="text-4xl">Chefaos</h1>

        {/* Responsive Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <span className="text-2xl">&#10005;</span>
            ) : (
              <span className="text-2xl">&#9776;</span>
            )}
          </button>
        </div>

        {/* Menu Links */}
        <div className="space-x-3 hidden md:flex items-center gap-3 font-bold text-xl pl-3">
          <Link to="/">Home</Link>
          <Link to="/ourchefs">Our Chefs</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/chefregister">Chef Register</Link>
        </div>
        <div
          className={` space-x-8 font-semibold hidden md:flex items-center gap-3 pl-3`}
        >
          {/* Additional Links */}
          <div className="space-x-3 font-bold">
            <div className="flex items-center gap-5">
              {user ? (
                <div className="">
                  <button onClick={handleNavigate} className="text-[22px]">
                    Setting
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-slate-300 px-10 py-2 rounded-full"
                >
                  Login
                </Link>
              )}

              <Link className="bg-yellow-400 px-8 py-2 rounded-full">
                Find A Chef
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div>
        {isMenuOpen && (
          <div
            className={`z-10 border-8 font-bold mt-20 md:hidden flex justify-between flex-wrap items-center text-center gap-2 px-5 py-5 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <Link to="/">Home</Link>
            <Link to="/ourchefs">Our Chefs</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/chefregister">Chef Register</Link>
            <div className="space-x-3 font-bold">
              <div className="flex items-center gap-5">
                {user ? (
                  <div className="">
                    <button onClick={handleNavigate} className="text-[22px]">
                      Setting
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="bg-slate-300 px-10 py-2 rounded-full"
                  >
                    Login
                  </Link>
                )}

                <Link className="bg-yellow-400 px-8 py-2 rounded-full">
                  Find A Chef
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
