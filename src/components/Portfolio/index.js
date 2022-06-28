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
import expedia from "./expedia.gif"
import shop from "./shop.gif"
import fab from "./fab.gif"

const Portfolio = () => {
     const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  return (

    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i ', 'o', ' ']}
              idx={4}
            />
          </h1>
          <div className='main'>
            <div className='first'>
              <img className='image' src={expedia}></img>
                  <h2>
                Expedia clone.</h2>
                    <a  target="_blank"  class="linke" href="https://expediacloneunit5.netlify.app/" rel="noopener noreferrer"> Website Link</a>
              <a target="_blank" class="linke" href="https://expediacloneunit5.netlify.app/">
              </a>

             <h3>
              
               Expedia is an E-commerce company who are in the Tourism business.
              </h3>
              <h3>A collaborative project built by a team of 6 developers executed in 5 days</h3>
            
 <h3 class="mid1">Tech- Skills</h3>
              <span> <p>HTML | CSS | JavaScript | Mongo DB | Express JS | Node JS | React JS.</p>

</span>
              <h3 class="mid1">Features</h3>
              <span>
<li>Entire webpage is a one-page application.</li>
<li>Entire backend is hosted in AWS server.</li>
<li>Same as the original website.</li>
<li>Media queries to suit all devices.</li>

          
              </span>
              
              <h3 class="mid1">Areas of responsibility.</h3>
              <span>
                <li>Complete all the backend infrastructure of the entire webpage.</li>
                <li>Helped pears in their part as a well-managed project in GitHub.</li>
</span>
            </div>


            <div className='second'>
              <img className='image' src={shop}></img>
                  <h2>
                  ShoppersStop clone.</h2>
                   <a  target="_blank" class="linke" href="https://unit4-project-harsh.netlify.app/" target="_blank" rel="noopener noreferrer"> Website Link</a>
        <a  target="_blank"  class="linke" href="https://unit4-project-harsh.netlify.app/">     </a>
           < h3>
                Shoppers Stop is an E-commerce company who are in the business
                of Fashion, garments, and Household products.
              </h3>
<h3>A collaborative project built by a team of 6 developers executed in 5 days</h3>
             
        <h3 class="mid1">Tech- Skills</h3>
              <span> <p> HTML | CSS | JavaScript | Data structures and Algorithms.</p>
<p> Node JS | MongoDB | Express JS.</p>
</span>
              
              
              
              <h3 class="mid1">Features</h3>
              <span>
                <li>Sorting and searching for products.</li>
                <li>Category based Products.</li>
                <li>	Media queries to suit all devices.</li>
                <li>Fetching Data from the backend server which is hosted in my AWS server.</li>
              
              </span>



  
              
              <h3 class="mid1">Areas of responsibility.</h3>
              <span>
                <li>Whole project and team management.</li>
                <li>Helped pears in their part and managed project in GitHub.</li>

          
              </span>
            
            </div>



            <div className='third'>
              <img className='image' src={fab}></img>
                  <h2>
                FabBag clone.</h2>
                  
              <a  target="_blank"  class="linke" href="https://unit2-project-harsh.netlify.app/" target="_blank" rel="noopener noreferrer"> Website Link</a>
            <a  target="_blank"  class="linke" href="https://unit2-project-harsh.netlify.app/">  </a>
 <h3>
                Fab-Bag is an E-commerce company who are in the beauty cosmetic
                business.
              </h3>
              <h3>A collaborative project built by a team of 6 developers executed in 5 days</h3>
            
 <h3 class="mid1">Tech- Skills</h3>
              <span> <p> HTML | CSS | JavaScript | Data structures and Algorithms.</p>

</span>
              <h3 class="mid1">Features</h3>
              <span>
                <li>Product page.</li>
                <li>Add to cart.</li>
                <li>Hover effect on click.</li>
                <li>Card of product detail, reviews.</li>
                <li>
                Category based Products. </li><li> Media queries to suit all devices.</li>
              </span>
              
              <h3 class="mid1">Areas of responsibility.</h3>
              <span>
                <li>Created products page with same features as original one.</li>
                <li>Helped pears in their part as a well-managed project in GitHub.</li>

</span>
            </div>
          </div>
   
      
        
        
        </div>
       
       
      </div>
      <Loader type="pacman" />
    </>


  )
}

export default Portfolio