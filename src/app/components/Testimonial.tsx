import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div>
      <div className="container pt-16 pb-16">
        <h2 className="font-medium text-2xl pb-4 text-center sm:text-left">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-5">
          {/* Left Card */}
          <div className="border border-gray-300 bg-green-200 rounded-2xl grid place-items-center p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-3">
              <Image
                className="rounded-full inline-block"
                src="/img/user.jpg"
                alt="dp"
                width={80}
                height={80}
              />
              <h2 className="text-gray-500 font-black text-[20px]">
                George Smith
              </h2>
              <p className="text-sm sm:text-base">CEO & Founder Invision</p>
              <Image
                className="inline-block py-2"
                src="/img/quotes.webp"
                alt="quotes"
                height={60}
                width={60}
              />
              <p className="max-w-[200px] text-gray-500 text-sm sm:text-base">
                Lorem Ipsum Dolor Amet sit constructor, Lorem Ipsum Dolor Amet
                sit constructor
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-red-600 bg-[url(/img/cta-banner.webp)] bg-cover h-[400px] sm:h-[500px] rounded-2xl grid place-items-center">
            <div
              className="bg-[#ffffffab] w-full max-w-[90%] sm:max-w-[300px] md:max-w-[500px] rounded-xl py-8 px-4 sm:px-8 grid place-items-center gap-3"
            >
              <button className="bg-black text-white p-2 rounded-md">
                25% DISCOUNT
              </button>
              <h2 className="font-extrabold text-xl sm:text-2xl text-[#8f2d56] text-center">
                Summer Collection
              </h2>
              <p className="text-gray-600 text-sm sm:text-[20px] text-center">
                Starting from Rs.900 <b>Shop Now</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
