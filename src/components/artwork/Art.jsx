import { useEffect, useState } from "react"
import { getAllGalleriesByUser } from "../../services/artistService";
import PhotoAlbum from "react-photo-album";
import "./art.css"

export const ArtList = ({ currentUser }) => {
    const [galleries, setGalleries] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getAllGalleriesByUser(currentUser.id).then((galleryArray) => {
            setGalleries(galleryArray)
        })
    }, []);

    useEffect(() => {
        const newPhotoArray = []
        galleries[0]?.arts?.forEach((singleArt) => {
        newPhotoArray.push({
            src: singleArt.image, 
            width: singleArt.width, 
            height: singleArt.height})
        })
        setPhotos(newPhotoArray)

    }, [galleries])

    // const photos = artwork.arts?.map((singleArt) => {[
    //     { src: singleArt.image, width: 800, height: 600 },
    //     { src: singleArt.image, width: 1600, height: 900 },
    //   ]});


    { /* JSX to display Art in a List */ }
    return (
        <>
            <div>
                <PhotoAlbum columns={2} layout="masonry" photos={photos} />
            </div>
        </>
    )
}