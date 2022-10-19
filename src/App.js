import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';


function App(props) {
  return (
    <BrowserRouter>
      <div className='wrap'>
        <Header />


        <div className='contentWrap'>
          <NavBar />
          <Routes className='content'>
            <Route path='/profile' element={<Profile postsData={props.postsData} />} />
            <Route path='/messages' element={<Messages dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
