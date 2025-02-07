'use client';
import { motion } from 'framer-motion';
import React from 'react';
export default function AnimatedTextSection() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="lg:w-1/2 w-full lg:h-[100vh] h-fit lg:mt-0 mt-[80px] text-[#A8AFCC] flex flex-col justify-center pl-[50px] gap-7"
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:text-5xl md:text-4xl text-3xl font-bold"
                >
                    HELLO . I am Mah000
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="lg:text-2xl md:text-xl text-base font-medium"
                >
                    I use my passion and skills to create digital products and
                    experiences. As an independent, I also work with web
                    agencies, companies, startups, and individuals to create a
                    blueprint for the digital business. I am always open to
                    working with innovative minds on impactful and exciting
                    projects.
                </motion.p>
            </motion.div>
        </>
    );
}
