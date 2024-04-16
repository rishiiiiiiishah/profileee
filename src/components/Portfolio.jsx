import React from 'react'
import amazon from '../assets/amazon.png'
import rishique from '../assets/rishique.png'
import mytunes from '../assets/mytunes.png'
import moon from '../assets/moon.png'
import nova from '../assets/nova.png'

const Portfolio = () => {
    const portfolio = [
        {
            id: 1,
            src: amazon,
            codeLink: 'https://github.com/rishiiiiiiishah/webdev',
            demoLink:'https://rishiiiiiiishah.github.io/webdev/'
        },
        {
            id: 2,
            src: rishique,
            demoLink:'https://scintillating-fudge-0b86a2.netlify.app/',
            codeLink: 'https://github.com/rishiiiiiiishah/e-commerce-website',
        },
        {
            id: 3,
            src: mytunes
        },
        {
            id: 4,
            src: moon,
            codeLink: 'https://github.com/rishiiiiiiishah/nova-moon-website',
            demoLink:'https://rishiiiiiiishah.github.io/nova-moon-website/'
        },


        {
            id: 5,
            src: nova,
          
        },
    ];

    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my projects right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolio.map(({ id, src,demoLink,codeLink }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                            <a href={demoLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    Demo
                                </a>
                                

                                <a href={codeLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    Code
                                </a>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
