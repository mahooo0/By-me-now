'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="w-full overflow-hidden h-[100vh] relative">
            <video className="w-full" autoPlay muted playsInline loop>
                <source
                    src="https://bugatti.imgix.video/677e5545dfc8a22d8949804e/tourbillon-hero-2025-hero-landscape.mp4?fm=mp4&res=high"
                    type="video/mp4"
                />
            </video>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className=" w-full h-full absolute top-0 right-0 flex justify-center items-center text-white"
            >
                <motion.article
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="max-w-[620px] text-center flex flex-col gap-6"
                >
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl font-medium"
                    >
                        Pour L’Éternité
                    </motion.p>
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-8xl font-semibold"
                    >
                        About US
                    </motion.h1>
                    <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-2xl font-medium"
                    >
                        Conceived from a blank canvas, the TOURBILLON converges
                        the immediate torque and flexibility of electric motors
                        with the spine-tingling emotion of a naturally aspirated
                        V16 engine.
                    </motion.h2>
                </motion.article>
            </motion.div>
        </section>
    );
}
