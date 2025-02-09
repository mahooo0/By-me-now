import Arcticle from '@/components/product/arcticle';
import Contect from '@/components/productDetail/contect';
import Images from '@/components/productDetail/Images';
import ProductSwipper from '@/components/productDetail/ProductSwipper';
import React from 'react';

export default function ProductDetail() {
    return (
        <div className="mt-[100px] flex flex-col gap-12 max-sm:gap-10">
            <Images />
            <Contect />
            <Arcticle />
            <ProductSwipper />
        </div>
    );
}
