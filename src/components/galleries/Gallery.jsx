import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button, Card, CardBody, CardGroup, CardImg, CardTitle, Col } from "reactstrap"

export const Gallery = ({allGalleries, gallery}) => {
    const [photos, setPhotos] = useState([]);
    const [image, setImage] = useState({});

    useEffect(() => {
        const newPhotoArray = []
        gallery?.arts?.forEach((singleArt) => {
        newPhotoArray.push({
            galleryId: singleArt.galleryId,
            image: singleArt.image})
        })
        setPhotos(newPhotoArray)

    }, [allGalleries])

    const showRandomArt = () => {
        
        const randomIndex = Math.floor(Math.random() * photos.length);
        
        const randomImage = photos[randomIndex];
        setImage(randomImage);
    }

    useEffect(() => {
        showRandomArt()
    }, [photos])

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
                                            />}
                                            
                                    {/* {gallery.arts.map((singleArt) => {
                                        return <CardImg
                                        key={singleArt.id}
                                        alt="Card image cap"
                                        src={singleArt.image}
                                        top
                                        style={{
                                            height: 300
                                            }}
                                            width="100%"
                                            />
                                            })} */}
                                            
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
                                    </CardBody>
                                </Card>
                            </CardGroup>
                    </Col>
    )
}