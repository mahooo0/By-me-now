'use client';

import React from 'react';
import { motion } from 'framer-motion';
import UnderlineBtn from '../buttons/underline';

export default function Vidiosection() {
    return (
        <motion.section
            className="flex flex-col justify-center items-center mt-8 z-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
        >
            <motion.h2
                className="lg:text-6xl md:text-4xl text-3xl text-[#A8AFCC] font-semibold font_Playfair text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false }}
            >
                Our latest news
            </motion.h2>

            <motion.div
                className="w-[80%] h-fit mt-7 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
            >
                <video className="w-full" autoPlay muted playsInline>
                    <source
                        src="https://cdn.bugatti.com/6759be66b0ae7505c3d3078b/mistral-iv-1-desktop-1.mp4?w="
                        type="video/mp4"
                    />
                </video>

                <motion.div
                    className="w-full text-[#A8AFCC] h-full absolute top-0 left-0 bg-black bg-opacity-40 flex justify-center items-center flex-col gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: false }}
                >
                    <h3 className="lg:text-5xl md:text-3xl text-xl text-[32px]  text-center font_Playfair">
                        Our latest news
                    </h3>
                    <p className="lg:text-[24px] md:text-xl sm:text-sm text-center font_Playfair max-w-4/5 lg:max-w-[45%]">
                        Setting a new benchmark at 453.91 km/h. A triumph of
                        passion, precision, and performance.
                    </p>
                    <UnderlineBtn>Contact us</UnderlineBtn>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
