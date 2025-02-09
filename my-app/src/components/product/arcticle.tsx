'use client';
import { Title } from '@/components/text';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
export default function Arcticle() {
    return (
        <div>
            <article>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex felx-row gap-3 px-[47px] items-center  max-sm:px-3"
                >
                    <Image
                        width={62}
                        height={62}
                        src={'/svgs/star.svg'}
                        alt=""
                    />
                    <Title className="h-fit">Products</Title>
                </motion.div>
            </article>
        </div>
    );
}
