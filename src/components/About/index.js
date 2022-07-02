import { useState } from 'react'
import {
 faNodeJs,
  faCss3,
  faGitAlt,
  faNode,
  faAws,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { Link } from 'react-router-dom'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <h3>
          
Hello, I am Harsh, a Full-stack developer for MERN stack. I love creating webapps with React JS. I posses some superpower's few of which are communication skill, collaborative skills, passionate about coding and learning new technologies.

          </h3>
          <h3 align="LEFT">
            
You can find my Projects info   <Link to="/portfolio" 
       style={{ textDecoration: "none",color:"skyblue" }}>
  here.
            </Link>
            , or you can Reach me   <Link to="/contact" 
       style={{ textDecoration: "none",color:"skyblue" }}>
  here.
            </Link> 
          </h3>

        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div>
            
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
         
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
