import * as React from "react"
import SEO from "../components/seo"
import HeaderInfo from "../components/headerInfo"
import Layout from "../components/layout"
import Wave from"../assets/wave.svg"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => (
  <>
  <SEO title="About" />
  <Layout>
  <header className="bg-indigo text-white flex flex-col xl:flex-row py-16">
  <HeaderInfo></HeaderInfo>
  <div className="flex flex-col justify-center xl:items-end xl:w-1/2 text-white text-center xl:text-right mt-20 mx-auto xl:mt-0 xl:mr-48 p-4 xl:p-0">
    <h1 className="text-xl font-semibold p-4 mb-8 xl:p-0"><strong className="text-6xl">About Me</strong></h1>
    <p className="px-8 my-4 xl:px-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam itaque iusto nulla vel necessitatibus ipsa in cupiditate, ab fugit sed, sit blanditiis mollitia qui sapiente odio molestiae ratione consequuntur laboriosam quibusdam eos. Unde odio harum soluta totam, ad minima id voluptates necessitatibus labore voluptate? Velit nihil laboriosam atque similique sunt?</p>
    
    <div className="flex justify-center items-center xl:justify-end mx-auto xl:mx-0 mt-8 p-8 xl:p-0">
      <button className="bg-pink text-white text-sm font-semibold rounded shadow-md p-2 mr-8 transition duration-500">View Portfolio</button>
      <button className="bg-transparent text-pink border-2 border-pink text-sm font-semibold rounded shadow-md p-2 transition duration-500"><p>Contact Me</p></button>
    </div>

  </div>
  </header>

  <section id="certs" className="bg-lightGreen w-full h-full">
        <div className="flex flex-col justify-center items-center w-full lg:w-50 py-20">
        <h1 className="w-60 text-4xl tracking-wide font-bold text-white" style={{borderBottom: '14px solid #D62B83', lineHeight: '.45', textShadow: '0px 0px 4px rgba(0,0,0,0.6'}}>Certifications</h1>
        
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:w-3/4 items-center gap-4 mt-12 mx-auto p-4" style={{marginBottom: '-4rem'}}>
            <div className="col rounded-sm">
            <StaticImage className=" object-contain shadow-inner" src="../images/front-end-libraries-fcc.png" alt="Front End Libraries - FreeCodeCamp"  placeholder="blurred" loading="eager" />
            </div>

            <div className="col rounded-sm">
            <StaticImage className=" object-contain shadow-inner" src="../images/react-udemy.jpg" alt="Modern React Bootcamp - Udemy"  placeholder="blurred" loading="eager" />
            </div>

            <div className="col rounded-sm">
            <StaticImage className=" object-contain shadow-inner" src="../images/responsive-design-fcc.png" alt="Responsive Design - FreeCodeCamp"  placeholder="blurred" loading="eager" /> </div>

            <div className="col rounded-sm">
            <StaticImage className=" object-contain shadow-inner" src="../images/adv-css-sass-udemy.jpg" alt="Advanced CSS and Sass - Udemy"  placeholder="blurred" loading="eager" />           </div>

            <div className="col rounded-sm">
            <StaticImage className=" object-contain shadow-inner" src="../images/adv-webdev-udemy.jpg" alt="Advanced Web Developer Bootcamp - Udemy"  placeholder="blurred" loading="eager" />  </div>

            <div className="col rounded-sm">
            <StaticImage className=" object-contain shadow-inner" src="../images/webdev-udemy.jpg" alt="Web Developer Bootcamp - Udemy"  placeholder="blurred" loading="eager" />   </div>

        </div>

        </div>
      
    </section>

  <Wave className="pointer-events-none"></Wave>

  <div className="bg-indigo w-full h-80">
        </div>

  </Layout>
  </>
)

export default AboutPage
