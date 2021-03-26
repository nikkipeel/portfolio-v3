import * as React from "react"
import HeaderInfo from "../components/headerInfo"
import NavMenu from "../components/menu"
import Wave from"../assets/wave.svg"
import SEO from "../components/seo"
import Footer from "../components/footer"


const WorksPage = () => (
<>
    <SEO title="Works" />
  <NavMenu></NavMenu>
  <header className="bg-indigo text-white flex flex-col xl:flex-row py-16">
  <HeaderInfo></HeaderInfo>
  <div className="flex flex-col justify-center xl:items-end xl:w-1/2 text-white text-center xl:text-right mt-20 mx-auto xl:mt-0 xl:mr-48 p-4 xl:p-0">
    <h1 className="text-xl font-semibold p-4 xl:p-0 mb-8"><strong className="text-6xl">Work</strong></h1>
    <p className="px-8 xl:px-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam itaque iusto nulla vel necessitatibus ipsa in cupiditate, ab fugit sed, sit blanditiis mollitia qui sapiente odio molestiae ratione consequuntur laboriosam quibusdam eos. Unde odio harum soluta totam, ad minima id voluptates necessitatibus labore voluptate? Velit nihil laboriosam atque similique sunt?</p>
    
    <div className="flex justify-center items-center xl:justify-end mx-auto xl:mx-0 mt-8 p-8 xl:p-0">
      <button id="view-works" className="bg-pink text-white text-sm font-semibold rounded shadow-md p-2 mr-8 transition duration-500">View Portfolio</button>
      <button className="bg-transparent text-pink border-2 border-pink text-sm font-semibold rounded shadow-md p-2 transition duration-500"><p>Contact Me</p></button>
    </div>

  </div>
  </header>

  <section id="certs" className="bg-lightGreen w-full h-full">
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
      
    </section>

  <Wave className="pointer-events-none"></Wave>

  <div className="bg-indigo w-full h-80">
        </div>

<Footer></Footer>
  </>
)

export default WorksPage
