'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function NavItem({
    item,
    index,
}: {
    item: string;
    index: number;
}) {
    const [Hovered, setHovered] = useState<boolean>(false);
    return (
        <motion.li
            key={index}
            whileHover={{
                scale: 1,
                fontSize: '24px',
            }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="duration-150 cursor-pointer h-fit flex flex-col items-center relative"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        >
            {item}
            <motion.div
                initial={{ width: '0%' }}
                animate={{ width: Hovered ? '100%' : '0%' }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="h-[2px] bg-[#A8AFCC] absolute bottom-[-2px] left-0"
            />
        </motion.li>
    );
}
