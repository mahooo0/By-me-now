'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Contect() {
    return (
        <div className=" px-9 max-sm:px-3 flex lg:flex-row flex-col max-sm:flex-col  lg:gap-20 gap-8">
            <div className="w-full  flex flex-col gap-8 lg:pr-[55px] pr-0 text-[#F3F2F9]">
                <h1 className=" font-sans text-[40px] font-bold leading-[48px] text-left md:text-[32px] md:leading-[40px] sm:text-[28px] sm:leading-[36px]  decoration-skip-ink">
                    Product name
                </h1>
                <p className="font-sans text-[16px] font-normal leading-[24px] text-left  decoration-skip-ink">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.adsmad Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit.
                </p>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-6">
                        <button className=" pb-2 border-b-2 border-black">
                            Details
                        </button>
                        <button className=" pb-2 border-b-2 border-transparent">
                            Shipping
                        </button>
                        <button className=" pb-2 border-b-2 border-transparent">
                            Returns
                        </button>
                    </div>
                    <p className="font-sans text-[16px] font-normal leading-[24px] text-left  decoration-skip-ink">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat. Aenean
                        faucibus nibh et justo cursus id rutrum lorem imperdiet.
                        Nunc ut sem vitae risus tristique posuere.
                    </p>
                </div>
            </div>
            <div className="lg:w-[40%] w-full  flex flex-col">
                <div className="flex felx-row gap-3 mt-3">
                    <div className="flex felx-row">
                        <svg
                            width="20"
                            height="17"
                            viewBox="0 0 20 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19.5312 17H15.4062V14.2656C15.4062 13.2552 15.3229 12.3438 15.1562 11.5312C14.9896 10.7188 14.7448 10 14.4219 9.375C14.099 8.75 13.7083 8.22917 13.25 7.8125C12.8021 7.38542 12.2917 7.06771 11.7188 6.85938C11.1458 6.64062 10.5156 6.53125 9.82812 6.53125C8.99479 6.53125 8.23958 6.70312 7.5625 7.04688C6.88542 7.38021 6.30208 7.875 5.8125 8.53125C5.32292 9.17708 4.94792 9.97917 4.6875 10.9375C4.42708 11.8958 4.29688 13.0052 4.29688 14.2656V17H0.15625V14.2969C0.15625 12.5677 0.395833 11.0208 0.875 9.65625C1.35417 8.28125 2.02604 7.11458 2.89062 6.15625C3.75521 5.19792 4.77604 4.46875 5.95312 3.96875C7.14062 3.45833 8.43229 3.20312 9.82812 3.20312C10.9635 3.20312 12.026 3.36979 13.0156 3.70312C14.0052 4.02604 14.8958 4.5 15.6875 5.125C16.4896 5.75 17.1771 6.51562 17.75 7.42188C18.3229 8.31771 18.7604 9.34375 19.0625 10.5C19.375 11.6458 19.5312 12.9115 19.5312 14.2969V17ZM11.9219 0.09375V17H7.76562V0.09375H11.9219Z"
                                fill="#F3F2F9"
                            />
                        </svg>

                        <p className="text-[40px] font-semibold leading-9 text-white">
                            5500{' '}
                        </p>
                    </div>
                    <div className="flex felx-row translate-y-2">
                        <svg
                            width="15"
                            height="13"
                            viewBox="0 0 15 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.3877 13H12.2197V10.7969C12.2197 9.97656 12.1533 9.23438 12.0205 8.57031C11.8877 7.89844 11.6885 7.3125 11.4229 6.8125C11.165 6.30469 10.8447 5.87891 10.4619 5.53516C10.0869 5.19141 9.65332 4.93359 9.16113 4.76172C8.67676 4.58984 8.1377 4.50391 7.54395 4.50391C6.84082 4.50391 6.2041 4.64062 5.63379 4.91406C5.06348 5.17969 4.5752 5.57812 4.16895 6.10938C3.7627 6.64062 3.4502 7.29688 3.23145 8.07812C3.0127 8.85938 2.90332 9.76562 2.90332 10.7969V13H0.723633V10.8203C0.723633 9.53906 0.887695 8.39062 1.21582 7.375C1.55176 6.35938 2.02051 5.49609 2.62207 4.78516C3.23145 4.07422 3.9502 3.53125 4.77832 3.15625C5.61426 2.78125 6.53613 2.59375 7.54395 2.59375C8.37207 2.59375 9.1377 2.71484 9.84082 2.95703C10.5518 3.19922 11.1846 3.55469 11.7393 4.02344C12.3018 4.48438 12.7783 5.05078 13.1689 5.72266C13.5674 6.38672 13.8682 7.14844 14.0713 8.00781C14.2822 8.85938 14.3877 9.79688 14.3877 10.8203V13ZM8.63379 0.320312V13H6.4541V0.320312H8.63379Z"
                                fill="#606887"
                            />
                        </svg>

                        <p className="text-2xl font-semibold  text-[#606887] line-through">
                            6000
                        </p>
                    </div>
                </div>
                <p className="font-sans text-[#F3F2F9] text-base font-normal leading-6 text-left mt-6 decoration-skip-ink">
                    Params
                </p>
                <div className="flex flex-row gap-3 text-balance text-[24px] font-normal mt-[21px] flex-wrap text-white ">
                    <div className="flex flex-row gap-2 h-[33px] items-center  flex-nowrap">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.5792 7.19024C16.1128 6.64812 16.4114 5.93977 16.4114 5.1753C16.4114 3.58389 15.1165 2.28895 13.5261 2.28895C12.588 2.28895 11.7314 2.74848 11.1893 3.50659C10.6588 3.34248 10.1029 3.24295 9.52907 3.20271V2.11742H10.5879V1.05859H7.41142V2.11742H8.47024V3.20271C7.89636 3.24295 7.34048 3.34248 6.81001 3.50659C6.26789 2.74742 5.41236 2.28895 4.47318 2.28895C2.88283 2.28895 1.58789 3.58389 1.58789 5.1753C1.58789 5.94083 1.88648 6.64918 2.42013 7.19024C1.89177 8.20883 1.58789 9.36295 1.58789 10.588C1.58789 12.3954 2.24013 14.0514 3.31907 15.3389L1.95848 17.1527L2.80554 17.788L4.06765 16.1045C5.37954 17.2787 7.10436 17.9998 8.99965 17.9998C10.8949 17.9998 12.6198 17.2787 13.9317 16.1045L15.1938 17.788L16.0408 17.1527L14.6802 15.3389C15.7592 14.0514 16.4114 12.3954 16.4114 10.588C16.4114 9.36295 16.1075 8.20883 15.5792 7.19024ZM13.5261 3.34777C14.5331 3.34777 15.3526 4.1673 15.3526 5.1753C15.3526 5.57024 15.2255 5.94189 14.9979 6.25212C14.28 5.26106 13.3239 4.45848 12.2132 3.92059C12.5541 3.56165 13.02 3.34777 13.5261 3.34777ZM2.64671 5.1753C2.64671 4.16836 3.46624 3.34777 4.47318 3.34777C4.9793 3.34777 5.44518 3.56165 5.78613 3.91953C4.67542 4.45742 3.72036 5.26106 3.00142 6.25106C2.77377 5.94083 2.64671 5.57024 2.64671 5.1753ZM8.99965 16.9409C5.49601 16.9409 2.64671 14.0917 2.64671 10.588C2.64671 7.08436 5.49601 4.23506 8.99965 4.23506C12.5033 4.23506 15.3526 7.08436 15.3526 10.588C15.3526 14.0917 12.5033 16.9409 8.99965 16.9409ZM9.52907 10.588H13.7644V11.6468H8.47024V7.41153H9.52907V10.588Z"
                                fill="white"
                            />
                        </svg>
                        2024
                    </div>
                    <div className="flex flex-row gap-2 h-[33px] items-center flex-nowrap">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.6 2.11765V0H0V18H15.6V15.8824H18V2.11765H15.6ZM1.2 16.9412V1.05882H3.6V16.9412H1.2ZM14.4 16.9412H4.8V1.05882H14.4V16.9412ZM16.8 14.8235H15.6V11.6471H16.8V14.8235ZM16.8 10.5882H15.6V7.41177H16.8V10.5882ZM15.6 6.35294V3.17647H16.8V6.35294H15.6ZM6 4.23529H12V5.29412H6V4.23529ZM6 6.35294H10.8V7.41177H6V6.35294Z"
                                fill="white"
                            />
                        </svg>
                        1.5 L
                    </div>{' '}
                    <div className="flex flex-row gap-2 h-[33px] items-center flex-nowrap">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_35_886)">
                                <path
                                    d="M17.9123 13.5834L13.5439 3.58344C13.3886 3.22781 13.0501 3 12.6776 3H9.62795L9.70452 3.72375C9.72014 3.87125 9.6042 4 9.45577 4H8.54452C8.39608 4 8.28014 3.87125 8.29577 3.72375L8.37233 3H5.32264C4.94983 3 4.61139 3.22781 4.45608 3.58344L0.0876423 13.5834C-0.20142 14.2456 0.25983 15 0.954517 15H7.10577L7.42795 11.9475C7.45483 11.6931 7.6692 11.5 7.92514 11.5H10.0751C10.3311 11.5 10.5455 11.6931 10.5723 11.9475L10.8945 15H17.0458C17.7405 15 18.2017 14.2456 17.9123 13.5834ZM8.13764 5.22375C8.14413 5.16231 8.17314 5.10545 8.21907 5.06413C8.265 5.02281 8.32461 4.99997 8.38639 5H9.6142C9.74202 5 9.84952 5.09656 9.86295 5.22375L10.0067 6.58563C10.0301 6.80719 9.85639 7 9.63389 7H8.36702C8.1442 7 7.97077 6.80719 7.9942 6.58563L8.13764 5.22375ZM9.86389 10.5H8.13608C7.8392 10.5 7.60764 10.2428 7.63889 9.9475L7.79733 8.4475C7.8242 8.19313 8.03858 8 8.29452 8H9.70545C9.96139 8 10.1758 8.19313 10.2026 8.4475L10.3611 9.9475C10.3923 10.2428 10.1608 10.5 9.86389 10.5Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_35_886">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        200.000km{' '}
                    </div>
                </div>
                <motion.button
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: '#606887',
                        color: '#ffffff',
                        boxShadow: '0px 4px 15px rgba(168, 175, 204, 0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="w-full text-[16px] font-normal py-[13px] text-center px-auto border border-white bg-transparent text-white overflow-hidden relative mt-6"
                >
                    buy now
                </motion.button>
            </div>
        </div>
    );
}
