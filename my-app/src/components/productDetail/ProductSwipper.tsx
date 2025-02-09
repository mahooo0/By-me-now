'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from '../product/Card';

export default function ProductSwipper() {
    const swiperRef = useRef<SwiperClass | null>(null);

    const handleNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const handlePrevSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    return (
        <div className="px-[80px] max-sm:px-7 relative">
            <button
                onClick={handlePrevSlide}
                className="px-2 py-2 bg-gray-300 rounded absolute top-[50%] left-5 max-sm:left-2 z-30"
            >
                <svg
                    width="24"
                    height="26"
                    viewBox="0 0 24 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.2177 17.5793L10.864 13.0046L15.1853 8.39932L13.845 6.99404L8.18388 13.014L13.8873 18.994L15.2177 17.5793Z"
                        fill="black"
                    />
                </svg>
            </button>
            <button
                onClick={handleNextSlide}
                className="px-2 py-2 bg-gray-300 rounded absolute top-[50%] right-5 max-sm:right-2 z-30"
            >
                <svg
                    className=" rotate-180"
                    width="24"
                    height="26"
                    viewBox="0 0 24 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.2177 17.5793L10.864 13.0046L15.1853 8.39932L13.845 6.99404L8.18388 13.014L13.8873 18.994L15.2177 17.5793Z"
                        fill="black"
                    />
                </svg>
            </button>

            <Swiper
                spaceBetween={50}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>{' '}
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>{' '}
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
