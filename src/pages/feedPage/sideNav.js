import React from 'react';
import Container from "@mui/material/Container";


const SideNav = () => {
  return (
    <Container>
    <div className=" flex flex-col h-screen w-16 bg-white-800">
    <a href="./home" className="flex items-center justify-center h-16 hover:bg-gray-700">
        <i className="fas">Home</i>
    </a>
        <a href="./following" className="flex items-center justify-center h-16 hover:bg-gray-700">
          <i className="fas fa-home">Following</i>
        </a>
        <a href="./following" className="flex items-center justify-center h-16 hover:bg-gray-700">
          <i className="fas fa-home">Notifications</i>
        </a>
  
    </div>
    </Container>
  )
}

export default SideNav;