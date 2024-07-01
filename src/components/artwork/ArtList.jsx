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

    // const renderContainer = ({ containerProps, children, containerRef }) => (
    //     <div>
    //       <div ref={containerRef} {...containerProps}>
    //         {children}
    //       </div>
    //     </div>
    //   );
      
    //   const renderRowContainer = ({ rowContainerProps, rowIndex, rowsCount, children }) => (
    //     <>
    //       <div {...rowContainerProps}>{children}</div>
    //       {rowIndex < rowsCount - 1 && (
    //         <div
    //           style={{
    //             borderTop: "2px solid #eee",
    //             marginBottom: "20px",
    //           }}
    //         />
    //       )}
    //     </>
    //   );

    const renderPhoto = ({ layout, layoutOptions, imageProps, photo, ...restImageProps }) => {
        <div 
        style={{
            boxSizing: "content-box",
            alignItems: "center",
            paddingBottom: 0,
          }}
        >
            <img src={photo.src} alt={photo.alt} title={photo.alt}
                style={{
                width: "100%"
            }} {...restImageProps} 
            />
            <div style={{
                paddingTop: "8px",
                paddingBottom: "8px",
                overflow: "visible",
                whiteSpace: "nowrap",
                textAlign: "center",
            }}
            >
                {photo.alt}
            </div>
        </div>

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
                        // renderContainer={renderContainer}
                        // renderRowContainer={renderRowContainer}
                        renderPhoto={renderPhoto}
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