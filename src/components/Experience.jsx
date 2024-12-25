import React from 'react';
import html from '../../public/html.png';
import css from '../../public/css.jpg';
import mongodb from '../../public/mongodb.jpg';
import javascript from '../../public/javascript.png';
import reactjs from '../../public/reactjs.png';
import nodejs from '../../public/node.png';
import expressjs from '../../public/express.png'

const Experience = () => {
    const cardItem = [
        {
            id:1,
            logo:html,
            name:"HTML"
        },
        {
            id:2,
            logo:css,
            name:"CSS"
        },
        {
            id:3,
            logo:javascript,
            name:"JavaScript"
        },
        {
            id:4,
            logo:reactjs,
            name:"Reactjs"
        },
        {
            id:5,
            logo:nodejs,
            name:"Nodejs"
        },
        {
            id:6,
            logo:expressjs,
            name:"Expressjs"
        },
        {
          id:7,
          logo:mongodb,
          name:"MongoDB"
      }
    ]
  return (
    <>
       <div name="Experiance" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
          <div>
            <h1 className='text-3xl font-bold mb-5'>Experience</h1>
            <p className=' '>I've more than 1 year of experience in below technologies.</p>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
               {
                cardItem.map(({id, logo, name})=>(
                    <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                        <img src={logo} className='w-[150px] rounded-full' alt="" />
                        <div>
                          <div className=''>{name}</div>
                       </div>
                        

                    </div>
                ))
               }
            </div>
          </div>
       </div>
    </>
  )
}

export default Experience ;
