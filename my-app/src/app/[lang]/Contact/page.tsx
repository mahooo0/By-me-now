'use client';

import { motion } from 'framer-motion';
import { Description, Title } from '@/components/text';
import React from 'react';
import Forum from '@/components/Contact/Forum';

export default function Page() {
    return (
        <motion.div
            className="relative "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className=" w-full z-20 flex lg:flex-row flex-col mt-[100px] gap-10 lg:px-16 md:px-10 px-3 justify-between">
                <div className="flex flex-col gap-6 text-white font-sans">
                    <motion.div
                        className="flex flex-row gap-2 text-[14px] items-center"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.6,
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                    >
                        {['Shop all', 'Shop all', 'Shop all'].map(
                            (text, index) => (
                                <motion.div
                                    key={`text-${index}`}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <p>{text}</p>
                                </motion.div>
                            )
                        )}
                    </motion.div>
                    <Title>Contact Us</Title>
                    <Description>
                        DescriptionDescriptionDescription Description
                        Description
                    </Description>
                    <div className="flex flex-col gap-5">
                        {Array(3)
                            .fill(0)
                            .map((_, index) => (
                                <div
                                    key={index}
                                    className="flex flex-row gap-3"
                                >
                                    <svg
                                        width="20"
                                        height="16"
                                        viewBox="0 0 20 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18 0H2C0.897 0 0 0.897 0 2V14C0 15.103 0.897 16 2 16H18C19.103 16 20 15.103 20 14V2C20 0.897 19.103 0 18 0ZM18 2V2.511L10 8.734L2 2.512V2H18ZM2 14V5.044L9.386 10.789C9.56111 10.9265 9.77733 11.0013 10 11.0013C10.2227 11.0013 10.4389 10.9265 10.614 10.789L18 5.044L18.002 14H2Z"
                                            fill="#F3F2F9"
                                        />
                                    </svg>
                                    <p>hello@relume.io</p>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="lg:w-2/5 w-full">
                    <Forum />
                </div>
            </div>
            <motion.img
                src="https://s3-alpha-sig.figma.com/img/3539/2c5c/673082e1548104832145156b6cf1f570?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=X9h-C~zHLTc3NdXI1NIT00W44Bllve8JvfQTiXQa4pOlqmLTRTfeqrb632f5RhR26XXAEs5uaVXqcVAWjD5otN1rIlo4Xlq1ws0H538DPtqNmJDTiPffVRU3X~pSdx4sYs0qAqEhay9sxNbIyYhxRNxka7~z7DoWHzXuIisq4jkwa3MuGRjzBignNdJuHlJmgUQx1wtuPGydDooQG4gcBt4~s8MBw0IQK5faHaih3ZEejzHJkwWY~sN0H6WM-VKan9UgqIwKuMVv6ULku5FE~~LjuzEI7hJHH5X8fPliq12Si2b9YRN7tuHo1U~ZK-o-nB943h22L5gTpchIc5QPhQ__"
                className="lg:w-full  absolute z-[-1] lg:top-[-100px] top-1/2 left-0"
                alt=""
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            />
        </motion.div>
    );
}
