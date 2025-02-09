import BlogSwipper from '@/components/BlogDetail/BlogSwipper';
import BlogContent from '@/components/BlogDetail/Content';
import TopImage from '@/components/BlogDetail/Image';
import React from 'react';

export default function page() {
    return (
        <div className="mt-[60px]">
            <TopImage />
            <BlogContent />
            <BlogSwipper />
        </div>
    );
}
