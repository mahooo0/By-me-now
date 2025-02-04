'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Description, Title } from '@/components/text';
import Card from './card';

export default function ModelsSection() {
    return (
        <section className="w-full h-full flex flex-col justify-center  items-center font_Playfair px-6 max-sm:px-3 gap-3 py-9">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false }}
            >
                <Title className=" text-center ">
                    Standing on the shoulders of giants
                </Title>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false }}
                className="w-full flex justify-center"
            >
                <Description className=" w-[48%] max-sm:w-[80%] text-center font_Playfair">
                    BUGATTI stands for hundreds of race-winning cars, iconic
                    touring models and passionate employees with a strong-minded
                    and exuberant ‘patron’
                </Description>
            </motion.div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-[60px] mt-[36px] md:px-[40px] sm:px-[30px] px-[16px] gap-9">
                {/* {Array.from({ length: 6 }).map(() => (
                    <Card />
                ))} */}
                {Array.from({ length: 6 }).map((_, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: index * 0.2,
                            ease: 'easeOut',
                        }}
                        viewport={{ once: false }}
                    >
                        <Card />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
