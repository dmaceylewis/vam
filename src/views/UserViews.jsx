import { Outlet, Route, Routes } from "react-router-dom"
import { Register } from "../components/auth/Register.jsx"
import { Galleries } from "../components/galleries/Galleries.jsx"
import { Home } from "../components/home/Home.jsx"
import { UserNav } from "../components/nav/UserNav.jsx"

export const UserViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <UserNav />
                        <Outlet />
                    </>
                }
            >

            <Route path="/" element={<Home currentUser={currentUser} />} />

            {/* GALLERIES ROUTE */}
            <Route path="galleries">
                <Route index element={<Galleries currentUser={currentUser} />} />
            </Route>
            <Route
                path="register"
                element={<Register currentUser={currentUser} />}
            />
            </Route>
        </Routes>
    )
}