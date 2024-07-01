import { useEffect, useState } from "react"
import { ArtList } from "../artwork/ArtList";
import { getAllGalleriesByUser } from "../../services/artistService";
import { getGalleryById } from "../../services/galleryService";
import { useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import {  
    Card, 
    CardBody, 
    CardImg, 
    CardText, 
    CardTitle,
    CardSubtitle,
    ListGroup,
    ListGroupItem
} from "reactstrap"

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

            <Breadcrumb 
            style={{
                margin: 12
                }}>
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
                <BreadcrumbItem>
                    {filteredArtGallery.name}
                </BreadcrumbItem>
            </Breadcrumb>

            <div className="vam-header">
                <article className="vam-title" >
                    <div className=".about-artist">
                        <Card className="my-2" 
                        style={{
                        margin: 10
                        }}>
                            <CardBody>
                                    <CardTitle tag="h1">
                                        {filteredArtGallery.name}
                                    </CardTitle>

                                    <CardTitle tag="h2">
                                        {filteredArtGallery.artist?.name}
                                    </CardTitle>

                                    <br></br>

                                    <CardSubtitle tag="h5" className="mb-2 text-muted">
                                        About the Artist
                                    </CardSubtitle>
                                    
                                    <CardText>
                                        {filteredArtGallery.artist?.artistStatement}
                                    </CardText>

                                    {/* {artGalleries.map((gallery) => {
                                        return (
                                            <List type="inline" key={gallery.id}>
                                                <ListInlineItem>
                                                    {gallery.arts?.name}
                                                </ListInlineItem>
                                            </List>
                                        )
                                    })} */}
                                    
                            </CardBody>
                        </Card>
                    </div>
                </article>
            </div>

            <div>
                <article className="vam-galleries">    
                    <ArtList 
                        currentUser={currentUser} 
                        galleryId={galleryId} 
                        filteredArtGallery={filteredArtGallery}
                    />
                </article>
            </div>
        </>
    )
}