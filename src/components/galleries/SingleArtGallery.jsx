import { useEffect, useState } from "react"
import { ArtList } from "../artwork/ArtList";
import { getAllGalleriesByUser } from "../../services/artistService";
import { getGalleryById } from "../../services/galleryService";
import { useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

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

            <Breadcrumb style={{margin: 5}}>
                <BreadcrumbItem
                    href="/"
                    tag="a"
                >
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem
                    href="/galleries"
                    tag="a"
                >
                    Galleries
                </BreadcrumbItem>
                <BreadcrumbItem
                >
                    {filteredArtGallery.name}
                </BreadcrumbItem>
            </Breadcrumb>

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