
import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function HeaderInfo() {
  return (

  <div className="flex flex-col xl:w-1/2 justify-center items-center mx-auto xl:ml-36">
    <StaticImage className="h-60 w-52 shadow-inner" src="../images/selfie.jpg" alt="Portrait"  placeholder="blurred" loading="eager" style={{borderRadius: '50%', filter: 'contrast(110%)'}}/>
    <div className="card flex flex-col text-center bg-white text-indigo rounded-sm shadow-xl w-full xl:w-2/3 px-12 py-4 my-8">
      
      <h1 className="text-xl font-bold">Nikki Peel</h1>
      <em className="text-base">Front End Developer</em>
      <a href="mailto:nikkipeel.dev@gmail.com" className="text-base font-bold hover:underline" style={{textUnderlineOffset: '3px'}}>nikkipeel.dev@gmail.com</a>
      
        <a href="#" className="text-indigo uppercase font-bold hover:underline mt-2 pr-4" style={{textShadow: '-1.5px 1.5px 0px #40C69F', textUnderlineOffset: '3px'}}>Download Resume</a>
        <div className="mt-4">
          <a aria-label="linked in" href="https://www.linkedin.com/in/nikkipeel" className="text-indigo text-xl hover:text-pink focus:text-pink pr-4"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a aria-label="github"  href="https://www.github.com/nikkipeel" className="text-indigo text-xl hover:text-pink focus:text-pink pr-4"><FontAwesomeIcon icon={faGithub} /></a>
          <a aria-label="codepen" href="https://www.codepen.io/nikki-peel" className="text-indigo text-xl hover:text-pink focus:text-pink pr-4"><FontAwesomeIcon icon={faCodepen} /></a>
          <a aria-label="blog" href="https://nikkipeel.netlify.app" className="text-indigo text-xl hover:text-pink focus:text-pink pr-4"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
      </div>
    
    </div>
</div>
  
  )
  }


export default HeaderInfo
