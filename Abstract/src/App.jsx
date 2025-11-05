import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import Section from './Components/Section/Section';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartTrial from './Pages/StartTrial/StartTrail';

const App = () => {
  return (
    <div className="main-container">
      <Navbar />
      <Hero />
      <div className="help-container">
        <HiOutlineQuestionMarkCircle className='icon'/>
        Help
      </div>
      <Section/>
      <Footer/>
      <Router>
        <Routes>
          <Route path="/start-trial" element={<StartTrial/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
