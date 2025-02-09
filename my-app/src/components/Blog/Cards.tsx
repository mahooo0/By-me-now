'use client';
import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from './Card';

export default function Cards() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                ease: 'easeOut',
                staggerChildren: 0.2,
            }}
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 font-sans lg:px-16 md:px-10 px-3 gap-8 mt-10"
        >
            {Array.from({ length: 9 }).map((_, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <BlogCard />
                </motion.div>
            ))}
        </motion.div>
    );
}
