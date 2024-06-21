import { Link } from "react-router-dom"
import { 
    Button,
    Card, 
    CardBody, 
    CardGroup, 
    CardImg,
    CardTitle
} from "reactstrap"
import "./galleries.css"
import { getAllGalleries } from "../../services/galleryService.jsx"
import { useEffect, useState } from "react";

{/* SINGLE ARTIST GALLERY */}
export const ArtistGalleries = ({ currentUser, myGalleries }) => {

    const [galleries, setGalleries] = useState([]);
    const [artistGallery, setArtistGallery] = useState([]);

    // useEffect(() => {
    //     getAllGalleries().then((galleryArray) => {
    //         setGalleries(galleryArray)
    //     })
    // }, []);

    // {/* Filter Galleries by User */}
    // useEffect(() => {
    //     const foundGalleries = galleries.filter((gallery) => gallery.artistId === myGalleries.artistId)
    //     setArtistGallery(foundGalleries)
    //  },[myGalleries])

    return (
        <>
            <div>
                {myGalleries.map((gallery) => {
                    return (
                        <CardGroup style={{
                            margin: 5
                        }}
                        key={gallery.id}
                        className="home-card-row">
                            <Card>
                                {gallery.arts.map((singleArt) => {
                                    return <CardImg
                                        alt="Card image cap"
                                        src={singleArt.image}
                                        top
                                        style={{
                                            height: 300
                                        }}
                                        width="100%"
                                    />
                                })}
                                <CardBody>
                                <CardTitle tag="h5">
                                    {gallery.name}
                                </CardTitle>
                                <Link to={`/gallery/${gallery.id}`}>
                                    <Button 
                                        block 
                                        color="primary" 
                                        style={{
                                            margin: 5
                                        }}
                                    >
                                        VISIT GALLERY
                                    </Button>
                                </Link>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    )
                })}
                
            </div>
        </>
    )
}