import { useEffect, useState } from "react"
import { getAllGalleriesByUser } from "../../services/artistService";
import { getAllGalleries } from "../../services/galleryService";
import PhotoAlbum from "react-photo-album";
import "./art.css"

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


    { /* JSX to display Art in a List */ }
    return (
        <>
        {galleryId == photos[0]?.galleryId ? 
            (<div>
                <PhotoAlbum columns={2} layout="masonry" photos={photos} />
            </div>)
        :
          ("Gallery incoming")
        }
            
        </>
    )
}