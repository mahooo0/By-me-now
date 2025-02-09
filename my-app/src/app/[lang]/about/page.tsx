import Bunner from '@/components/about/bunner';
import Hero from '@/components/about/hero';
import Images3 from '@/components/about/Images3';
import ScrollVideo from '@/components/about/scrollvidion';
import React from 'react';

export default function page() {
    return (
        <div>
            <Hero />
            <ScrollVideo />
            <Images3 />
            <Bunner />
        </div>
    );
}
