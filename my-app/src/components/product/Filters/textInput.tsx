import React from 'react';

export default function TextInput() {
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex flex-row justify-between w-full text-white ">
                <label htmlFor="">Name</label>{' '}
                <button className="bg-transparent border-none">Clear</button>
            </div>
            <div className="w-full h-[48px] bg-white flex flex-row items-center pl-[12px]">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z"
                        fill="#303038"
                    />
                </svg>
                <input
                    type="text"
                    className="w-full h-full bg-transparent p-[12px] focus:outline-none"
                    name=""
                    id=""
                />
            </div>
        </div>
    );
}
