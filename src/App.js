import React,{Suspense} from "react"
import './App.scss'
import { Route, Routes } from 'react-router-dom'
const Home=React.lazy(()=>import("./components/Home"))
const About=React.lazy(()=>import("./components/About"))
const Contact=React.lazy(()=>import("./components/Contact"))
const Layout=React.lazy(()=>import("./components/Layout"))
const Portfolio=React.lazy(()=>import("./components/Portfolio"))
const ErrorPage=React.lazy(()=>import("./components/ErrorPages"))


function App() {
  return (
    <>
    {/* //   <Main  />
       */}
 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
          <Suspense fallback={<h1>About page is loading</h1>}>
          <Home />
          </Suspense>}/>
          <Route path="/about" element={
          <Suspense fallback={<h1>About page is loading</h1>}>

          <About />
    </Suspense>}/>
         
          
          <Route path="/contact" element={
          <Suspense fallback={<h1>Contact page is loading</h1>}>
          <Contact />
         </Suspense>}/> 
       
        
          <Route path="/portfolio" element={
            <Suspense fallback={<h1>Portfolio is loading</h1>}>
          <Portfolio />
          
        </Suspense>}/> 
         

          <Route path="*" element={
          <Suspense fallback={<h1>Error page</h1>}>
                    
          <ErrorPage />
          
          </Suspense>
          } />
        </Route>
      </Routes>
    </>
  )
}

export default App;
