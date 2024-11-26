'use client';

import Image from "next/image";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import {Pagination} from 'swiper/modules';
import Slider from "react-slick";
import Slide from "./Slide";

export default function Hero() {
 
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: '/img/banner-1.jpg',
            title: 'Trending Item for Women',
            mainTitle: "WOMEN'S LATEST FASHION BAGS",
            price: '$20',
        },
        {
            id: 1,
            img: '/img/banner-2.jpg',
            title: "Trending Item for Men",
            mainTitle: "MEN'S LATEST FASHION SALE",
            price: "$15",
        },
        {
            id: 2,
            img: '/img/banner-3.jpg',
            title: "Trending Accessories",
            mainTitle: "LATEST JEWELLERY",
            price: "$30",
        },
        {
            id: 3,
            img: '/img/banner-4.jpg',
            title: "Perfumes Sale Offer",
            mainTitle: "HOT SELLING PERFUMES",
            price: "$12",
        },
    ]

    return <div>
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
            {slideData.map((item) => (
                <Slide
                key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
                />
            ))}
            </Slider>
        </div>
    </div>
}
