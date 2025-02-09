import Cards from '@/components/Blog/Cards';
import Pagination from '@/components/Pagination';
import Arcticle from '@/components/product/arcticle';
import React from 'react';

export default function page() {
    return (
        <div className="mt-[100px]">
            <Arcticle />
            <Cards />
            <div className="flex justify-center w-full">
                <Pagination />
            </div>
        </div>
    );
}
