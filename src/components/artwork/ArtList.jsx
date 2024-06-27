import { useEffect, useState } from "react"
import { getAllGalleriesByUser } from "../../services/artistService";
import { getAllGalleries } from "../../services/galleryService";
import PhotoAlbum from "react-photo-album";
import "./art.css"
import { Link } from "react-router-dom";
import {  Button } from "reactstrap"

export const ArtList = ({ currentUser, galleryId, filteredArtGallery }) => {
    const [galleries, setGalleries] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getAllGalleries().then((galleryArray) => {
            setGalleries(galleryArray)
        })
    }, []);

    useEffect(() => {
        const newPhotoArray = []
        filteredArtGallery.arts?.forEach((singleArt) => {
        newPhotoArray.push({
            src: singleArt.image, 
            width: singleArt.width, 
            height: singleArt.height,
            galleryId: singleArt.galleryId})
        })
        setPhotos(newPhotoArray)

    }, [filteredArtGallery])

    // const photos = artwork.arts?.map((singleArt) => {[
    //     { src: singleArt.image, width: 800, height: 600 },
    //     { src: singleArt.image, width: 1600, height: 900 },
    //   ]});

    {/* Delete Image Button Function */}
    const handleDelete = (gallery) => {
        deleteGallery(gallery.id).then(() => {
        getAllGalleriesByUser(currentUser.id).then((imageArray) => {
            setImage(imageArray)
        })})
    }

    { /* JSX to display Art in a List */ }
    return (
        <>
            {galleryId == photos[0]?.galleryId ? 
                (<div>
                    <PhotoAlbum columns={2} layout="masonry" photos={photos} />
                </div>)
            :
            ("Gallery Coming Soon")
            }
            
            <br></br>
            {/* Add Artwork to Gallery Button */}
            {galleries.userId !== currentUser.id ? (
                <Link to={`/editGallery/${galleryId}`}>
                    <Button 
                        block 
                        color="info" 
                        style={{
                            margin: 5
                        }}
                    >
                        ADD ART TO GALLERY
                    </Button>
                </Link>
            ) : (
                ""
            )}

            {/* Delete Image Button */}
            {galleries.userId !== currentUser.id ? (
                <Button color="danger" 
                    block={true}
                    style={{
                        margin: 5
                    }}
                    onClick={() => handleDelete(gallery)}
                >
                    DELETE GALLERY
                </Button>
            ) : (
                ""
            )}
        </>
    )
}