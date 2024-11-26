import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function HeaderTop() {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4 bg-sky-100">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
                <FaFacebook size={22} />
              </div>
            <div className="header_top__icon_wrapper">
              <FaSquareXTwitter size={22} />
            </div>
            <div className="header_top__icon_wrapper">
              <FaSquareInstagram size={22} />
            </div>
            <div className="header_top__icon_wrapper">
              <FaLinkedin size={22} />
            </div>
          </div>

          <div className="text-gray-500 text-[12px]">
            <b>FREE SHIPPING</b> THIS WEEK ORDER ABOVE - $55
          </div>


          <div className="flex gap-4">
            <select 
            className="text-gray-500 bg-blue-200 rounded-md text-[12px] w-[70px]"
            name="currency"
            id="currency"
            >
                <option value='USD $'>USD $</option>
                <option value='EUR €'>EUR € </option>
                <option value='PKR'>PKR</option>
            </select>
            <select 
            className="text-gray-500 bg-blue-200 rounded-md text-[12px] w-[80px]"
            name="language"
            id="language"
            >
                <option value='English'>English</option>
                <option value='French'>French</option>
            </select>

          </div>
        </div>
      </div>
    </div>
  );
}
