
import React from 'react';
import htmlll from '../assets/htmlll.jpg';
import css from '../assets/css.jpg'
import  javascript from '../assets/javascript.jpg'
import react from '../assets/react.js-img.png'
import github from '../assets/github.png';
import node from '../assets/node.jpg'
import mongo from '../assets/mongo.png'
import express from '../assets/express.jpg'
const Experience = () => {
    const techs = [
        {
            id: 1,
            src: htmlll,
            title: 'HTML'
        },
        {
            id: 2,
            src: css,
            title: 'CSS'
        },
        {
            id: 3,
            src: javascript,
            title: 'JAVASCRIPT'
        },
        {
            id: 4,
            src: react,
            title: 'REACT JS'
        },
        {
            id: 5,
            src: express,
            title: 'EXPRESS JS'
        },
        {
            id: 6,
            src: mongo,
            title: 'MONGO DB'
        },
        {
            id: 7,
            src: github,
            title: 'GITHUB'
        },
        {
            id: 8,
            src: node,
            title: 'NODE JS'
        }
    ];

    const idToShadowColorMap = {
        1: 'shadow-orange-500',
        2: 'shadow-blue-500',
        3: 'shadow-yellow-500',
        4: 'shadow-blue-500',
        5: 'shadow-yellow-500',
        6: 'shadow-blue-500',
        7:'shadow-purple-500',
        8:'shadow-green-500'

    };

    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className='rishi'>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>
                    {
                        techs.map(({ id, src, title }) => (
                            <div key={id}
                                className={`shadow-md ${idToShadowColorMap[id]} rounded-lg`}
                            >
                                <img src={src} alt="" className='w-20 mx-auto duration-200 hover:scale-105' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>


            <style jsx>{`
        
        @media (max-width: 632px) {
          /* Styles for screens smaller than 640px (e.g., mobile devices) */
          .rishi{
            margin-top:60px
          }
        }

        
      

        
        




      `}</style>  





        </div>
    );
}

export default Experience;
