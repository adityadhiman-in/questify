import React from 'react';
import { BrowserRouter, Navigate, Routes, Route, Router } from 'react-router-dom';
import HomePage from './scenes/homePage/HomePage.jsx';
import LoginPage from './scenes/loginPage/LoginPage.jsx';
import ProfilePage from './scenes/profilePage/profilePage.jsx';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Router>
          <Route path='/' element={LoginPage} />
          <Route path='/home' element={HomePage} />
          <Route path='/profile/:userId' element={ProfilePage} />

        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
