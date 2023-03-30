import React from 'react'

const NavBar = () => {
    let mainMenu = [
        {
            name: "Home",
            route: "/",
        },
        {
            name: "Market",
            route: "/market"
        },
        {
            name: "Loan",
            route: "/loan"
        }
    ]
    return (
        <>
            <ul className='flex flex-row items-center gap-3'>
                {
                    mainMenu.map((menuItem) => (
                        <li>{menuItem.name}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default NavBar