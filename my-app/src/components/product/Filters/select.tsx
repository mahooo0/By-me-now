import React from 'react';

export default function Select() {
    return (
        <div>
            <div className="w-full flex flex-col gap-3 ">
                <div className="flex flex-row justify-between w-full text-white ">
                    <label htmlFor="">Name</label>{' '}
                    <button className="bg-transparent border-none">
                        Clear
                    </button>
                </div>
                <div className="w-full h-[48px] bg-white flex flex-row items-center  ">
                    <select
                        name=""
                        id=""
                        className="w-full h-full border-r-[12px] p-3 border-transparent bg-transparent"
                    >
                        <option value="">option1</option>
                        <option value="">option2</option>
                        <option value="">option3</option>
                        <option value="">option4</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
