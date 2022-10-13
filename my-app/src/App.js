import React from 'react';
import './App.css';

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
    <div className='wrap'>
      <Header />
      <div className='contentWrap'>
        <NavBar />
        <Profile />
      </div>
      <Footer />
    </div>
  );
}

export default App;
