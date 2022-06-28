import { useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { Link, Navigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <h2>Phone</h2>
          <h3>
         
            +91-8141924047</h3>
          
          <h2>Email</h2>
         <Link to='' target="_blank"
      onClick={() => window.location = 'mailto:patelharsh24199.com'} style={{ textDecoration: "none" }}>
 <h3 style={{ color: "white" }}>patelharsh241999@gmail.com</h3>
</Link>
          <h2>Address</h2>
          <a href= "https://goo.gl/maps/vmM3sE9bxuhvxQ4j8"
            // rel="noreferrer"
            target="_blank"
       style={{ textDecoration: "none" }}>
 <h3 style={{ color: "white" }}>Ahmedabad, Gujarat, India - 380026</h3>
          </a>
        

          <h2>
          <a href="https://drive.google.com/file/d/1fwTjXYFq6btSyczoFa-19b1UOu-guaso/view" target="_blank" rel="noreferrer"
              style={{ textDecoration: "none",color:"red" }}>
  You can find my Resume here.
            </a>
            </h2>  
            <h2>Social</h2>
                
          <Link
            to="https://www.linkedin.com/in/harsh-patel244/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon style={{ fontSize: "3vh",margin:"1vh"}} icon={faLinkedin} color="#4d4d4e" />
          </Link>
       
          <Link
            to="https://github.com/Harsh244007/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon style={{ fontSize: "3vh",margin:"1vh"}} icon={faGithub} color="#4d4d4e" />
          </Link>
        
   
      
        
        
        </div>
       
       
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

