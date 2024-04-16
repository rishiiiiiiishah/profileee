import React from 'react'

const a = () => {
  return (
    <div name="about"
     className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
      </div>
      <p className='text-xl mt-20'>
      👋 Hello, I'm Rishi Shah!

🎓 As an enthusiastic Computer Engineering student at Dj sanghvi college of engineering , with a passion for technology, I'm on a journey to become a Full Stack Web Developer. My curiosity and drive to innovate constantly push me to explore the ever-evolving landscape of web development.

💻 With a solid foundation in programming languages such as HTML, CSS, JavaScript, and familiarity with frameworks like React and Node.js, I'm actively honing my skills to create seamless and user-friendly web experiences.


      </p>
      <br />
      <p className='text-xl'>
       
🌟 Whether it's designing captivating front-end interfaces or building robust back-end systems, I thrive on the challenge of turning ideas into reality through code. I believe in the power of continuous learning and embrace new technologies to stay ahead in this dynamic field.

🚀 I'm excited to collaborate with like-minded professionals and organizations to make a meaningful impact through innovative web solutions.

Let's connect and embark on this exciting journey together!

      </p>
    </div>

<style jsx>{`
        
        @media (max-width: 632px) {
          /* Styles for screens smaller than 640px (e.g., mobile devices) */
          .text-xl mt-20 {
            font-size: 10rem;
            
          }
          .text-xl {
            font-size: 0.9rem; /* Decrease font size for paragraph */
          }
          .image {
            width: 60%; /* Make the image full width */
          }

          .pb-8{
            margin-top:1rem;
          }
        }

        
      

        
        




      `}</style>    




    </div>
  )
}

export default a
