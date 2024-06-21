import {  
    Card, 
    CardText, 
    CardTitle, 
    Col, 
    Row
} from "reactstrap"
import "../home/home.css"
import { getAllArtists, getAllGalleriesByUser, getArtistGallery } from "../../services/artistService";
import { useEffect, useState } from "react";
import { ArtistGalleries } from "./ArtistGalleries";

export const MyGallery = ({ currentUser }) => {
    const [myGallery, setMyGallery] = useState([]);
    const [artists, setArtists] = useState([]);
    const [foundGalleryArtists, setFoundGalleryArtists] = useState([]);
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
    
         {/* Filter Artists by User */}
    //      useEffect(() => {
    //         const foundArtist = galleries.map((gallery) => {
    //             const galleryArtist = artists.filter((artist) => artist.id === gallery.artistId)
    //             console.log(galleryArtist)
    //             return galleryArtist[0]
    //         })
    //         setFoundGalleryArtists(foundArtist[0])
    //      },[foundGalleryArtists]);
         
    // useEffect(() => {

    //     getArtistGallery(foundGalleryArtists.id).then((galleryArray) => {
    //         setMyGallery(galleryArray)
    //     })
    // }, []);

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
            <Row xs="2">
                <Col sm="6">
                    <img src="..." className="rounded" alt="..." />
                </Col>
                <Col sm="6">
                    <Card
                        body
                    >
                        <CardTitle tag="h5">
                        About Artist
                        </CardTitle>
                        <CardText>
                        VAM is a virtual art gallery that acts as a hub for artists to showcase their work year-round
                        </CardText>
                    </Card>
                </Col>
            </Row>
            </div>

            <div className="galleries">
                <article className="vam-gallereis">
                    <h1>
                        <span className="d-block p-2 text-bg-primary">
                            ARTIST NAME GALLERIES
                        </span>
                    </h1>
                </article>
                <ArtistGalleries currentUser={currentUser} myGalleries={galleries} />
            </div>
        </>
    )
}