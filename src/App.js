import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import HomePage from './pages/HomePage';
import MarketPage from './pages/MarketPage';
import LoanPage from './pages/LoanPage';
import FeedPage from './pages/FeedPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
    <div>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/> }> </Route>
        </Routes>
        <Routes>
          <Route path="/market" element={<MarketPage/>  }> </Route>
        </Routes>
        <Routes>
          <Route path="/loans" element={<LoanPage/>}>  </Route>
        </Routes>
        <Routes>
          <Route path="/feed" element={<FeedPage/> }>  </Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginPage/> }>  </Route>
        </Routes>
        <Routes>
          <Route path="/register" element={<RegisterPage/> }>  </Route>
        </Routes>

    </div>    
    </Router>
  );
}

export default App;
