import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/img/men-belt.webp",
    title: "Men's Belt",
    desc: "Leather Belt For Men wearable in All Seasons.",
    rating: 4,
    price: "800",
  },
  {
    img: "/img/men-shoes.webp",
    title: "Men Shoes",
    desc: "Premium Quality Leather Shoes For Men.",
    rating: 5,
    price: "5000",
  },
  {
    img: "/img/perfume.webp",
    title: "Ladies Perfumes",
    desc: "Soothing Fragnance For Ladies.",
    rating: 4,
    price: "2450",
  },
  {
    img: "/img/rings.webp",
    title: "Rings",
    desc: "Best Quality Rings for Ladies.",
    rating: 3,
    price: "1200",
  },
  {
    img: "/img/kids.avif",
    title: "Kids T-Shirts",
    desc: "Cotton Fabric T-Shirts For Kids.",
    rating: 4,
    price: "1800",
  },
  {
    img: "/img/gloves.webp",
    title: "Gloves",
    desc: "Premium Quality Fighting Gloves Best For Striking Practice.",
    rating: 5,
    price: "2500",
  },
  {
    img: "/img/ladies-bag.webp",
    title: "Ladies Bag",
    desc: "Premium Leather Bags For Ladies.",
    rating: 3,
    price: "1500",
  },
  {
    img: "/img/shorts.webp",
    title: "Men's Shorts",
    desc: "Beach Short In Polyester Fabric.",
    rating: 5,
    price: "700",
  },
  {
    img: "/img/blue-shirt.jpg",
    title: "Men's Shirts",
    desc: "Best Quality Cotton Shirt In Sky Blue Colour.",
    rating: 4,
    price: "1200",
  },
  {
    img: "/img/jeans-jacket.webp",
    title: "Jeans Jacket",
    desc: "Denim Fabric Jeans Jacket For Men.",
    rating: 5,
    price: "3000",
  },
  {
    img: "/img/polo.jpg",
    title: "Men's Polo Shirts",
    desc: "Panel Stripe Polo Shirt In Pique Fabric.",
    rating: 5,
    price: "950",
  },
  {
    img: "/img/sweat.webp",
    title: "Sweatshirt",
    desc: "Branded Fleece Sweatshirt For Men.",
    rating: 4,
    price: "2200",
  },
];

export default function NewProducts() {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div
          className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3
xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10"
        >
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
