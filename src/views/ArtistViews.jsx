import { Outlet, Route, Routes } from "react-router-dom"
import { ArtistNav } from "../components/nav/ArtistNav.jsx"
import { Galleries } from "../components/galleries/Galleries.jsx"
import { Home } from "../components/home/Home.jsx"
import { MyGallery } from "../components/galleries/MyGalleries.jsx"

export const ArtistViews = ({ currentUser }) => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <ArtistNav />
                        <Outlet />
                    </>
                }
            >

            <Route path="/" element={<Home currentUser={currentUser} />} />

            {/* MY GALLERIES ROUTE */}
            <Route path="galleries">
                <Route index element={<Galleries currentUser={currentUser} />} />
            </Route>
                <Route
                    path="/my-galleries"
                    element={<MyGallery currentUser={currentUser} />}
                />
            {/* <Route
                path="/editGallery/:galleryId"
                element={<EditGallery currentUser={currentUser} />}
            />

                <Route path="/create-gallery">
                    <Route index element={<CreateGallery currentUser={currentUser} />} />
                </Route> */}
            </Route>
        </Routes>
    )
}