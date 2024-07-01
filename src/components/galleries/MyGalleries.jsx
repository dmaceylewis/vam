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

    const getAndSetMyGallery = () => {
        getAllGalleriesByUser(currentUser.id).then((galleryArray) => {
            setGalleries(galleryArray)
        })
    }

    useEffect(() => {
        getAndSetMyGallery()
    }, []);

   { /* JSX to display My Gallery => acting as the Artist portal */ }
    return (
        <>
            <div className="vam-header">
            
                <article className="vam-title" >
                    <h1>VAM</h1>
                    
                    <h2>{galleries[0]?.artist?.name}</h2>
                </article>
                
            <hr></hr>
            </div>

            <div className=".about-artist">
                <Card className="my-2">
                    <CardImg
                    alt="Card image cap"
                    src={galleries[0]?.artist?.image}
                    style={{
                        height: 180
                    }}
                    top
                    width="100%"
                    />
                    <CardBody>
                            <CardTitle tag="h4">
                                    About the Artist
                            </CardTitle>
                            
                            <CardText>
                            {galleries[0]?.artist?.artistStatement}
                            </CardText>
                    </CardBody>
                </Card>
            </div>

            <div className="galleries">
                <article className="vam-gallereis">
                    <h1>
                        <span className="d-block p-2 text-bg-primary">
                    
                            <CardText>
                            {galleries[0]?.artist?.name} Galleries
                            </CardText>
                        
                        </span>
                    </h1>
                </article>
                <ArtistGalleries 
                    currentUser={currentUser} 
                    myGalleries={galleries} 
                    getAndSetMyGallery={getAndSetMyGallery}
                />
            </div>
        </>
    )
}