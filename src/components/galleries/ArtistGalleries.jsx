import {  Row } from "reactstrap"
import "./galleries.css"
import { AritstGallery } from "./ArtistGallery";

{/* SINGLE ARTIST GALLERY */}
export const ArtistGalleries = ({ currentUser, myGalleries, getAndSetMyGallery }) => {
    


    return (
        <>
            <div>
            <Row xs="2">
                {myGalleries.map((gallery) => {
                    return (
                        <AritstGallery 
                            key={gallery.id}
                            myGalleries={myGalleries}
                            gallery={gallery}
                            getAndSetMyGallery={getAndSetMyGallery}
                            currentUser={currentUser}
                        />
                    )
                })}
            </Row>
            </div>
        </>
    )
}