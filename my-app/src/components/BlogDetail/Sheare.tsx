import { Link, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Sheare() {
    const socialLinks = [
        {
            name: 'Copy Link',
            icon: Link,
            href: '#',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: '#',
        },
        {
            name: 'Twitter',
            icon: Twitter,
            href: '#',
        },
        {
            name: 'Facebook',
            icon: Facebook,
            href: '#',
        },
    ];

    return (
        <div className=" w-fit p-4">
            <div className="flex items-center justify-center gap-4">
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-all duration-200 hover:bg-gray-700 hover:text-white hover:scale-110"
                        aria-label={social.name}
                    >
                        <social.icon className="h-5 w-5" />
                    </a>
                ))}
            </div>
        </div>
    );
}
