import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import HomePage from './pages/HomePage';
import MarketPage from './pages/MarketPage';
import LoanPage from './pages/LoanPage';
import FeedPage from './pages/FeedPage';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <Router>
    <div>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/> }> </Route>
        
          <Route path="/market" element={<MarketPage/>}  component={MarketPage}>  </Route>
        
          <Route path="/loans" element={<LoanPage/>}>  </Route>
        
          <Route path="/feed" element={<FeedPage/> }>  </Route>
        
          <Route path="/login" element={<LoginPage/> } component={LoginPage}>  </Route>
        
          <Route path="/register" element={<RegisterPage/> }>  </Route>
        </Routes>
        

    </div>    
    </Router>
  );
}

export default App;
