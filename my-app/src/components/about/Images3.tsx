'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { Description, Title } from '../text';

export default function Images3() {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY); // Update the scroll position
    };
    const imageMotion = {
        initial: { y: 0 },
        animate: {
            y: scrollY, // Limit the upward movement to 150px
            transition: { type: 'spring', stiffness: 50 },
        },
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        console.log('scrollY', scrollY);
    }, [scrollY]);
    return (
        <div className="text-center flex flex-col gap-7 mt-10">
            <Title>Title</Title>
            <Description>
                Description DescriptionDes criptionDes cription escriptionD
                escription
            </Description>
            <div className="w-full h-fit gap-16 grid grid-cols-6 flex-row">
                <div className="col-span-4 col-start-3">
                    <img
                        className=" w-full h-auto"
                        src="https://bugatti.imgix.net/67475b1ca32ff125e1a83242/tourbillon-modelpage-studio-28.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=926&fp-x=0.5&fp-y=0.5&dpr=1"
                        alt=""
                    />
                </div>
                <motion.div
                    variants={imageMotion}
                    animate={{
                        y: -Math.min(scrollY * 0.1, 2000), // Limit the upward movement to 150px
                        transition: { type: 'spring', stiffness: 50 },
                    }}
                    className="col-span-2 duration-300 -translate-y-10"
                >
                    <img
                        className=" w-full h-auto"
                        src="https://bugatti.imgix.net/67475f3fa32ff125e1a8341a/tourbillon-modelpage-studio-29_crop2.jpg?auto=format,compress&cs=srgb&sharp=10&fit=crop&ar=4:5&h=442&fp-x=0.16&fp-y=0.51&dpr=1"
                        alt=""
                    />
                </motion.div>
            </div>
            <div className="w-full h-fit gap-16 grid grid-cols-6 flex-row px-12">
                <div className="col-span-4 ">
                    <img
                        className=" w-full h-auto"
                        src="https://bugatti.imgix.net/67478249a32ff125e1a86089/tourbillon-modelpage-presskit-31.jpg?auto=format,compress&cs=srgb&sharp=10&w=798&dpr=2.0000000298023224"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
