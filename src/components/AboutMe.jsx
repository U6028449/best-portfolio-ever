import React from 'react'

const AboutMe = () => {
  return (
    <div id='About Me' className='flex flex-col justify-between h-screen m-auto md:pl-20 p-4 py-16 bg-[url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/800px-White_shark.jpg")] bg-cover bg-center bg-no-repeat bg-opacity-80'>
       <div className='absolute inset-0 w-full h-full bg-white bg-opacity-20'></div> 
        <div>
            <h1 className='text-4xl font-bold'>
                About Me
            </h1>
        </div>
        <div>
            <p className='text-2xl p-12 text-white font-bold'>
                I am a Full stack Web Developer with a passion for creating beautiful and functional user experiences. 
                I am originally from North Carolina and currently live in Utah.
                I started my coding experience in 2024 and have earned a certificate in Full Stack Web Development from the University of Utah.
                During my time in the bootcamp, I learned how to build full stack web applications using the MERN stack, 
                as well as how to work with databases, APIs, and other web technologies.
                I have a strong foundation in HTML, CSS, and JavaScript, and I am always learning new technologies to expand my skill set.
                I am a team player who is always looking for ways to improve my skills and help others grow. 
                I am excited to bring my creativity and passion for web development to your team.
            </p>
        </div>
    </div>
  )
}

export default AboutMe