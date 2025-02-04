'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import UnderlineBtn from '../buttons/underline';

export default function MobileBar({ onclose }: { onclose: () => void }) {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-[100%] h-[100vh] fixed top-0 bg-black bg-opacity-60 flex justify-start left-0 backdrop-blur-xl z-[150] px-6"
            >
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%' }}
                    exit={{ x: '-100%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-full"
                >
                    <div className="flex flex-row justify-between items-center py-3 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-row gap-6 items-center justify-center w-fit"
                        >
                            <Image
                                width={60}
                                height={60}
                                src="/svgs/logo.svg"
                                alt="Logo"
                                className="w-[40px] h-[40px]"
                            />
                            <h2 className="text-[28px] max-sm:hidden font-medium text-[#A8AFCC] font_Playfair">
                                Buy Me Now
                            </h2>
                        </motion.div>
                        <button onClick={onclose}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 40 40"
                                strokeWidth="2"
                                className="fill-none shrink-0 stroke-white h-6 w-6"
                            >
                                <path d="M32.79 7.15 7.21 32.74M7.21 7.15l25.58 25.59"></path>
                            </svg>
                        </button>
                    </div>
                    <h3 className="text-[#A8AFCC] text-[32px] border-b border-[#A8AFCC] w-1/2">
                        Pages
                    </h3>

                    <div className="flex flex-col ">
                        <UnderlineBtn>Cars</UnderlineBtn>
                        <UnderlineBtn>About us</UnderlineBtn>
                        <UnderlineBtn>Contact us</UnderlineBtn>
                        <UnderlineBtn>About Developer</UnderlineBtn>
                        <UnderlineBtn>Blogs</UnderlineBtn>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
