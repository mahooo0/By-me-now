'use client';
import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
export default function AnimatedSplineSection() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="z-10 relative lg:h-[100vh] max-sm:h-[70vh] lg:w-[60%] max-sm:w-full overflow-hidden"
            >
                <Spline
                    scene="https://prod.spline.design/yC-pBOOvzdpoyrTC/scene.splinecode"
                    className="scale-[1.2]"
                />

                {/* Floating Button Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="absolute top-0 left-[20px] w-full h-full flex items-end"
                >
                    <div className="relative mb-10">
                        <p className="md:text-[30px] text-[18px] font-semibold text-[#A8AFCC] font_Playfair">
                            I am not this one
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-[#A19F92] -translate-x-5 rounded-2xl px-4 py-2 max-sm:px-2 max-sm:py-1 lg:text-base text-[12px] font-semibold"
                        >
                            Michelangelo&apos;s David
                        </motion.button>
                        <svg
                            className=" absolute right-[-65%] top-[-4%] scale-95 max-md:w-[120px] max-md:top-[-40%]  "
                            width="195"
                            height="101"
                            viewBox="0 0 195 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g opacity="0.9796">
                                <path
                                    d="M4.00576 4.45909C14.8008 3.94468 37.1404 8.17393 42.8526 10.3744C48.5649 12.5749 72.4045 21.8673 72.4797 32.7488C72.5556 43.6304 55.4695 54.0984 36.3572 51.4944C17.2449 48.8904 2.08257 36.4223 2.01778 25.7068C1.95298 14.9923 14.4605 5.62289 30.4038 2.92492C46.3479 0.224943 74.0793 10.835 65.3956 31.991"
                                    stroke="#F3DBC7"
                                />
                            </g>
                            <g opacity="0.9796">
                                <path
                                    d="M60.4613 59.7857C60.2849 63.9798 59.7935 67.6093 61.352 71.6426C65.9042 83.4281 75.9795 92.774 87.9189 96.1107C94.3065 97.8948 101.48 98.9861 108.102 98.1084C121.403 96.3464 135.426 87.018 145.79 79.2482C166.366 63.8218 182.09 40.7414 181.974 14.2184C181.705 16.624 184.222 19.6004 185.293 21.5832C188.432 27.396 190.633 33.7048 193.325 39.7273C193.632 37.2989 192.204 31.2042 191.937 29.8997C191.065 24.599 189.469 19.443 187.194 14.5762C186.504 13.7453 186.022 12.7609 185.791 11.7057C182.784 11.5916 180.087 12.6503 177.7 14.8796C170.571 18.9136 163.93 24.2052 157.804 29.6276"
                                    stroke="white"
                                />
                            </g>
                        </svg>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
