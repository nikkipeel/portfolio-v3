import React from 'react';
import Wave from"../assets/wave.svg"

function Skills() {
  return (
    <>
        <Wave className="pointer-events-none"></Wave>
             <div className="bg-indigo w-full h-full">
        <div className="flex flex-col justify-center items-center w-full lg:w-50 py-20">
        <h1 className="w-24 text-3xl tracking-wide font-bold text-white" style={{borderBottom: '14px solid #40C69F', lineHeight: '.25', textShadow: '0px 0px 4px rgba(0,0,0,0.6'}}>Skills</h1>

        </div>
        </div>
        </>
  )
  }


export default Skills
