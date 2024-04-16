import React from 'react';
import heroimage from '../assets/heroimage.png.jpeg';
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
          <p className='text-gray-500 py-4'>Full Stack Web developer || Front-end intern at Engineer’s Way Out || Technical Member at DJS NOVA || Co-com member at Association of Computing Machinery || and Student at Dwarkadas J. Sanghvi College of Engineering</p>
          <div className="md:hidden flex">
            {/* GitHub icon */}
            <a href="https://github.com/rishiiiiiiishah" target="_blank" rel="noopener noreferrer" className='mx-2 cursor-pointer text-gray-400 hover:text-white bg-blue-500 rounded-full p-2'>
              <FaGithub size={24} />
            </a>
            {/* LinkedIn icon */}
            <a href="http://www.linkedin.com/in/rishi-shah-4b2a58285/'," target="_blank" rel="noopener noreferrer" className='mx-2 cursor-pointer text-gray-400 hover:text-white bg-blue-500 rounded-full p-2'>
              <FaLinkedin size={24} />
            </a>
            {/* Gmail icon */}
            <a href="mailto:rishiiiishah@gmail.com" className='mx-2 cursor-pointer text-gray-400 hover:text-white bg-blue-500 rounded-full p-2'>
              <FaEnvelope size={24} />
            </a>
            {/* Resume icon */}
            <a href='/final.pdf' download rel="noreferrer" className='mx-2 cursor-pointer text-gray-400 hover:text-white bg-blue-500 rounded-full p-2'>
  <FaFileAlt size={24} />
</a>

          </div>
          <div>
            <Link to="portfolio"
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 mt-7 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <RiArrowRightSLine size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>

        <div className='image'>
          <img src={heroimage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>



      <style jsx>{`
        
        @media (max-width: 632px) {
          /* Styles for screens smaller than 640px (e.g., mobile devices) */
          .text-4xl {
            font-size:2rem
          }
          .image {
            max-width:800px
  
          }
        }

        
      

        
        




      `}</style>  


    </div>
  );
}

export default Home;
