import Navbar from "../components/Navbar"
import {Outlet} from "react-router-dom"

export default function Layout(){
    return (
        <>
        <Navbar />
        <main className="px-4 py-6">
            <Outlet />
        </main>
        </>
    )
}