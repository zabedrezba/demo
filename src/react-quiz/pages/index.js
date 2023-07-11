import React from 'react'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Quizes from './Quizes'
import Error from './Error'
import NavBar from '../component/NavBar'
import Quiz from './Quiz'


const ReactQuiz = () => {
  return (
    <BrowserRouter>
    <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quizes" element={<Quizes />} />
            <Route path="/quizes/:id" element={<Quiz />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}

export default ReactQuiz