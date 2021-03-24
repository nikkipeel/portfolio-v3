import React from 'react';

function Services() {
  return (
    <div className="bg-lightGreen w-full h-full">
        <div className="flex flex-col justify-center items-center w-full lg:w-50 py-20">
        <h1 className="w-32 text-3xl tracking-wide font-bold text-white" style={{borderBottom: '14px solid #D62B83', lineHeight: '.25', textShadow: '0px 0px 4px rgba(0,0,0,0.6'}}>Services</h1>
        
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:w-3/4 gap-4 mt-12 mx-auto p-4">
            <div className="col rounded-sm bg-white text-center text-indigo">
                <p className="p-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum iure eos sit necessitatibus obcaecati ipsa itaque quisquam sapiente praesentium voluptas repellendus, voluptates ab ea ut aspernatur nobis. Voluptatem iste dolores aspernatur perspiciatis amet, odio magni!</p>
            </div>

            <div className="col rounded-sm bg-white text-center text-indigo">
                <p className="p-8">Lorem, ipsum dolor sit amet consectetur adipisicig elit. Harum iure eos sit necessitatibus obcaecati ipsa itaque quisquam sapiente praesentium voluptas repellendus, voluptates ab ea ut aspernatur nobis. Voluptatem iste dolores aspernatur perspiciatis amet, odio magni!</p>
            </div>

            <div className="col rounded-sm bg-white text-center text-indigo">
                <p className="p-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum iure eos sit necessitatibus obcaecati ipsa itaque quisquam sapiente praesentium voluptas repellendus, voluptates ab ea ut aspernatur nobis. Voluptatem iste dolores aspernatur perspiciatis amet, odio magni!</p>
            </div>

        </div>

        </div>
      
    </div>

  )
  }


export default Services
