"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type NavItem = {
    id: string;
    label: string;
};

const navItems: NavItem[] = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'blog', label: 'Blog' },
];

const LeftNav: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let foundSection = '';

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight / 2 && rect.bottom >= 0) {
                    foundSection = section.id;
                }
            });

            setActiveSection(foundSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex flex-col sticky top-20 p-6">
            <h1 className="text-4xl font-bold">Alora Tabuco</h1>
            <p className="text-xl mb-8">AI/ML Software Engineer</p>
            <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                    <Link href={`#${item.id}`} key={item.id} scroll={false} className="flex items-center">
                    
                            <span
                                className={`${
                                    activeSection === item.id ? 'w-12' : 'w-6'
                                } h-0.5 bg-black transition-all duration-300 mr-2`}
                            ></span>
                            <span
                                className={`${
                                    activeSection === item.id ? 'font-bold' : ''
                                } text-lg`}
                            >
                                {item.label}
                            </span>
                       
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default LeftNav;
