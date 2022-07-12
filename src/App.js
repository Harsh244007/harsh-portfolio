import React, { Suspense } from "react"
import './App.scss'
import Loader from "react-loaders"
import { Route, Routes } from 'react-router-dom'
const Home = React.lazy(() => import("./components/Home"))
const About = React.lazy(() => import("./components/About"))
const Contact = React.lazy(() => import("./components/Contact"))
const Layout = React.lazy(() => import("./components/Layout"))
const Portfolio = React.lazy(() => import("./components/Portfolio"))
const ErrorPage = React.lazy(() => import("./components/ErrorPages"))

function App() {
  return (
    <>
      {/* //   <Main  />
       */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={

            <Suspense fallback={<Loader type="pacman" />}>

              <About />
            </Suspense>} />


          <Route path="/contact" element={

            <Suspense fallback={<Loader type="pacman" />}>
              <Contact />
            </Suspense>} />


          <Route path="/portfolio" element={

            <Suspense fallback={<Loader type="pacman" />}>
              <Portfolio />

            </Suspense>} />


          <Route path="*" element={

            <Suspense fallback={<Loader type="pacman" />}>

              <ErrorPage />

            </Suspense>
          } />
        </Route>
      </Routes>
    </>
  )
}

export default App;
