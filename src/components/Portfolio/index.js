import { useState,useLayoutEffect,useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import expedia from "./expedia.gif"
import shop from "./shop.gif"
import fab from "./fab.gif"
import axios from "axios"

const Portfolio = () => {
  useLayoutEffect(() => {
    axios("http://188.166.98.109:5000/num").then((e)=>console.log(e.data)).catch((e)=>e.data)

  }, [])
  
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
                   <a target="_blank" className="linke" href="https://expediacloneunit5.netlify.app/">  <img className='image' src={expedia}></img>  </a>
                  <h2>
                Expedia clone.</h2>
              <a target="_blank" className="linke" href="https://expediacloneunit5.netlify.app/" rel="noopener noreferrer"> Website Link</a>
              <br/>
              <a target="_blank" className="linke" href="https://github.com/Harsh244007/expedia-clone" rel="noopener noreferrer"> Git Hub Repo</a>
              
             <h3>
              
               Expedia is an E-commerce company who are in the Tourism business.
              </h3>
              <h3>A collaborative project built by a team of 6 developers executed in 5 days</h3>
            
 <h3 className="mid1">Tech- Skills</h3>
              <span> <p>HTML | CSS | JavaScript | Mongo DB | Express JS | Node JS | React JS.</p>

</span>
              <h3 className="mid1">Features</h3>
              <span>
<li>Entire webpage is a one-page application.</li>
<li>Entire backend is hosted in AWS server.</li>
<li>Same as the original website.</li>
<li>Media queries to suit all devices.</li>

          
              </span>
              
              <h3 className="mid1">Areas of responsibility.</h3>
              <span>
                <li>Complete all the backend infrastructure of the entire webpage.</li>
                <li>Helped pears in their part as a well-managed project in GitHub.</li>
</span>
            </div>


            <div className='second'>
              <a  target="_blank"  className="linke" href="https://unit4-project-harsh.netlify.app/">    <img className='image' src={shop}></img>
               </a>
                  <h2>
                  ShoppersStop clone.</h2>
              <a target="_blank" className="linke" href="https://unit4-project-harsh.netlify.app/" rel="noopener noreferrer"> Website Link</a>
              
               <br/>
                    <a  target="_blank"  className="linke" href="
      https://github.com/Harsh244007/UNIT4-PROJECT-SHOPPERS-STOP" rel="noopener noreferrer"> Git Hub Repo</a>
        
           < h3>
                Shoppers Stop is an E-commerce company who are in the business
                of Fashion, garments, and Household products.
              </h3>
<h3>A collaborative project built by a team of 6 developers executed in 5 days</h3>
             
        <h3 className="mid1">Tech- Skills</h3>
              <span> <p> HTML | CSS | JavaScript | Data structures and Algorithms.</p>
<p> Node JS | MongoDB | Express JS.</p>
</span>
              
              
              
              <h3 className="mid1">Features</h3>
              <span>
                <li>Sorting and searching for products.</li>
                <li>Category based Products.</li>
                <li>	Media queries to suit all devices.</li>
                <li>Fetching Data from the backend server which is hosted in my AWS server.</li>
              
              </span>



  
              
              <h3 className="mid1">Areas of responsibility.</h3>
              <span>
                <li>Whole project and team management.</li>
                <li>Helped pears in their part and managed project in GitHub.</li>

          
              </span>
            
            </div>



            <div className='third'>
              <a  target="_blank"  className="linke" href="https://unit2-project-harsh.netlify.app/">  
              <img className='image' src={fab}></img></a>
                  <h2>
                FabBag clone.</h2>
                  
              <a  target="_blank"  className="linke" href="https://unit2-project-harsh.netlify.app/"  rel="noopener noreferrer"> Website Link</a>
            
              
               <br/>
                    <a  target="_blank"  className="linke" href="https://github.com/Harsh244007/Fabbag-2.0" rel="noopener noreferrer"> Git Hub Repo</a>
 <h3>
                Fab-Bag is an E-commerce company who are in the beauty cosmetic
                business.
              </h3>
              <h3>A collaborative project built by a team of 6 developers executed in 5 days</h3>
            
 <h3 className="mid1">Tech- Skills</h3>
              <span> <p> HTML | CSS | JavaScript | Data structures and Algorithms.</p>

</span>
              <h3 className="mid1">Features</h3>
              <span>
                <li>Product page.</li>
                <li>Add to cart.</li>
                <li>Hover effect on click.</li>
                <li>Card of product detail, reviews.</li>
                <li>
                Category based Products. </li><li> Media queries to suit all devices.</li>
              </span>
              
              <h3 className="mid1">Areas of responsibility.</h3>
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