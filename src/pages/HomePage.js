import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import "../pages/HomePage.css";
import btc1 from "../components/images/btc1.png";
import btc2 from "../components/images/btc2.png";
import btc3 from "../components/images/btc3.png";
import p2p from "../components/images/p2p.png";
import potfobuild  from "../components/images/potfobuild.png";
import scanpaygo from "../components/images/scanpaygo.png";
import {Link} from "react-router-dom";


const HomePage = () => {
  return (
    <Container className="container">
      <div className="row">
        <div className="content">
            <h1>Discover the true potential of Crypto-Currency Market</h1>
            <p>We believe that everyone should have the freedom to earn, hold, spend, share and give their money - no matter who you are or where you come from. We are a global company that operates the largest cryptocurrency exchange in the world in terms of daily trading volume of cryptocurrencies</p>
            <Button 
                   type="Trader-window"
                   fullWidth
                   variant="contained"
                   href="./Market"
                   sx={{mt:3 , mb:2}}
                > 
                  Let's get started
                </Button>
                <Button 
                   type="SignUp"
                   fullWidth
                   variant="contained"
                   herf="./Register"
                   sx={{mt:3 , mb:2}}
                > 
                  Sign In
                </Button>
            
          </div>
          <img src={btc1} alt="btc1" className="image"></img>
          </div>
      
        <div className="row">
        <img src={btc2} alt="btc1" className="image"></img>
        <div className="content">
            <h1>Trade with bitcoins</h1>
            <p>This is your Service description. Use this space to describe what the service entails, benefits for users and any other important information.</p>
            <Button 
                   type="Trader-window"
                   fullWidth
                   variant="contained"
                   href="./Market"
                   sx={{mt:3 , mb:2}}
                > 
                  Start Trading
                </Button>
                
            
          </div>
          
          
          </div>


          <div className="row">
        <div className="content">
            <h1>Take your loan</h1>
            <p>This is your Service description. Use this space to describe what the service entails, benefits for users and any other important information</p>
            <Button 
                   type="Trader-window"
                   fullWidth
                   variant="contained"
                   href="./loans"
                   sx={{mt:3 , mb:2}}
                > 
                  Request a Loan
                </Button>
                
            
          </div>
          <img src={btc3} alt="btc3" className="image"></img>
          </div>
          
          <footer style={{ backgroundColor: '#f2f2f2', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ margin: 0 }}>Copyright © 2023</p>
      </div>
    </footer>
    <Link to="p2p">
          <img src={p2p} alt="p2p"></img>
          </Link>
          <Link to="p2p">
          <img src={potfobuild} alt="p2p"></img>
          </Link>
          <Link to="p2p">
          <img src={scanpaygo} alt="p2p"></img>
          </Link>
    </Container>
    
  )
}

export default HomePage;