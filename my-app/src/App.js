import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className='wrap'>
        <Header />
        <NavBar />
        <div className='contentWrap'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/Messages' element={<Messages />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
