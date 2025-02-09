'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Images() {
    return (
        <div>
            {/* Animated Text & Icons */}
            <motion.div
                className="flex flex-row gap-2 text-white text-[14px] px-9 items-center max-sm:px-3"
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

            {/* Animated Image Grid */}
            <motion.div
                className="flex lg:flex-row flex-col w-full gap-4 px-9 mt-[24px] max-sm:px-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2,
                            delayChildren: 0.1,
                        },
                    },
                }}
            >
                {/* Large Image */}
                <motion.div
                    className="lg:w-1/2 w-full h-full aspect-square bg-black bg-opacity-20"
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <img
                        src="/images/mustang.png"
                        alt=""
                        className="w-full h-full"
                    />
                </motion.div>

                {/* Small Images Grid */}
                <motion.div
                    className="lg:w-1/2 w-full max-sm:hidden overflow-hidden aspect-square flex flex-col gap-4"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 },
                        },
                    }}
                >
                    {/* Row 1 */}
                    <motion.div className="w-full h-1/2 flex flex-row gap-4">
                        <motion.img
                            src="/images/mustang.png"
                            className="w-[54%] bg-black bg-opacity-20"
                            alt=""
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        />
                        <motion.img
                            src="/images/mustang.png"
                            className="w-[45%] bg-black bg-opacity-20"
                            alt=""
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        />
                    </motion.div>

                    {/* Row 2 */}
                    <motion.div className="w-full h-1/2 flex flex-row-reverse gap-4">
                        <motion.img
                            src="/images/mustang.png"
                            className="w-[54%] bg-black bg-opacity-20"
                            alt=""
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        />
                        <motion.img
                            src="/images/mustang.png"
                            className="w-[45%] bg-black bg-opacity-20"
                            alt=""
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
