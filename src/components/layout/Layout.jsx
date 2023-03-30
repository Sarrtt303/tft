import React from 'react'
import { Outlet } from 'react-router-dom'
import PageHeader from '../PageHeader'

export const Layout = () => {
    return (
        <div className="w-screen">
            <PageHeader />
            <Outlet />
        </div>
    )
}
