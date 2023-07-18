import React from 'react';

const ICONS = [
    { icon: '/assets/icons/react-icons/react-512.png', altText: 'react icon' },
    { icon: '/assets/icons/typescript-icons/typescript-512.png', altText: 'typescript icon' },
    { icon: '/assets/icons/tailwind-icons/tailwind.png', altText: 'tailwindcss icon' },
    { icon: '/assets/icons/git (1).png', altText: 'git icon' },
    { icon: '/assets/icons/python.svg', altText: 'python icon' },
    { icon: '/assets/icons/django.svg', altText: 'django icon' },
    { icon: '/assets/icons/postgresql.svg', altText: 'postgresql icon' },
];

const Skills: React.FC = () => {
    return (
        <section className="xl:gap-26 relative flex w-full flex-col items-center justify-start bg-slate-800 px-4 py-32 text-white bg-blend-soft-light lg:flex-row lg:items-center lg:justify-center lg:gap-20 lg:px-28">
            <div className="p-4">
                <h2 className=" lg:text-6x mb-2 font-mono text-5xl tracking-widest text-white lg:text-center">
                    TOOLBELT
                </h2>
            </div>
            <div className="hidden lg:block lg:h-[250px] lg:border-l-2 lg:border-white lg:opacity-30"></div>
            <div className="mt-16 grid grid-cols-3 gap-20 p-8 lg:mt-0 xl:grid-cols-4">
                {ICONS.map((icon) => {
                    return <img key={Math.random()} className="w-20" src={icon.icon} alt={icon.altText} />;
                })}
            </div>
        </section>
    );
};

export default Skills;
