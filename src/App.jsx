import React from 'react';
import {Route,Routes} from "react-router-dom";
import HomePage from './components/HomePage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login-page' element={<LoginPage/>}/>
    </Routes>
    </>
  )
}

export default App
