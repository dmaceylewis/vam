import { Outlet, Route, Routes } from "react-router-dom"
import { ArtistNav } from "../components/nav/ArtistNav.jsx"
import { Galleries } from "../components/galleries/Galleries.jsx"
import { Home } from "../components/home/Home.jsx"
import { MyGallery } from "../components/galleries/MyGalleries.jsx"
import { NewGallery } from "../components/forms/CreateGalleries.jsx"

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

            {/* ALL GALLERIES ROUTE */}
            <Route path="galleries">
                <Route index element={<Galleries currentUser={currentUser} />} />
            </Route>

            {/* MY GALLERIES ROUTE */}
            <Route
                path="/my-galleries"
                element={<MyGallery currentUser={currentUser} />}
            />

            {/* CREATE NEW GALLERY ROUTE */}
            <Route
                path="/create-gallery"
                element={<NewGallery currentUser={currentUser} />}
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