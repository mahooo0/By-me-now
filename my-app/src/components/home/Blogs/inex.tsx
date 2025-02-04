'use client';
import { Title } from '@/components/text';
import Image from 'next/image';
import React from 'react';
import BlogCard from './card';
import { motion } from 'framer-motion';

export default function Blogs() {
    return (
        <div>
            <article>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: false }}
                    className="flex felx-row gap-3 px-[47px] items-center  max-sm:px-3"
                >
                    <Image
                        width={62}
                        height={62}
                        src={'/svgs/star.svg'}
                        alt=""
                    />
                    <Title className="h-fit">Blogs</Title>
                </motion.div>
            </article>
            <div className="flex flex-col gap-9 px-[100px] max-sm:px-[12px]">
                <div className="flex flex-col  justify-start gap-9">
                    <BlogCard />
                    <BlogCard isRow={false} />
                </div>
                <div className="flex flex-col  justify-end items-end gap-9 w-full">
                    <BlogCard isRow={false} imgW="45vw" />
                    <BlogCard />
                </div>
                <BlogCard imgW="45vw" />
            </div>
        </div>
    );
}
