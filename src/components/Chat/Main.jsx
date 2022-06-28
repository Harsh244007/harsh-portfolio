
import React, { useState } from 'react'
import Bot from './Bot'
import "./Bot.css" 
// import { MoonIcon } from '@chakra-ui/icons'

const Main = () => {
    const [tru, setTru] = useState(false)
    const [tex, setTex] = useState("Show Chat Box") 
    const [colo, setColo] = useState("#292929");
    const [sol, setSol] = useState("white")
    var count = 0;
    function change() {
        count++
        if (count % 2 !== 0) {
            setSol("black")
            setColo("white")
        }
        else {
             setSol("white")
            setColo("#292929")
        }
    }
    return (
       
        <div
            style={{
                backgroundColor: `${colo}`
            }}
            
        >
          <div className='home' style={{ display: "flex" }}>
                
                <div>
                  
           {tru?<Bot />:""}
        </div>
        <div>
            <button className='button13' style={{
            width: "10vw", height: "3vw", borderRadius: "1vw", backgroundColor: "darkorange",fontSize:"0.1vw"
        ,float:"right", margin:"0.5vw 1vw 0vw 1vw"
        }}
                        onClick={() => {
                            // setTru(!tru);
                            // if(tru)
                            //     setTex("Show Chat Box") 
                            // else
                            //     setTex("Hide Chat Box ") 
                console.log("a")            

                           }}><p style={{fontSize:"1.3vw"}}>{tex}</p></button>
     </div>
            </div>
            </div>
        
  )
}

export default Main
