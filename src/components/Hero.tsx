import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="font-hero-text flex h-full flex-col items-center justify-center bg-slate-800 px-2 py-28 text-center text-white bg-blend-multiply md:h-auto">
            <div className="flex w-full flex-col gap-6 font-mono">
                <h1 className="font-mono text-6xl uppercase tracking-wider text-blue-500 lg:text-8xl">
                    Mason <span className="md:block">Dubelbeis</span>
                </h1>
                <ul>
                    <li className="font-hero-text mx-auto w-9/12 border-b-[0.05rem] border-t-[0.05rem] border-blue-500 py-2 text-2xl tracking-wider md:w-6/12 lg:text-5xl">
                        Full-Stack Software Engineer
                    </li>
                </ul>
                <div className="flex flex-col gap-2 text-lg tracking-wider md:text-2xl">
                    <small>MASON.DUBELBEIS@GMAIL.COM</small>
                </div>
            </div>
        </div>
    );
};

export default Hero;
