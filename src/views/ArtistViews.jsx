import { Outlet, Route, Routes } from "react-router-dom"
import { ArtistNav } from "../components/nav/ArtistNav.jsx"
import { Home } from "../components/home/Home.jsx"
import { Galleries } from "../components/galleries/Galleries.jsx"
import { SingleArtGallery } from "../components/galleries/SingleArtGallery.jsx"
import { MyGallery } from "../components/galleries/MyGalleries.jsx"
import { CreateNewGalleries } from "../components/forms/NewGallery.jsx"
import { NewGalleryExistingArtist } from "../components/forms/NewGalleryExistingArtist.jsx"
import { NewGalleryNewArtist } from "../components/forms/CreateGalleryNewArtist.jsx"
import { AddArt } from "../components/forms/AddArt.jsx"

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
                    <Route
                        path=":galleryId"
                        element={<SingleArtGallery currentUser={currentUser} />}
                    />
            </Route>

            {/* MY GALLERIES ROUTE */}
            <Route
                path="/my-galleries"
                element={<MyGallery currentUser={currentUser} />}
            />

            <Route
                path="/editGallery/:galleryId"
                element={<AddArt currentUser={currentUser} />}
            />

            {/* CREATE NEW GALLERY ROUTE */}
            <Route path="/create-gallery">
                    <Route index element={<CreateNewGalleries currentUser={currentUser} />} />
                    <Route
                        path=":existing-artist"
                        element={<NewGalleryExistingArtist currentUser={currentUser} />}
                    />
            </Route>
                    <Route
                        path="/create-gallery/new-artist"
                        element={<NewGalleryNewArtist currentUser={currentUser} />}
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