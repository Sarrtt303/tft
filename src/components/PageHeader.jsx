import React from 'react'
import Logo from '../assets/images/Logo.png'
import NavBar from '../components/navbar/NavBar'
const PageHeader = () => {
    return (
        <div className="flex flex-row items-center justify-between">
            <div className="">
                <img width="60" src={Logo} alt="" />
            </div>
            <NavBar />
        </div>
    )
}

export default PageHeader