import Link from "next/link";
import React from "react";


export default function Navbar() {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-gray-500">
          <Link href="#" className="navbar__link relative">
            HOME
          </Link>
          <Link href="#" className="navbar__link relative">
            CATEGORIES
          </Link>
          <Link href="#" className="navbar__link relative">
            MEN'S
          </Link>
          <Link href="#" className="navbar__link relative">
            WOMEN'S
          </Link>
          <Link href="#" className="navbar__link relative">
            JEWELLERY
          </Link>
          <Link href="#" className="navbar__link relative">
            PERFUMES
          </Link>
          <Link href="#" className="navbar__link relative">
            BLOG
          </Link>
          <Link href="#" className="navbar__link relative">
            HOT OFFERS
          </Link>
        </div>
      </div>
    </div>
  );
}
