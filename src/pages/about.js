import * as React from "react"
import HeaderInfo from "../components/headerInfo"
import NavMenu from "../components/menu"

const AboutPage = () => (
  <>
  <NavMenu></NavMenu>
  <header className="bg-indigo text-white flex flex-col xl:flex-row py-16">
  <HeaderInfo></HeaderInfo>
  <div className="flex flex-col justify-center xl:items-end xl:w-1/2 text-white text-center xl:text-right mt-20 mx-auto xl:mt-0 xl:mr-48 p-4 xl:p-0">
    <h1 className="text-xl font-semibold p-4 xl:p-0 mb-8"><strong className="text-6xl">About Me</strong></h1>
    <p className="px-8 xl:px-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam itaque iusto nulla vel necessitatibus ipsa in cupiditate, ab fugit sed, sit blanditiis mollitia qui sapiente odio molestiae ratione consequuntur laboriosam quibusdam eos. Unde odio harum soluta totam, ad minima id voluptates necessitatibus labore voluptate? Velit nihil laboriosam atque similique sunt?</p>
    
    <div className="flex justify-center items-center xl:justify-end mx-auto xl:mx-0 mt-8 p-8 xl:p-0">
      <button id="view-works" className="bg-pink text-white text-sm font-semibold rounded shadow-md p-2 mr-8 transition duration-500">View Portfolio</button>
      <button className="bg-transparent text-pink border-2 border-pink text-sm font-semibold rounded shadow-md p-2 transition duration-500"><p>Contact Me</p></button>
    </div>

  </div>
  </header>
  </>
)

export default AboutPage
