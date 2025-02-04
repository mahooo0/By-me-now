'use client';
import { motion, AnimatePresence } from 'framer-motion';

import ClassicBtn from '@/components/buttons/classic';
import React from 'react';

export default function Card() {
    return (
        <motion.div
            whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 20px rgba(168, 175, 204, 0.3)',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full h-full text-[#A8AFCC] relative overflow-hidden rounded-lg max-h-[600px]"
        >
            {' '}
            <img
                src="https://www.figma.com/file/Nna688oOLCIdcdl9Tj0myQ/image/106d7eadbb807fc169a53b3dba2d39f3a2c8e2a4"
                className="w-full h-full object-cover"
                alt=""
            />
            <div className="w-full h-full flex flex-col absolute top-0 justify-between items-center p-[36px]">
                <div className="">
                    <h4 className="text-base text-center">
                        Timeless elegance and speed
                    </h4>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/2ea6/6ef5/3ce7144012721dfbbd7320f5b2454502?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GgQ-KO9CS3CrUFhCkJkhrPDaDkK3lru9vfzI4SLK1kX00G~VLd13fMYgfuO7lE05THKQQuzZrWdi-sYb8f6S5DWlKQplI3GFSJv8jynY3uxMrHj1uKLUz~uKH63nHO-vuxMcVn8I4hhdz9tJfanBcP1qLLdtRFMOjGp7Ymrdta1rETBbcD~geBsOCuEN3oNBwhwcdjzoChisj0XibDli7y4cNeCIJ2SJsu9LB7RZukOIP6w0KcKjx0FZqDoDOtaMgl71-E7xVhnEiwQvNqbWB9WeThi2CF8DdUShXoo-OFKSk4t~fpDoerNsN-W3ZMzEvVxxb8BSp8yHcEglJqPOXw__"
                        alt=""
                    />
                </div>
                <ClassicBtn>Learn More</ClassicBtn>
            </div>
        </motion.div>
    );
}
