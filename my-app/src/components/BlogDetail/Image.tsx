import React from 'react';
import { Title } from '../text';

export default function TopImage() {
    return (
        <div className="relative ">
            <img
                className="w-full h-[400px]"
                src="https://s3-alpha-sig.figma.com/img/d50f/fb0a/fa333613e155822dc6b3dfe63f150a74?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=S5FNtYv13Ks93kqtHALM8ERPmVMfxVGPQYL~nmo6EoaryzLLEPOCXuZizBcBaOc7n5UGVWih5jf~rZCrNwNz8P-HeEPLLa2-Y-U6uQshnxiSVX7qf9kudvuNkpumkZRoMS9mP37G6PDpLL4V0M~DUx2XJKHW2aJKp66wTZijqv5kSX0q59E7RFEAAosVbRCgwYg3kIQxl6B9CsvWHFUTzBtNap2Skq2Pw2PfFvfErmHLQfU-c1975hcPx7-OxBBhKNorae1WwRX3J0JCz9fzX39ECtJSF6i-1lFhAjZhlZTRiOqONaW0OGTG8zLcEjLD2I7~Qpopk5DUgZ3eOZSh5g__"
            />
            <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <Title>Blog title heading will go here</Title>
            </div>
        </div>
    );
}
