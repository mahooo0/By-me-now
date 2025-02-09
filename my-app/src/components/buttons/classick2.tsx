'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ClassicBtn2({
    children,
    className,
}: {
    children: string;
    className?: string;
}) {
    return (
        <motion.button
            whileHover={{
                scale: 1.05,
                backgroundColor: '#0F172A',
                color: '#ffffff',
                boxShadow: '0px 4px 15px rgba(15, 23, 42, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`w-full text-[16px] font-normal py-[13px] text-center px-auto border border-[#0F172A] bg-transparent text-[#0F172A] overflow-hidden relative ${className}`}
        >
            {children}
        </motion.button>
    );
}
