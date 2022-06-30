
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
    <div className="text-one container about-page about-age">
          <h1 className='h1a'>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['E', 'r', 'r', 'o', 'r',]}
              idx={15}
            />
        </h1>
        <br/>
          <h3 className='h3a'>
          
Oops We can't seem to find the page you're looking for but,

          </h3>
          <h3  className='h3a' align="LEFT">
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