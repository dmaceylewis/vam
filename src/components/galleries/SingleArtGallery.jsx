import { useEffect, useState } from "react"
import { ArtList } from "../artwork/Art";
import { getAllGalleriesByUser } from "../../services/artistService";
import { getGalleryById } from "../../services/galleryService";
import { useParams } from "react-router-dom";

export const SingleArtGallery = ({ currentUser }) => {
    const [artGalleries, setArtGalleries] = useState([]);
    const [filteredArtGallery, setFilteredArtGallery] = useState({});
    const { galleryId } = useParams();

    useEffect(() => {
        getAllGalleriesByUser(currentUser.id).then((galleryArray) => {
            setArtGalleries(galleryArray)
        })
    }, []);

    // const getFilteredArtGallery = () => {
    //     const filteredArray = artGalleries.filter((gallery) => galleryId === gallery.id)
    //         setFilteredArtGallery(filteredArray)
    // }

    useEffect(() => {
        getGalleryById(galleryId).then((galleryArray) => {
            setFilteredArtGallery(galleryArray)
        })
    }, [])

    return (
        <>
            <div className="vam-header">
            
                <article className="vam-title" >
                    
                                    <div key={filteredArtGallery.id}>
                                        <h1>{filteredArtGallery.name}</h1>
                                        <h2>{filteredArtGallery.artist?.name}</h2>
                                    </div>
                </article>
              
            </div>

            <div>
                <article className="vam-galleries">    
                    <ArtList currentUser={currentUser} galleryId={galleryId} filteredArtGallery={filteredArtGallery}/>
                </article>
            </div>
        </>
    )
}