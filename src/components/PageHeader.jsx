import React from 'react'
import Logo from '../assets/images/Logo.png'
import NavBar from '../components/navbar/NavBar'
import Button from './Button'
const PageHeader = () => {
    return (
        <div className="flex flex-row items-center justify-between bg-[#282634] px-[3.2rem]">
            <div className="flex flex-row gap-10">
                <div className="">
                    <img width="60" src={Logo} alt="" />
                </div>
                <NavBar />
            </div>
            <div className="flex flex-row gap-4">
                <Button name="Login" clickHandler={() => console.log("Button is Clicked")} />
                <Button name="Register" bgColor="FF3D55" clickHandler={() => console.log("Button is Clicked")} />
            </div>
        </div>
    )
}

export default PageHeader