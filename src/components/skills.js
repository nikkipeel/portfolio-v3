import React from 'react';
import Wave from"../assets/wave.svg"
import  "./layout.css"

function Skills() {
  return (
      <>
        <Wave className="pointer-events-none"></Wave>
             <div className="bg-indigo w-full h-full grid lg:grid-cols-2 gap-8 py-20 lg:pt-0 lg:pb-20">
                <div className="flex flex-col justify-center items-center mx-auto lg:pl-20">
                  <h1 className="w-24 text-4xl tracking-wide font-bold text-white" style={{borderBottom: '14px solid #40C69F', lineHeight: '.45', textShadow: '0px 0px 4px rgba(0,0,0,0.6'}}>Skills</h1>
                  <p className="text-white text-center text-base px-4 lg:px-8 py-8 lg:py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, iste quas ratione tempora quisquam sunt aspernatur fugiat accusantium nisi, aut nemo excepturi? Temporibus eveniet corrupti earum doloremque eligendi pariatur repudiandae commodi totam dolores, nisi repellat dolorum libero quibusdam autem rerum eum, porro cumque laudantium. Nulla sapiente nihil omnis temporibus ut, repudiandae vitae illo repellendus veritatis cum fugiat ea, suscipit tempore necessitatibus consequatur maiores repellat numquam!</p>
                  <button className="bg-pink text-white text-sm font-semibold rounded shadow-md p-2 mt-2 transition duration-500">Learn More</button>
                </div>

             <ul className="flex flex-col justify-center items-center mx-auto py-20">
                  <li className="flex flex-col md:flex-row md:items-center progress pb-4">
                    <p className="text-left lg:text-right text-lg w-32 font-semibold font-mono text-white leading-tight">HTML/CSS <br/>Javascript</p>
                    <span className="mt-2 md:mt-0 md:ml-4 h-8 w-64" data-progress="100"></span>
                  </li>
                  <li className="flex flex-col md:flex-row md:items-center progress pb-4">
                    <p className="text-left lg:text-right text-lg w-32 font-semibold font-mono text-white leading-tight">CSS Frameworks </p>
                    <span className="mt-2 md:mt-0 md:ml-4 h-8 w-64" data-progress="100"></span>
                  </li>
                  <li className="flex flex-col md:flex-row md:items-center progress pb-4">
                    <p className="text-left lg:text-right text-lg w-32 font-semibold font-mono text-white leading-tight">jQuery, React, <br/>Gatsby </p>
                    <span className="mt-2 md:mt-0 md:ml-4 h-8 w-56" data-progress="75"></span>
                  </li>
                  <li className="flex flex-col md:flex-row md:items-center progress pb-4">
                    <p className="text-left lg:text-right text-lg w-32 font-semibold font-mono text-white leading-tight">Adobe <br/>Creative Cloud </p>
                    <span className="mt-2 md:mt-0 md:ml-4 h-8 w-56" data-progress="75"></span>
                  </li>

                  <li className="flex flex-col md:flex-row md:items-center progress pb-4">
                    <p className="text-left lg:text-right text-lg w-32 font-semibold font-mono text-white leading-tight">Content Management</p>
                    <span className="mt-2 md:mt-0 md:ml-4 h-8 w-48" data-progress="65"></span>
                  </li>
              </ul>
                
              </div>
      </>
    )
  }


export default Skills
