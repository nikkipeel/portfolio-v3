import * as React from "react"
import HeaderInfo from "../components/headerInfo"
import NavMenu from "../components/menu"
import Wave from"../assets/wave.svg"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { StaticImage } from "gatsby-plugin-image"


const WorksPage = () => (
<>
    <SEO title="Works" />
  <NavMenu></NavMenu>
  <header className="bg-indigo text-white flex flex-col xl:flex-row py-16">
  <HeaderInfo></HeaderInfo>
  <div className="flex flex-col justify-center xl:items-end xl:w-1/2 text-white text-center xl:text-right mt-20 mx-auto xl:mt-0 xl:mr-48 p-4 xl:p-0">
    <h1 className="text-xl font-semibold p-4 xl:p-0 mb-8"><strong className="text-6xl">My Work</strong></h1>
    <p className="px-8 xl:px-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam itaque iusto nulla vel necessitatibus ipsa in cupiditate, ab fugit sed, sit blanditiis mollitia qui sapiente odio molestiae ratione consequuntur laboriosam quibusdam eos. Unde odio harum soluta totam, ad minima id voluptates necessitatibus labore voluptate? Velit nihil laboriosam atque similique sunt?</p>
    
    <div className="flex justify-center items-center xl:justify-end mx-auto xl:mx-0 mt-8 p-8 xl:p-0">
      <button id="view-works" className="bg-pink text-white text-sm font-semibold rounded shadow-md p-2 mr-8 transition duration-500">View Portfolio</button>
      <button className="bg-transparent text-pink border-2 border-pink text-sm font-semibold rounded shadow-md p-2 transition duration-500"><p>Contact Me</p></button>
    </div>

  </div>
  </header>

  <section id="works" className="bg-lightGreen w-full h-full">
      <div className="flex flex-col justify-center items-center w-full py-20">
        <h1 className="w-60 text-3xl tracking-wide font-bold text-white" style={{borderBottom: '14px solid #D62B83', lineHeight: '.25', textShadow: '0px 0px 4px rgba(0,0,0,0.6'}}>Recent Projects</h1>

        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:w-3/4 items-center gap-4 mt-12 mx-auto p-4" style={{marginBottom: '-4rem'}}>
            <div className="col h-100 rounded-sm bg-white text-indigo pb-4">
            <StaticImage className="object-contain shadow-inner" src="../images/blog.png" alt="Technical Blog"  placeholder="blurred" loading="eager" />
              <h3 className="pt-2 px-4 text-xl font-semibold font-mono tracking-tight" style={{textShadow: '-1.5px 1.5px 0px #40C69F'}}>Technical Blog</h3>
              <p className="italic px-4">Gatsby, Markdown, Tailwind</p>
              <a className="pb-4 px-4 font-bold hover:underline" style={{textUnderlineOffset: '2px'}} href="#">View Site</a>
            </div>

            <div className="col h-100 rounded-sm bg-white text-indigo pb-4">
            <StaticImage className="object-contain shadow-inner" src="../images/spacex.png" alt="SpaceX API Data"  placeholder="blurred" loading="eager" />
              <h3 className="pt-2 px-4 text-xl font-semibold font-mono tracking-tight" style={{textShadow: '-1.5px 1.5px 0px #40C69F'}}>SpaceX API Data</h3>
              <p className="italic px-4">Gatsby, React Hooks, SpaceX API</p>
              <a className="pb-4 px-4 font-bold hover:underline" style={{textUnderlineOffset: '2px'}} href="#">View Site</a>
       
            </div>


            <div className="col h-100 rounded-sm bg-white text-indigo pb-4">
            <StaticImage className="object-contain shadow-inner" src="../images/photoportfolio.png" alt="Photography Portfolio"  placeholder="blurred" loading="eager" />
              <h3 className="pt-2 px-4 text-xl font-semibold font-mono tracking-tight" style={{textShadow: '-1.5px 1.5px 0px #40C69F'}}>Photography Portfolio</h3>
              <p className="italic px-4">HTML, Tailwind, Javascript</p>
              <a className="pb-4 px-4 font-bold hover:underline" style={{textUnderlineOffset: '2px'}} href="#">View Site</a>
       
            </div>

            <div className="col h-100 rounded-sm bg-white text-indigo pb-4">
            <StaticImage className=" object-contain shadow-inner" src="../images/nnblog1.png" alt="Nomadic Nobodies Blog"  placeholder="blurred" loading="eager" /> 
              <h3 className="pt-2 px-4 text-xl font-semibold font-mono tracking-tight" style={{textShadow: '-1.5px 1.5px 0px #40C69F'}}>Nomadic Nobodies Blog</h3>
              <p className="italic px-4">Wordpress, Elementor, CSS Grid</p>
              <a className="pb-4 px-4 font-bold hover:underline" style={{textUnderlineOffset: '2px'}} href="#">View Site</a>
       
            </div>

            <div className="col h-100 rounded-sm bg-white text-indigo pb-4">
            <StaticImage className=" object-contain shadow-inner" src="../images/lyricssearch.png" alt="Lyrics Search"  placeholder="blurred" loading="eager" />           
              <h3 className="pt-2 px-4 text-xl font-semibold font-mono tracking-tight" style={{textShadow: '-1.5px 1.5px 0px #40C69F'}}>Lyrics Search</h3>
              <p className="italic px-4">HTML, Bootstrap, Javascript</p>
              <a className="pb-4 px-4 font-bold hover:underline" style={{textUnderlineOffset: '2px'}} href="#">View Site</a>
       
            </div>

            <div className="col h-100 rounded-sm bg-white text-indigo pb-4">
            <StaticImage className=" object-contain shadow-inner" src="../images/flashcards.png" alt="Flash Cards"  placeholder="blurred" loading="eager" />  
              <h3 className="pt-2 px-4 text-xl font-semibold font-mono tracking-tight" style={{textShadow: '-1.5px 1.5px 0px #40C69F'}}>Flash Cards</h3>
              <p className="italic px-4">HTML, CSS, Javascript</p>
              <a className="pb-4 px-4 font-bold hover:underline" style={{textUnderlineOffset: '2px'}} href="#">View Site</a>
       
            </div>

            <div className="col h-100 rounded-sm bg-white text-indigo pb-4">
            <StaticImage className="object-contain shadow-inner" src="../images/about.png" alt="Cannabiz"  placeholder="blurred" loading="eager" />   
            <h3 className="pt-2 px-4 text-xl font-semibold font-mono tracking-tight" style={{textShadow: '-1.5px 1.5px 0px #40C69F'}}>Cannabiz</h3>
              <p className="italic px-4">HTML, Tailwind, Javascript</p>
              <a className="pb-4 px-4 font-bold hover:underline" style={{textUnderlineOffset: '2px'}} href="#">View Site</a>
       
            </div>

            <div className="col h-100 rounded-sm bg-white text-indigo pb-4">
            <StaticImage className=" object-contain shadow-inner" src="../images/hero.png" alt="React Pizza"  placeholder="blurred" loading="eager" />   
              <h3 className="pt-2 px-4 text-xl font-semibold font-mono tracking-tight" style={{textShadow: '-1.5px 1.5px 0px #40C69F'}}>React Pizza</h3>
              <p className="italic px-4">React, styled-components</p>
              <a className="pb-4 px-4 font-bold hover:underline" style={{textUnderlineOffset: '2px'}} href="#">View Site</a>
       
            </div>

            <div className="col h-100 rounded-sm bg-white text-indigo pb-4">
            <StaticImage className=" object-contain shadow-inner" src="../images/yelpcamp.png" alt="Landing Page"  placeholder="blurred" loading="eager" />   
            <h3 className="pt-2 px-4 text-xl font-semibold font-mono tracking-tight" style={{textShadow: '-1.5px 1.5px 0px #40C69F'}}>YelpCamp</h3>
              <p className="italic px-4">Bootstrap, Express, NodeJS</p>
              <a className="pb-4 px-4 font-bold hover:underline" style={{textUnderlineOffset: '2px'}} href="#">View Site</a>
       
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
