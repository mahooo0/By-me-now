'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import UnderlineBtn from '../buttons/underline';

const Hero = () => {
    return (
        <section className="w-full  flex flex-col lg:flex-row overflow-hidden relative h-[100vh]">
            <div className="lg:w-1/2 w-full h-full block lg:absolute top-[2%] left-[5%] pt-[80px] max-md:px-[24px] px-3 max-sm:px-3">
                <div className="lg:h-[140px] h-[80px] w-[120%] overflow-hidden">
                    <motion.h1
                        initial={{ marginTop: '240px' }}
                        animate={{ marginTop: '0px' }}
                        transition={{ type: 'spring', stiffness: 50 }}
                        className="lg:text-[150px] text-[40px]  leading-[100px] mt-[100px]  font_Playfair text-[#A8AFCCB2] text-nowrap "
                    >
                        Just Buy{' '}
                    </motion.h1>
                </div>
                <h4 className="lg:text-[28px]  text-[16px] lg:w-[70%] w-full font_Playfair text-[#A8AFCCB2] ">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 50 }}
                    >
                        longer BUGATTI. Founded by Ettore Bugatti in 1909,
                        BUGATTI is a state-of-the-art hyper sports car marque
                        based in Molsheim, France. For more than 110 years, the
                        brand has been at the pinnacle of the automotive
                        industry, creating the world’s most powerful and
                        luxurious cars. Each car is still hand-assembled in the
                        Atelier in Molsheim.{' '}
                    </motion.span>
                </h4>
                <div className="flex flex-row gap-7 mt-4">
                    <UnderlineBtn>About us</UnderlineBtn>
                    <UnderlineBtn>Contact us</UnderlineBtn>
                </div>
            </div>
            <div className="lg:w-1/2 w-full lg:h-full overflow-hidden   " />

            <div className="w-[80%] lg:h-full md:h-[450px] sm:h-[400px] mt-0  h-[30vh]  ">
                <motion.div
                    className="w-full h-full  ml-[0%] mt-[-0%] relative "
                    initial={{ bottom: '100%', left: '100%', scale: 0.8 }}
                    animate={{ bottom: '10%', left: '10%', scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 50 }}
                >
                    <Image
                        alt="Mustang"
                        width={10000}
                        height={60}
                        className="w-[100%] h-auto rotate-[-8deg] absolute bottom-0 left-0"
                        src={'/images/mustang_PNG2.png'}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
