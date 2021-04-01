import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faUniversalAccess, faPencilRuler} from '@fortawesome/free-solid-svg-icons';


function Services() {
  return (
    <div id="services" className="bg-lightGreen w-full h-full">
        <div className="flex flex-col justify-center items-center w-full lg:w-50 py-20">
        <h1 className="w-36 text-4xl tracking-wide font-bold text-white" style={{borderBottom: '14px solid #D62B83', lineHeight: '.45', textShadow: '0px 0px 4px rgba(0,0,0,0.6'}}>Services</h1>
        
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:w-3/4 gap-20 md:gap-8 mt-20 mx-auto p-4">
            <div className="col rounded-sm bg-white85 text-center text-indigo">
            <FontAwesomeIcon icon={faUniversalAccess} className="text-indigo text-7xl pointer-events-none" style={{marginTop: '-2rem'}}/>
                <h2 className="py-2 text-2xl font-semibold font-mono text-indigo leading-tight"  style={{textShadow: '-1.5px 1.5px 0px #40C69F'}}>Accessibility</h2>
               
                <p className="pb-8 px-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum iure eos sit necessitatibus obcaecati ipsa itaque quisquam sapiente praesentium voluptas repellendus, voluptates ab ea ut aspernatur nobis. Voluptatem iste dolores aspernatur perspiciatis amet, odio magni!</p>
            </div>

            <div className="col rounded-sm bg-white85 text-center text-indigo">
            <FontAwesomeIcon icon={faPencilRuler} className="text-indigo text-7xl pointer-events-none" style={{marginTop: '-2rem'}}/>
                <h2 className="py-2 text-2xl font-semibold font-mono text-indigo leading-tight" style={{textShadow: '-1.5px 1.5px 0px #40C69F'}}>Design</h2>
               
                <p className="pb-8 px-8">Lorem, ipsum dolor sit amet consectetur adipisicig elit. Harum iure eos sit necessitatibus obcaecati ipsa itaque quisquam sapiente praesentium voluptas repellendus, voluptates ab ea ut aspernatur nobis. Voluptatem iste dolores aspernatur perspiciatis amet, odio magni!</p>
            </div>
            <div className="col rounded-sm bg-white85 text-center text-indigo">
            <FontAwesomeIcon icon={faCode} className="text-indigo text-7xl pointer-events-none" style={{marginTop: '-2rem'}}/>
                <h2 className="py-2 text-2xl font-semibold font-mono text-indigo leading-tight"  style={{textShadow: '-1.5px 1.5px 0px #40C69F'}}>Development</h2>
                <p className="pb-8 px-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum iure eos sit necessitatibus obcaecati ipsa itaque quisquam sapiente praesentium voluptas repellendus, voluptates ab ea ut aspernatur nobis. Voluptatem iste dolores aspernatur perspiciatis amet, odio magni!</p>
            </div>

        </div>

        </div>
      
    </div>

  )
  }


export default Services
