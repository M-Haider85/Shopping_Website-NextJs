import React from "react";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-blackish text-gray-500 flex flex-col items-center justify-center text-center py-4">
      <div className="flex items-center gap-1">
        <span>Copyright</span>
        <MdOutlineCopyright />
        <b>H&H_Apparel.com</b>
      </div>
      <span>All Rights Reserved 2024.</span>
    </div>
  );
};

export default Footer;
