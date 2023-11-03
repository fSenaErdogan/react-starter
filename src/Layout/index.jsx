import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import SolSidebar from "./SolSidebar.jsx"

import { Outlet } from "react-router-dom"

const Layout = () => {

    return (
        <>
            <div className='bg-stone-50'>
                <Header />
                <div className='shadow-inner flex min-h-screen'>
                <div className="w-1/5 p-2">
                    <SolSidebar />
                    </div>
                    <div className="w-3/5 p-2">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}


export default Layout