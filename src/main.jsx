import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
        <React.StrictMode>
          <Toaster position="top-left" />
          <App />
        </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>
)
