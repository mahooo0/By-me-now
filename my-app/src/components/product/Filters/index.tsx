'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TextInput from './textInput';
import Select from './select';

export default function Filters() {
    return (
        <motion.div
            className="lg:px-[60px] md:px-[30px] px-4 mt-[88px] flex-wrap "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Navigation List */}
            <motion.div
                className="w-full flex flex-col md:flex-row justify-between items-center text-white gap-4 md:gap-0"
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.15, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
                    <motion.li
                        className="underline"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        View all
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Category one
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Category two
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Category three
                    </motion.li>
                    <motion.li
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Category four
                    </motion.li>
                </motion.ul>

                {/* Animated Select */}
                <motion.select
                    className="bg-transparent border border-white px-4 py-2 mt-4 md:mt-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <option className="text-black" value="">
                        option2
                    </option>
                    <option className="text-black" value="">
                        option1
                    </option>
                    <option className="text-black" value="">
                        option3
                    </option>
                    <option className="text-black" value="">
                        option4
                    </option>
                </motion.select>
            </motion.div>

            {/* Inputs & Selects */}
            <motion.div
                className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-[57px] justify-between "
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.2, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <TextInput />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <TextInput />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Select />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Select />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
