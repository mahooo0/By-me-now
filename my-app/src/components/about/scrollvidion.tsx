'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = [
    {
        title: 'Engineering Excellence',
        description:
            'With unparalleled aerodynamics and cutting-edge technology, the TOURBILLON sets a new benchmark in the automotive world.',
        position: 'top-12 left-12',
    },
    {
        title: 'Engineering Excellence',
        description:
            'With unparalleled aerodynamics and cutting-edge technology, the TOURBILLON sets a new benchmark in the automotive world.',
        position: 'top-12 left-12',
    },
    {
        title: 'Engineering Excellence',
        description:
            'With unparalleled aerodynamics and cutting-edge technology, the TOURBILLON sets a new benchmark in the automotive world.',
        position: 'top-12 left-12',
    },
    {
        title: 'Engineering Excellence',
        description:
            'With unparalleled aerodynamics and cutting-edge technology, the TOURBILLON sets a new benchmark in the automotive world.',
        position: 'top-12 left-12',
    },
    {
        title: 'Distinctly BUGATTI',
        description:
            'Instantly recognizable. The TOURBILLON draws upon 115 years of BUGATTI design DNA to evolve the ‘Forme Follows Performance’ philosophy into a new era. These are entirely new proportions, but unmistakably BUGATTI.',
        position: 'top-12 right-12',
    },
    {
        title: 'The Future of Luxury',
        description:
            'Combining artistry with performance, the TOURBILLON stands as a testament to the evolution of luxury hypercars.',
        position: 'bottom-12 left-12',
    },
    {
        title: 'Performance Redefined',
        description:
            'Pushing the limits of speed and efficiency, the TOURBILLON delivers an unmatched driving experience.',
        position: 'bottom-12 right-12',
    },
];

export default function ScrollVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState(0);
    const [isAtTop, setIsAtTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!videoRef.current || !containerRef.current) return;

            const { top, height } =
                containerRef.current.getBoundingClientRect();
            const scrollProgress = Math.min(
                1,
                Math.max(0, -top / (height - window.innerHeight))
            );

            // Control video playback
            const video = videoRef.current;
            const videoDuration = video.duration || 20;
            video.currentTime = scrollProgress * videoDuration;

            // Determine active section
            const sectionIndex = Math.min(
                SECTIONS.length - 1,
                Math.floor(scrollProgress * 7)
            );
            setActiveSection(sectionIndex);

            // Detect if the video container is at the top
            setIsAtTop(top <= 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative w-full h-[700vh]" ref={containerRef}>
            {/* Animated Sticky Video */}
            <motion.div
                // key={'section1'}
                initial={{ opacity: 0.5, scale: 0.9 }}
                animate={
                    isAtTop
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0.5, scale: 0.9 }
                }
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="sticky top-0 h-screen flex items-center justify-center bg-black"
            >
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                >
                    <source src="/videos/scrollVidio.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Sticky Text with Motion Animations */}
            <div className="sticky top-0 h-screen flex items-start justify-start pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={'section2'}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={
                            1 === activeSection
                                ? { opacity: 1, scale: 1, y: 0 }
                                : { opacity: 0, scale: 0.9, y: 30 }
                        }
                        exit={{ opacity: 0, scale: 0.9, y: -30 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className={`absolute top-12 left-12 max-w-md  p-5 rounded-lg text-white`}
                    >
                        <h4 className="text-3xl xl:text-4xl font-bold">
                            Engineering Excellence{' '}
                        </h4>
                        <p className="text-base mt-3">
                            With unparalleled aerodynamics and cutting-edge
                            technology, the TOURBILLON sets a new benchmark in
                            the automotive world.{' '}
                        </p>
                    </motion.div>
                    <motion.div
                        key={'section3'}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={
                            2 === activeSection
                                ? { opacity: 1, scale: 1, y: 0 }
                                : { opacity: 0, scale: 0.9, y: 30 }
                        }
                        exit={{ opacity: 0, scale: 0.9, y: -30 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className={`absolute top-12 flex flex-col items-center justify-center  mx-auto w-full text-center p-5 rounded-lg text-white`}
                    >
                        <h4 className="text-3xl xl:text-4xl font-bold max-w-md">
                            Engineering Excellence{' '}
                        </h4>
                        <p className="text-base mt-3  max-w-md">
                            With unparalleled aerodynamics and cutting-edge
                            technology, the TOURBILLON sets a new benchmark in
                            the automotive world.{' '}
                        </p>
                    </motion.div>
                    <motion.div
                        key={'section4'}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={
                            3 === activeSection
                                ? { opacity: 1, scale: 1, y: 0 }
                                : { opacity: 0, scale: 0.9, y: 30 }
                        }
                        exit={{ opacity: 0, scale: 0.9, y: -30 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className={`absolute top-12 right-12 max-w-md  text-end p-5 rounded-lg text-white`}
                    >
                        <h4 className="text-3xl xl:text-4xl font-bold">
                            Engineering Excellence{' '}
                        </h4>
                        <p className="text-base mt-3">
                            With unparalleled aerodynamics and cutting-edge
                            technology, the TOURBILLON sets a new benchmark in
                            the automotive world.{' '}
                        </p>
                    </motion.div>
                    <motion.div
                        key={'section5'}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={
                            4 === activeSection
                                ? { opacity: 1, scale: 1, y: 0 }
                                : { opacity: 0, scale: 0.9, y: 30 }
                        }
                        exit={{ opacity: 0, scale: 0.9, y: -30 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className={`absolute  bottom-12 left-12 max-w-md   p-5 rounded-lg text-white`}
                    >
                        <h4 className="text-3xl xl:text-4xl font-bold">
                            Engineering Excellence{' '}
                        </h4>
                        <p className="text-base mt-3">
                            With unparalleled aerodynamics and cutting-edge
                            technology, the TOURBILLON sets a new benchmark in
                            the automotive world.{' '}
                        </p>
                    </motion.div>
                    <motion.div
                        key={'section6'}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={
                            5 === activeSection
                                ? { opacity: 1, scale: 1, y: 0 }
                                : { opacity: 0, scale: 0.9, y: 30 }
                        }
                        exit={{ opacity: 0, scale: 0.9, y: -30 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className={`absolute   bottom-12 flex flex-col items-center justify-center  mx-auto w-full text-center p-5 rounded-lg text-white`}
                    >
                        <h4 className="text-3xl xl:text-4xl font-bold max-w-md">
                            Engineering Excellence{' '}
                        </h4>
                        <p className="text-base mt-3  max-w-md">
                            With unparalleled aerodynamics and cutting-edge
                            technology, the TOURBILLON sets a new benchmark in
                            the automotive world.{' '}
                        </p>
                    </motion.div>

                    <motion.div
                        key={'section7'}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={
                            6 === activeSection
                                ? { opacity: 1, scale: 1, y: 0 }
                                : { opacity: 0, scale: 0.9, y: 30 }
                        }
                        exit={{ opacity: 0, scale: 0.9, y: -30 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className={`absolute  bottom-12 right-12 text-end max-w-md   p-5 rounded-lg text-white`}
                    >
                        <h4 className="text-3xl xl:text-4xl font-bold">
                            Engineering Excellence{' '}
                        </h4>
                        <p className="text-base mt-3">
                            With unparalleled aerodynamics and cutting-edge
                            technology, the TOURBILLON sets a new benchmark in
                            the automotive world.{' '}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
