'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Description, Title } from '../text';

export default function Bunner() {
    return (
        <section className="px-[48px]">
            <div className="relative">
                {/* Image with fade-in effect when in view */}
                <motion.img
                    className="w-full max-h-[80vh]"
                    src="https://bugatti.imgix.net/6759c970f4193bb1d69f0f19/06-BUGATTI_W16-Mistral_Japan.jpg?auto=format,compress&cs=srgb&sharp=10&w=1074&dpr=1.25"
                    alt=""
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                />

                {/* Overlay with text animations when in view */}
                <motion.div
                    className="bg-black bg-opacity-20 flex justify-center items-center text-white text-center absolute top-0 left-0 w-full h-full flex-col gap-4"
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Title className="text-white">Title</Title>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.6,
                            ease: 'easeOut',
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="max-w-[50%]"
                    >
                        <Description className=" text-white">
                            Description Description Description Description
                            Description Description Description Description
                            Description Description Description Description
                            Description Description Description Description
                            Description Description Description Description
                        </Description>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
