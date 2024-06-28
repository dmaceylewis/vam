import { useEffect, useState } from "react"
import { getAllGalleriesByUser } from "../../services/artistService";
import { getAllGalleries } from "../../services/galleryService";
import { PhotoAlbum } from "react-photo-album";
import "./art.css"
import { Link } from "react-router-dom";
import {  Button, Col, Row } from "reactstrap"

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
            alt: singleArt.name, 
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
        getAllGalleriesByUser(currentUser.id).then((galleryArray) => {
            setGalleries(galleryArray)
        })})
    }

    { /* JSX to display Art in a List */ }
    return (
        <>
            {galleryId == photos[0]?.galleryId ? 
                (<div className="container">
                    <PhotoAlbum 
                        columns={2} 
                        layout="masonry" 
                        photos={photos} 
                        renderPhoto={({ imageProps: { src, alt, style, ...restImageProps } }) => (
                            <img src={src} alt={alt} 
                            style={{
                                paddingTop: "8px",
                                paddingBottom: "8px",
                                width: "100%",
                                overflow: "visible",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                              }} {...restImageProps} />
                          )}
                    />

                    {/* <div className="overlay">
                        <div className="text">Hello World</div>
                    </div> */}
                </div>)
            :
            ("Gallery Coming Soon")
            }
            
            <br></br>

            <Row xs="2">
                <Col>
                    {/* Add Artwork to Gallery Button */}
                    {filteredArtGallery.userId === currentUser.id ? (
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
                </Col>
                <Col>
                    {/* Delete Image Button */}
                    {filteredArtGallery.userId === currentUser.id ? (
                        <Button color="danger" 
                        block={true}
                        style={{
                            margin: 5
                            }}
                            onClick={() => handleDelete(galleryId)}
                            >
                            DELETE GALLERY
                        </Button>
                    ) : (
                        ""
                        )}
                </Col>
            </Row>
        </>
    )
}