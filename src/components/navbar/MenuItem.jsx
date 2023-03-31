import React, { useEffect, useRef, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import DropDown from './DropDown'

const MenuItem = ({ menuItem }) => {
    const [dropDown, setDropDown] = useState(false);
    const ref = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (dropDown && !ref.current.contains(event.target)) {
                setDropDown(false)
            }
        };
        document.addEventListener('mousedown', handler)
        document.addEventListener('touchstart', handler)
        return () => {
            document.removeEventListener('mouedown', handler)
            document.removeEventListener('touchstart', handler)
        }

    }, [dropDown])
    const onMouseEnter = () => {
        setDropDown(true)
    }
    const onMouseLeave = () => {
        setDropDown(false)
    }

    return (
        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} key={menuItem.name} ref={ref} className="relative text-white whitespace-nowrap flex flex-row items-center justify-center gap-1 ">
            <Link to={menuItem.route === undefined ? null : menuItem.route}>
                {menuItem.name}
            </Link>
            {menuItem.subMenu !== undefined ? <BsChevronDown width={40} /> : ""}
            <DropDown subMenu={menuItem.subMenu} className={`absolute left-0 top-6 pt-[1.2rem] bg-[#282634] ${dropDown ? "" : "hidden"}`} />
        </li>
    )
}

export default MenuItem