import Pagination from '@/components/Pagination';
import Arcticle from '@/components/product/arcticle';
import Filters from '@/components/product/Filters';
import Products from '@/components/product/Products';
import React from 'react';

export default function page() {
    return (
        <div className="mt-[100px] z-10">
            <Arcticle />
            <Filters />
            <Products />
            <div className="flex justify-center w-full">
                <Pagination />
            </div>
        </div>
    );
}
