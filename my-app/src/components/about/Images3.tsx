'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Description, Title } from '../text';

export default function Images3() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setScrollY(window.scrollY);
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="text-center flex flex-col gap-7 mt-10 h-[130vh]">
            <Title>Title</Title>
            <Description>
                Description Description Description Description Description
            </Description>
            <div className="w-full flex items-center relative px-[40px]">
                <img
                    className="w-[55%] h-auto"
                    src="https://bugatti.imgix.net/67477399f40f917de7d13395/tourbillon-modelpage-rolling-chassis-05.jpg?auto=format,compress&cs=srgb&sharp=10&w=594&dpr=2.0000000298023224"
                    alt="Bugatti Car"
                />
                <motion.img
                    className="w-[50%] hidden lg:block h-auto absolute top-[210vh] right-[48px] "
                    src="https://bugatti.imgix.net/67477399f40f917de7d13395/tourbillon-modelpage-rolling-chassis-05.jpg?auto=format,compress&cs=srgb&sharp=10&w=594&dpr=2.0000000298023224"
                    alt="Bugatti Car Animated"
                    style={{
                        transform: `translateY(${-scrollY * 0.2}px)`,
                    }}
                />
            </div>
        </div>
    );
}
