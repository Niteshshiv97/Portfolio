import React from 'react'

const About = () => {
  return (
    <>
       <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
          <div>
          <h1 className='text-3xl font-bold mb-5'>About</h1>
         <p>
         Hello, I'm Nitesh, a Passionate Web Developer with a for MERN.
         I strive to create impactful and visually stunning software solutions
         </p>
         <br />
         <h1 className='text-green-500 font-semibold text-xl'>Education & Training</h1>
         <span>

            Bcom: RTMNU-[2021],<br />
            12th HSC: Maharastra Board-[2016],<br />
            FullStack-Developement: Manisha Systeams Institute-[2024]
         </span>
          <br /> <br />
         <h1 className='text-green-500 font-semibold text-xl'>Skill & Experience</h1>
         <span>
            [HTML],[CSS],[React],[JavaScript],[Expressjs],
            [Nodejs],[Mongodb],[Git],[Boostrap],[Tailwind CSS]
         </span>
          <br /> <br />
        

          </div>
       </div>
      
    </>
  )
}

export default About
