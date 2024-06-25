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
import { useEffect, useState } from "react";

{/* SINGLE ARTIST GALLERY */}
export const ArtistGalleries = ({ myGalleries }) => {
    const [photos, setPhotos] = useState([]);
    const [image, setImage] = useState({});

    useEffect(() => {
        const newPhotoArray = []
        myGalleries[0]?.arts?.forEach((singleArt) => {
        newPhotoArray.push({
            image: singleArt.image})
        })
        setPhotos(newPhotoArray)

    }, [myGalleries])

    const showRandomArt = () => {
        
        const randomIndex = Math.floor(Math.random() * photos.length);
        
        const randomImage = photos[randomIndex]?.image;
        setImage(randomImage);
    }

    useEffect(() => {
        showRandomArt()
    }, [photos])

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
                                <CardImg
                                        alt="Card image cap"
                                        src={image}
                                        top
                                        style={{
                                            height: 300
                                        }}
                                        width="100%"
                                    />
                            
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
                    )
                })}
                
            </div>
        </>
    )
}