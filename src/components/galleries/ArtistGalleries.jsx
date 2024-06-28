import { Link } from "react-router-dom"
import { 
    Button,
    Card, 
    CardBody, 
    CardGroup, 
    CardImg,
    CardTitle,
    Col,
    Row
} from "reactstrap"
import "./galleries.css"
import { useEffect, useState } from "react";
import { deleteGallery } from "../../services/galleryService";
import { getAllGalleriesByUser } from "../../services/artistService";

{/* SINGLE ARTIST GALLERY */}
export const ArtistGalleries = ({ currentUser, myGalleries }) => {
    const [photos, setPhotos] = useState([]);
    const [image, setImage] = useState({});

    useEffect(() => {
        const newPhotoArray = []
        myGalleries[0]?.arts?.forEach((singleArt) => {
        newPhotoArray.push({
            galleryId: singleArt.galleryId,
            image: singleArt.image})
        })
        setPhotos(newPhotoArray)

    }, [myGalleries])

    const showRandomArt = () => {
        
        const randomIndex = Math.floor(Math.random() * photos.length);
        
        const randomImage = photos[randomIndex];
        setImage(randomImage);
    }

    useEffect(() => {
        showRandomArt()
    }, [photos])


    {/* Delete Image Button Function */}
    const handleDelete = (gallery) => {
        deleteGallery(gallery.id).then(() => {
        getAllGalleriesByUser(currentUser.id).then((imageArray) => {
            setImage(imageArray)
        })})
    }


    return (
        <>
            <div>
            <Row xs="2">
                {myGalleries.map((gallery) => {
                    return (
                        <Col key={gallery.id}>
                        <CardGroup style={{
                            margin: 5
                        }}
                        className="home-card-row">
                            <Card>
                                {gallery.id === image?.galleryId ? 
                                    <CardImg
                                        alt="Card image cap"
                                        src={image?.image}
                                        top
                                        style={{
                                            height: 300
                                        }}
                                        width="100%"
                                    />
                                    :
                                    <CardImg
                                        alt="Card image cap"
                                        src=""
                                        top
                                        style={{
                                            height: 300
                                        }}
                                        width="100%"
                                    />
                                }
                                
                                <CardBody>

                                <CardTitle tag="h5">
                                    {gallery.name}
                                </CardTitle>

                                <Link to={`/galleries/${gallery.id}`}>
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

                                {/* Add Artwork to Gallery Button */}
                                {myGalleries.userId !== currentUser.id ? (
                                    <Link to={`/editGallery/${gallery.id}`}>
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
                                {myGalleries.userId !== currentUser.id ? (
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

                                </CardBody>
                            </Card>
                        </CardGroup>
                    </Col>
                    )
                })}
            </Row>
            </div>
        </>
    )
}