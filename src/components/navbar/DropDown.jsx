import React from 'react'
import { Link } from 'react-router-dom'

const DropDown = (props) => {
    return (
        <ul className={props.className}>
            {
                props.subMenu !== undefined
                    ?
                    <div className="">
                        {
                            props.subMenu.map(subMenuItem => (
                                <li key={subMenuItem.name} className="text-white whitespace-nowrap px-2 py-1">
                                    <Link to={subMenuItem.route}>{subMenuItem.name}</Link>
                                </li>
                            ))
                        }
                    </div>
                    : ""
            }
        </ul>
    )
}

export default DropDown