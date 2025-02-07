'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import NavItem from './navItem';
import LanguageSwitcher from './language';
import MobileBar from './mobileBar';

export default function Header() {
    const [isMobileBarOpen, setIsMobileBarOpen] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false); // hide header when scrolling down
            } else {
                setIsVisible(true); // show header when scrolling up
            }
            setLastScrollY(window.scrollY); // update last scroll position
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    if (!isMobileBarOpen)
        return (
            <motion.header
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-row fixed top-0 z-50 justify-between lg:justify-center max-sm:px-[12px] px-[27px] py-1 items-center border-b border-[#FFFFFF] backdrop-blur-lg w-full"
            >
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
                        className="max-sm:w-[30px] w-[40px] h-[40px]"
                    />
                    <h2 className="lg:text-[32px] md:text-[24px] max-sm:hidden font-medium text-[#A8AFCC] font_Playfair">
                        Buy Me Now
                    </h2>
                </motion.div>

                <nav className="w-fit h-fit text-[20px] font-medium lg:flex hidden flex-row mx-auto">
                    <ul className="flex flex-row gap-4 text-[#A8AFCC] justify-end min-h-[40px] items-end">
                        {[
                            'Cars',
                            'About us',
                            'About developer',
                            'Blogs',
                            'Contact us',
                        ].map((item, index) => (
                            <NavItem key={index} item={item} index={index} />
                        ))}
                    </ul>
                </nav>
                <div className="w-[260px] hidden lg:flex justify-end">
                    <LanguageSwitcher />
                </div>
                <button
                    onClick={() => {
                        setIsMobileBarOpen(!isMobileBarOpen);
                    }}
                    className="lg:hidden flex"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#ffffff"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </motion.header>
        );
    return <MobileBar onclose={() => setIsMobileBarOpen(!isMobileBarOpen)} />;
}
