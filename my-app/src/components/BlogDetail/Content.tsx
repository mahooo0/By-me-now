'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Sheare from './Sheare';
import { Description, Title } from '../text';
export default function BlogContent() {
    return (
        <div className="mt-[40px]">
            <div className="flex flex-row justify-between px-9 max-sm:px-3">
                <motion.div
                    className="flex flex-row gap-2 text-white text-[14px]  items-center "
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6, staggerChildren: 0.2 },
                        },
                    }}
                >
                    {['Shop all', 'Shop all', 'Shop all'].map((text, index) => {
                        if (index === 2) {
                            return (
                                <>
                                    {' '}
                                    <motion.div
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                    >
                                        <p>{text}</p>
                                    </motion.div>
                                </>
                            );
                        }
                        return (
                            <>
                                {' '}
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <p>{text}</p>
                                </motion.div>
                                <motion.svg
                                    key={index}
                                    width="16"
                                    height="17"
                                    viewBox="0 0 16 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <path
                                        d="M6.47099 11.7998L10.2757 7.9951L6.47099 4.19043L5.52832 5.1331L8.39032 7.9951L5.52832 10.8571L6.47099 11.7998Z"
                                        fill="#F3F2F9"
                                    />
                                </motion.svg>
                            </>
                        );
                    })}
                </motion.div>
                <div className=" block max-sm:hidden">
                    <Sheare />
                </div>
            </div>
            <div className="text-white px-9 max-sm:px-3 flex flex-col items-center justify-center mt-8">
                <Title className=" w-full">Introduction</Title>
                <Description className="mt-6 ">
                    Introduction Introduction Introduction
                    IntroductionIntroductionIntroductionIntroduction
                    IntroductionIntroduction Introduction Introduction
                    Introduction Introduction Introduction Introduction
                    Introduction Introduction Introduction Introduction
                    Introduction
                </Description>
                <div className="w-1/2 flex flex-col justify-center items-center border-b border-white mt-10">
                    <p>Share this post</p>
                    <Sheare />
                </div>
            </div>
        </div>
    );
}
