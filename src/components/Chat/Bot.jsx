import * as React from 'react'
import "./Bot.css"

export default function Bot() {
     const openInNewTab = () => {
    window.open("https://www.linkedin.com/in/harsh-patel244/", '_blank', 'noopener,noreferrer');
  };
    return (
        
        <div className='mainchat' onClick={()=>openInNewTab()} style={{
            float: "right", margin: "0.5vw 0.5vw 0vw 2vw", display: "block", height: "18vw", width: "32vw", color:"black"}}>
            <div style={{
                backgroundColor: 'darkorange', height: "100%",
               border: "1px solid grey",
                borderRadius: "3vw 3vw 0vw 0vw"
            }}>
                
                <div className='mainiris' style={{padding:"1vw 2vw 3vw 7vw",justifyContent:"center",alignItems:"center",}}>
                    <p style={{fontSize:"2.0vw"}}>IRIS</p>
                    <p style={{fontSize:"1.4vw"}}>Hello 👋 </p>
                    <p style={{fontSize:"1.4vw"}}>I am Iris, a Virtual Assitant</p>
                    <p style={{fontSize:"1.4vw"}}>How may I help you?</p>
          </div>
             <div className='harsh'>
                    <div><img className='imageh' src={"https://cdn.dribbble.com/users/1136598/screenshots/9718756/media/9330f6f181d7ec79c604d53dcdcf7607.gif"} alt="" /></div>
                    <div className='ha'>
                        <p className='hap'>Frequently Asked Questions ?</p>
                        <button className="buttn1"><p>Can I redeem my FB before the original term?</p></button>
                        <button className="buttn2"><p>How do I pay my Credit card bill?</p></button>
                        <button className="buttn3"><p> How can I get my Account Statement? </p></button>
                        <button className="buttn4"><p>What is the tenure of Fixed Deposit?</p></button>
                        <button className='final'><p className='starta'>Start a New Conversation</p></button>
                </div>
                
                </div> 
            </div>
            
            <div style={{
                // zIndex:"0",
                backgroundColor: 'white', height: "26vw",
                border: "1px solid grey",
                borderRadius: "0vw 0vw 3vw 3vw"
            }}>
          
              
</div>
            </div>
            
  );
}
