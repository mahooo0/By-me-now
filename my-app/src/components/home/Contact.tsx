'use client';
import Image from 'next/image';
import React from 'react';
import { Title } from '../text';
import ClassicBtn from '../buttons/classic';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: any) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } }),
};

export default function Contact() {
    return (
        <motion.section
            className="flex justify-center flex-col items-center gap-10 z-10"
            initial="hidden"
            whileInView="visible"
        >
            <motion.div variants={fadeInUp} custom={0}>
                <Title>Our latest news</Title>
            </motion.div>
            <motion.div
                className="bg-[#08090B] w-[90%] flex md:flex-row flex-col md:gap-12 gap-5"
                variants={fadeInUp}
                custom={1}
            >
                <motion.div
                    initial={{ opacity: 0, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <Image
                        width={1000}
                        height={10000}
                        alt=""
                        className="w-full h-full"
                        src={'/images/blog.png'}
                    />
                </motion.div>
                <motion.div
                    className="py-[160px] px-[48px] flex flex-col text-center justify-between text-[#FFFFFF]"
                    variants={fadeInUp}
                    custom={2}
                >
                    <div className="mb-[60px]">
                        <motion.h5
                            className="text-4xl "
                            variants={fadeInUp}
                            custom={3}
                        >
                            Contact Us
                        </motion.h5>
                        <motion.p
                            className="text-base mt-3"
                            variants={fadeInUp}
                            custom={4}
                        >
                            At BUGATTI, we translate our customers’ visions to
                            create unique pieces of personalized automotive art.
                        </motion.p>
                    </div>
                    <motion.div variants={fadeInUp} custom={5}>
                        <ClassicBtn>Contact Us</ClassicBtn>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}
