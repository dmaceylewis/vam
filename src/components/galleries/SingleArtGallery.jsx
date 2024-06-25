import { useEffect, useState } from "react"
import { ArtList } from "../artwork/Art";
import { getAllGalleriesByUser } from "../../services/artistService";

export const SingleArtGallery = ({ currentUser, myGalleries }) => {
    const [artGalleries, setArtGalleries] = useState([]);

    useEffect(() => {
        getAllGalleriesByUser(currentUser.id).then((galleryArray) => {
            setArtGalleries(galleryArray)
        })
    }, []);

    return (
        <>
            <div className="vam-header">
            
                <article className="vam-title" >
                    {artGalleries.map((gallery) => {
                                return (
                                    <div key={gallery.id}>
                                        <h1>{gallery.name}</h1>
                                        <h2>{gallery.artist?.name}</h2>
                                    </div>
                                )
                            })}
                </article>
              
            </div>

            <div>
                <article className="vam-galleries">    
                    <ArtList currentUser={currentUser} />
                </article>
            </div>
        </>
    )
}