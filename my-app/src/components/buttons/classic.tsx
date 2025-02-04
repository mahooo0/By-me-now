'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ClassicBtn({ children }: { children: string }) {
    return (
        <motion.button
            whileHover={{
                scale: 1.05,
                backgroundColor: '#A8AFCC',
                color: '#0F172A',
                boxShadow: '0px 4px 15px rgba(168, 175, 204, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full text-[16px] font-normal py-[13px] text-center px-auto border border-[#A8AFCC] bg-transparent text-[#A8AFCC] overflow-hidden relative"
        >
            {children}
        </motion.button>
    );
}
