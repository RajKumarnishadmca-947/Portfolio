import React from "react";
import {BrowserRouter,Routes, Route} from 'react-router-dom'

import Nav from './Components/Navbar/Nav'

import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import About from './Components/Pages/About'
import Skills from './Components/Pages/Skills'
import Projects from './Components/Pages/Projects'
import Certification from './Components/Pages/Certification'

const App = () => {

  return (
    <BrowserRouter>
      <Nav></Nav>
      
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/skills' element={<Skills></Skills>} ></Route>
        <Route path='/projects' element={<Projects></Projects>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/certification' element={<Certification></Certification>} ></Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App