import React from 'react';
import Link from 'gatsby-link';
import { slide as Menu } from 'react-burger-menu'
import "./layout.css"

var styles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '32px',
      height: '28px',
      right: '36px',
      top: '20px'
    },
    bmBurgerBars: {
      background: '#f8f8f8',
      height: '3px',
    },
    bmBurgerBarsHover: {
      background: '#ffffff'
    },
    bmCrossButton: {
        top: '20px',
        right: '24px',
      height: '28px',
      width: '28px'
    },
    bmCross: {
        height: '28px',
        background: '#fff'
    },
    bmMenuWrap: {
      position: 'fixed',
      top: '0',
      height: '100%',
      background: '#2E765E'
    },
    bmMenu: {
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      paddingTop: '3rem',
    },
    bmItem: {
      display: 'flex',
      flexDirection: 'columns',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    }
  }

function NavMenu() {

    return (
       <> 
        <nav className="bg-darkGreen h-16">
        

  
  <div className="text-white hidden md:flex md:justify-end pt-4 mr-64">
        <Link to="/"  activeClassName="underline" className="underline-offset text-white text-base pr-12 transition duration-500 focus:text-white focus:outline-none focus:underline hover:text-white hover:underline">
            home
        </Link>
        <Link to="/about" activeClassName="underline" className="underline-offset text-white text-base pr-12 transition duration-500 focus:text-white focus:outline-none focus:underline hover:text-white hover:underline" >
            about
        </Link>
        <Link to="/works" activeClassName="underline" className="underline-offset text-white text-base pr-12 transition duration-500 focus:text-white focus:outline-none focus:underline hover:text-white hover:underline" >
            works
        </Link>
        <Link to="/contact"  activeClassName="underline" className="underline-offset text-white text-base pr-12 transition duration-500 focus:text-white focus:outline-none focus:underline hover:text-white hover:underline">
            contact
        </Link>
    </div>
</nav>

<Menu class="mobileNav bg-darkGreen text-white lg:hidden absolute top-0 right-0 m-0 text-center z-40" right styles={ styles }>
        <a href="/" className="menu-item white block cursor-pointer transition duration-500 focus:text-white focus:outline-none focus:underline hover:text-white hover:underline mt-1 py-3">Home</a>
        <a href="/about" className="menu-item white block cursor-pointer transition duration-500 focus:text-white focus:outline-none focus:underline hover:text-white hover:underline mt-1 py-3">About</a>
        <a href="/works" className="menu-item white block cursor-pointer transition duration-500 focus:text-white focus:outline-none focus:underline hover:text-white hover:underline mt-1 py-3">Works</a>
        <a href="/contact" className="menu-item white block cursor-pointer transition duration-500 focus:text-white focus:outline-none focus:underline hover:text-white hover:underline mt-1 py-3">Contact</a>
      </Menu>

</>
    )
}

export default NavMenu