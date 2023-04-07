import React from 'react'
import MenuItem from './MenuItem'
const NavBar = () => {
    let mainMenu = [
        {
            name: "Home",
            route: "/",
        },
        {
            name: "About Us",
            route: "/about-us"
        },
        {
            name: "Trade",
            subMenu: [
                {
                    name: "Sub Item",
                    route: "/"
                },
                {
                    name: "Sub Item 1",
                    route: "/"
                }
            ]
        },
        {
            name: "Market",
            subMenu: [
                {
                    name: "Sub Item",
                    route: "/"
                },
                {
                    name: "Sub Item 1",
                    route: "/"
                }
            ]
        },
        {
            name: "Loan",
            route: "/loans"
        },
        {
            name: "Feed",
            route: "/feedPage"
        }
    ]
    return (
        <>
            <ul className='flex flex-row items-center gap-10'>
                {
                    mainMenu.map((menuItem) => {
                        return <MenuItem menuItem={menuItem} />
                    })
                }
            </ul>
        </>
    )
}

export default NavBar