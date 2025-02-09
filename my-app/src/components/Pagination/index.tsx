'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(5);
    const totalPages = 10;

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const renderPageNumbers = () => {
        const pages = [];

        // First page
        pages.push(
            <button
                key={1}
                onClick={() => handlePageChange(1)}
                className={`w-10 h-10 rounded-md flex items-center justify-center text-sm ${
                    currentPage === 1
                        ? 'bg-zinc-700 text-white'
                        : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
            >
                1
            </button>
        );

        // Second page
        pages.push(
            <button
                key={2}
                onClick={() => handlePageChange(2)}
                className={`w-10 h-10 rounded-md flex items-center justify-center text-sm ${
                    currentPage === 2
                        ? 'bg-zinc-700 text-white'
                        : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
            >
                2
            </button>
        );

        // First ellipsis
        if (currentPage > 3) {
            pages.push(
                <span key="ellipsis1" className="text-zinc-400 px-2">
                    ...
                </span>
            );
        }

        // Current page (if not 1, 2, 9, or 10)
        if (currentPage > 2 && currentPage < totalPages - 1) {
            pages.push(
                <button
                    key={currentPage}
                    onClick={() => handlePageChange(currentPage)}
                    className="w-10 h-10 rounded-md flex items-center justify-center text-sm bg-zinc-700 text-white"
                >
                    {currentPage}
                </button>
            );
        }

        // Second ellipsis
        if (currentPage < totalPages - 2) {
            pages.push(
                <span key="ellipsis2" className="text-zinc-400 px-2">
                    ...
                </span>
            );
        }

        // Second-to-last page
        pages.push(
            <button
                key={totalPages - 1}
                onClick={() => handlePageChange(totalPages - 1)}
                className={`w-10 h-10 rounded-md flex items-center justify-center text-sm ${
                    currentPage === totalPages - 1
                        ? 'bg-zinc-700 text-white'
                        : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
            >
                {totalPages - 1}
            </button>
        );

        // Last page
        pages.push(
            <button
                key={totalPages}
                onClick={() => handlePageChange(totalPages)}
                className={`w-10 h-10 rounded-md flex items-center justify-center text-sm ${
                    currentPage === totalPages
                        ? 'bg-zinc-700 text-white'
                        : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
            >
                {totalPages}
            </button>
        );

        return pages;
    };

    return (
        <div className=" p-8 rounded-lg">
            <div className="flex items-center gap-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-md flex items-center justify-center bg-zinc-800 text-white hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>

                {renderPageNumbers()}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-md flex items-center justify-center bg-zinc-800 text-white hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
