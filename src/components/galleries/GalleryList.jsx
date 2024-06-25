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
import "../home/home.css"

{/* GALLERY LIST */}
export const GalleriesList = () => {
    const [allGalleries, setAllGalleries] = useState([]);

    useEffect(() => {
        getAllGalleries().then((galleryArray) => {
            setAllGalleries(galleryArray)
        })
    }, []);

    { /* JSX to display All VAM Galleries in a List */ }
    return (
        <>
            <div>
                {allGalleries.map((gallery) => {
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