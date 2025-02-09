'use client';

export default function BlogCard() {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
            {/* Image Container with Gradient Background */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-100/80 to-purple-100/80">
                <img
                    src="/images/mustang.png"
                    alt="Blue Porsche 911"
                    className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    Blog title heading will go here
                </h3>

                <p className="mb-4 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros.
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-sm font-medium text-gray-900">
                    Read more
                    <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
