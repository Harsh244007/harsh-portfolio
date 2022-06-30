
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const ErrorPage = () => {
   const [letterClass, setLetterClass] = useState('text-animate')
  return (
  <>
    <div className="text-zone container about-page">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'r', 'o', 'r', 'r',]}
              idx={15}
            />
        </h1>
        <br/>
          <h3>
          
Oops We can't seem to find the page you're looking for but,

          </h3>
          <h3 align="LEFT">
            you can goto home from here   <Link to="/" 
       style={{ textDecoration: "none",color:"orange" }}>
  here.
            </Link>
            , or you can Reach me   <Link to="/contact" 
       style={{ textDecoration: "none",color:"orange" }}>
  here.
            </Link> 
          </h3>
    </div>
<Loader type="pacman" />
    </>
  )
}

export default ErrorPage