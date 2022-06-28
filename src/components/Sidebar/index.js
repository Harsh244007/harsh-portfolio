import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

// import { ThemeContext, themes } from '../DarkTheme' 

const Sidebar = () => {
 
  return (
    <div className="nav-bar">
      {/* <ThemeContext.Consumer>
        
         {({ changeTheme }) => (
              <button
            className='darkm'  
            // color="link"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
                <MdDarkMode className='darkm2'/>
                
              </button>
            )}
   
        </ThemeContext.Consumer> */}
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/harsh-patel244/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" style={{fontSize:"3.1vh"}} className='linked' />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Harsh244007/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className='linked'  icon={faGithub} style={{fontSize:"3.1vh"}} color="#4d4d4e" />
          </a>
        </li>
     
      </ul>
    </div>
  )
}

export default Sidebar
