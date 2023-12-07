import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between flex-wrap">
        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4 md:mb-0">
          <h1 className="text-lg font-bold mb-4">Take a Chef</h1>
          <p className="mb-2">Private Chef in Other Countries</p>
          <p className="mb-2">Dhaka</p>
          <p className="mb-2">Follow us</p>
          <ul className="flex space-x-4 mb-4">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
          <p className="mb-2">Let's talk</p>
          <p className="mb-2">Phone: +1 (844) 905-1243</p>
          <p className="mb-2">Email: info@takeachef.com</p>
          <p className="mb-2">Secure payment</p>
          <p>Available payment methods</p>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Information</h2>
          <ul className="mb-4">
            <li>
              <a href="#">Sitemap</a>
            </li>
            <li>
              <a href="#">Gift</a>
            </li>
            <li>
              <a href="#">Chef register</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Sign in</a>
            </li>
            <li>
              <a href="#">Private Chef</a>
            </li>
          </ul>
          <h2 className="text-lg font-bold mb-4">Legal</h2>
          <ul>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Take a Chef international</h2>
          <ul>
            <li>
              <a href="#">Australia</a>
            </li>
            <li>
              <a href="#">Canada</a>
            </li>
            <li>
              <a href="#">France</a>
            </li>
            <li>
              <a href="#">Mexico</a>
            </li>
            <li>
              <a href="#">Spain</a>
            </li>
            <li>
              <a href="#">United Kingdom</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm">
          Copyright © 2023 Take a Chef. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Our Chefs with these information
        </p>
      </div>
    </footer>
  );
};

export default Footer;
