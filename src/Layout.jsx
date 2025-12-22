import React from 'react'
import Navbar from './Componants/Navbar/Navbar'
import Footer from './Componants/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="min-h-[calc(100vh-200px)]">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
