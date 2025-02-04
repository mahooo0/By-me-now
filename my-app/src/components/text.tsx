import React from 'react';

export function Title({
    children,
    className,
}: {
    children: string;
    className?: string;
}) {
    return (
        <h3
            className={` text-[#A8AFCC] xl:text-6xl lg:text-5xl text-3xl  ${className}`}
        >
            {children}
        </h3>
    );
}
export function Description({
    children,
    className,
}: {
    children: string;
    className?: string;
}) {
    return (
        <h3
            className={` text-[#A8AFCC] xl:text-xl lg:text-lg  md:text-base sm:text-sm text-xs ${className}`}
        >
            {children}
        </h3>
    );
}
