import React from 'react';
import {Route,Routes} from "react-router-dom";
import HomePage from './components/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SuccessPage from './pages/SuccessPage';
import TrackingScreen from './components/TrackingScreen';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login-page' element={<LoginPage/>}/>
      <Route path='/signup-page' element={<SignUpPage/>}/>
      <Route path='/log-success' element={<SuccessPage/>}/>
      <Route path='/tracking-screen' element={<TrackingScreen/>}/>
    </Routes>
  )
}

export default App
