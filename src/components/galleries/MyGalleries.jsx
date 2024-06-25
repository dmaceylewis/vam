import {  
    Card, 
    CardBody, 
    CardImg, 
    CardText, 
    CardTitle
} from "reactstrap"
import "../home/home.css"
import { getAllArtists, getAllGalleriesByUser } from "../../services/artistService";
import { useEffect, useState } from "react";
import { ArtistGalleries } from "./ArtistGalleries";

export const MyGallery = ({ currentUser }) => {
    const [artists, setArtists] = useState([]);
    const [galleries, setGalleries] = useState([]);

    useEffect(() => {
        getAllArtists().then((galleryArray) => {
            setArtists(galleryArray)
        })
    }, []);

    useEffect(() => {
        getAllGalleriesByUser(currentUser.id).then((galleryArray) => {
            setGalleries(galleryArray)
        })
    }, []);

   { /* JSX to display My Gallery => acting as the Artist portal */ }
    return (
        <>
            <div className="vam-header">
            
                <article className="vam-title" >
                    <h1>VAM</h1>
                    {galleries.map((gallery) => {
                    return (
                    <h1 key={gallery.id}>{gallery.artist?.name}</h1>
                            )
                    })}
                </article>
                
            
            <hr></hr>
            </div>

            <div className=".about-artist">
                <Card className="my-2">
                    <CardImg
                    alt="Card image cap"
                    src="https://firebasestorage.googleapis.com/v0/b/vam-c9.appspot.com/o/painting5-100.jpg?alt=media&token=4838414e-4a32-463c-be65-ce455b03c2e5"
                    style={{
                        height: 180
                    }}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                            About the Artist
                            </CardTitle>
                            {galleries.map((gallery) => {
                            return (
                            <CardText key={gallery.id}>
                            {gallery.artist?.artistStatement}
                            </CardText>
                                    )
                            })}
                    <CardText>
                        <small className="text-muted">
                        Last updated 3 mins ago
                        </small>
                    </CardText>
                    </CardBody>
                </Card>
            </div>

            <div className="galleries">
                <article className="vam-gallereis">
                    <h1>
                        <span className="d-block p-2 text-bg-primary">
                        {galleries.map((gallery) => {
                            return (
                            <CardText key={gallery.id}>
                            {gallery.artist?.name} Galleries
                            </CardText>
                                    )
                            })}
                        </span>
                    </h1>
                </article>
                <ArtistGalleries currentUser={currentUser} myGalleries={galleries} />
            </div>
        </>
    )
}