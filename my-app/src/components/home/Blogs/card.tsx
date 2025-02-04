'use client';
import UnderlineBtn from '@/components/buttons/underline';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: any) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } }),
};

const imgVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.6 } },
};

export default function BlogCard({ isRow = true, imgW = 'auto' }) {
    return (
        <div
            className={`flex ${
                isRow ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } md:gap-[85px] gap-6 flex-col text-[#A8AFCC] items-center w-fit z-10`}
        >
            <div className="flex sm:max-w-full flex-col justify-center max-w-[240px] gap-3">
                <motion.h4
                    className="text-[36px] font-bold"
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={0}
                >
                    BloG Title
                </motion.h4>
                <motion.p
                    className="w-full text-base"
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={1}
                >
                    Bllog description Bllog description Bllog description Bllog
                    description
                </motion.p>
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={2}
                >
                    <UnderlineBtn>Read</UnderlineBtn>
                </motion.div>
            </div>
            <motion.img
                className={`h-[${
                    imgW ? '345px' : 'auto'
                }] lg:w-[${imgW}] sm:w-full`}
                src={'/images/blog.png'}
                alt=""
                variants={imgVariants}
                initial="hidden"
                whileInView="visible"
            />
        </div>
    );
}
