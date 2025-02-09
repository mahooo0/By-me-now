'use client';
import { motion } from 'framer-motion';
import ProductCard from './Card';

export default function Products() {
    return (
        <motion.div
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-[60px] md:px-[30px] px-4 lg:gap-10 md:gap-7 gap-5 justify-between w-full mt-[60px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
                },
            }}
        >
            {Array.from({ length: 9 }).map((_, index) => (
                <motion.div
                    key={index}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6 },
                        },
                    }}
                >
                    <ProductCard />
                </motion.div>
            ))}
        </motion.div>
    );
}
