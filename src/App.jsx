import './index.css';
import React from 'react';
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import TermsPage from './pages/TermsPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import NotFound from './pages/NotFound.jsx';

import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'


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
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Analytics/>
    </BrowserRouter>
  );
}

export default App;