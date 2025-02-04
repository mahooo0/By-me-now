import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function UnderlineBtn({ children }: { children: string }) {
    const [Hovered, setHovered] = useState<boolean>(false);

    return (
        <motion.button
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="h-[40px] w-fit"
        >
            <motion.div
                className="lg:text-[26px] md:text-[24px] sm:text-[18px] font-medium text-[#A8AFCC] flex flex-row gap-2 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'spring', stiffness: 50 }}
            >
                <motion.div
                    initial={{ rotate: '0deg' }}
                    animate={{ rotate: Hovered ? '45deg' : '0deg' }}
                >
                    <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.46555 14.3455L0.0529122 12.9329L10.5572 2.41051H2.44354L2.46165 0.454545H13.9258V11.9368H11.9517L11.9698 3.82315L1.46555 14.3455Z"
                            fill="#F3F2F9"
                        />
                    </svg>
                </motion.div>

                <p> {children}</p>
            </motion.div>
            <motion.div
                initial={{ width: '0%' }}
                animate={{ width: Hovered ? '100%' : '0%' }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="h-[2px] bg-[#A8AFCC]  "
            />{' '}
        </motion.button>
    );
}
