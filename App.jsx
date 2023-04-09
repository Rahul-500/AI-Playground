import React from 'react'
import ChatGPT from './components/ChatGPT'
import NavBar from './components/NavBar'
import ImageGen from './components/ImageGen'
import ImageColor from './components/ImageColor'
import Meme from './components/Meme'
import Contact from './components/Contact'
import About from './components/About'
import Hero from './components/Hero'
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Hero/>}/>
          <Route path="/askAnything" element={<ChatGPT/>}/>
          <Route path="/imageGenerator" element={<ImageGen/>}/>
          <Route path="/BlackToColor" element={<ImageColor/>}/>
          <Route path="/memeGenerator" element={<Meme/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;