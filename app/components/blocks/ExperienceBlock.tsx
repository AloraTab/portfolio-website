import React from 'react';

type ExperienceBlockProps = {
    duration: string;
    title: string;
    desc: string;
    stack: string[];
};

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({ duration, title, desc, stack }) => {
    return (
        <div className="flex flex-row my-4">
            <p className='whitespace-nowrap w-1/5'>{duration}</p>
            <div className="ml-4 flex flex-col w-4/5">
                <h3 className='text-xl'>{title}</h3>
                <p className='py-2'>{desc}</p>
                <div className='flex flex-row space-x-10 text-[#D90368]'>
                    {stack.map((tech, index) => (
                        <div key={index}>
                            {tech}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};


export default ExperienceBlock;