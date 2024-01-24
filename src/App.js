import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import HomePage from './pages/HomePage.js'
import ContactPage from './pages/ContactPage.js';
import SkillsPage from './pages/SkillsPage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import AboutPage from './pages/AboutPage.js';
import React from 'react';
import TermsPage from './pages/TermsPage.js';
import PrivacyPage from './pages/PrivacyPage.js';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/skills' element={<SkillsPage/>}/>
      <Route path='/projects' element={<ProjectsPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/terms-of-service' element={<TermsPage/>}/>
      <Route path='/privacy-policy' element={<PrivacyPage/>}/>
    </Routes>
    <SpeedInsights/>
    </BrowserRouter>
  );
}

export default App;
