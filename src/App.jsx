
import React from 'react'
import Header from './components/header/Header'
import Portfolio from './components/portfolio/Portfolio'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
//import Reviews from './components/reviews/Reviews'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Parallax  from './components/parallax/Parallax'
//import Intro from './components/Intro/intro'

const App = () => {
  return (
    <>
        <Header />
        <Nav/>
        <Portfolio />
        {/*<About />*/}
        {/*<Experience />*/}
        {/*<Services />*/}
        {/*<Reviews />*/}
        <Contact />
        <Footer />
        {/*<Parallax />*/}

  <Router>
          <Routes>
          <Route path="/src/components/parallax/" element={<Parallax />}>

      </Route>
    </Routes>
  </Router>
    </>
  )
}

export default App
