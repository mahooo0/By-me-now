'use client';
import { useState } from 'react';

export default function LanguageSwitcher() {
    const [activeLang, setActiveLang] = useState('az');

    const languages = ['az', 'en', 'ru'];

    return (
        <ul key={1} className="relative w-fit">
            <select
                value={activeLang}
                onChange={(e) => setActiveLang(e.target.value)}
                className="text-[#A8AFCC] bg-transparent border  border-[#A8AFCC]  rounded-md p-2 cursor-pointer"
            >
                {languages.map((lang) => (
                    <option key={lang} value={lang} className="bg-transparent">
                        {lang}
                    </option>
                ))}
            </select>
        </ul>
    );
}
