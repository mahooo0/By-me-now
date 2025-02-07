import AnimatedSplineSection from '@/components/about-developer/AnimatedSplineSection';
import AnimatedTextSection from '@/components/about-developer/AnimatedTextSection';

import React from 'react';

export default function Page() {
    return (
        <div className="flex lg:flex-row flex-col">
            {/* Animated Text Section */}
            <AnimatedTextSection />
            {/* Animated Spline Section */}
            <AnimatedSplineSection />
        </div>
    );
}
