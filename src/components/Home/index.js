import {  useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ','H','a', 'r', 's', 'h']
  const jobArray = [
    'M',
    'E',
    'R',
    'N',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]



  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
          
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={5}
            />
          </h1>
     <h2 className='text'>My NPM packages.
          <br/><a href='https://www.npmjs.com/~harsh244007'  target="_blank" className='link'>https://www.npmjs.com/~harsh244007</a></h2>
          <div className='formc'>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <Link to="/about" className="flat-button">
            ABOUT
            </Link>
            <Link to="/portfolio" className="flat-button">
            PORTFOLIO
            </Link>
          
            <a target="_blank" rel="noopener noreferrer" href="https://apis.harshp24.tech/" className='flat-button'>API</a>
          
          </div>
            
          
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
