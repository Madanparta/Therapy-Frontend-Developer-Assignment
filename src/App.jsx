import React from 'react';
import {Route,Routes} from "react-router-dom";
import HomePage from './components/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login-page' element={<LoginPage/>}/>
      <Route path='/signup-page' element={<SignUpPage/>}/>
    </Routes>
  )
}

export default App
