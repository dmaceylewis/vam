import { useEffect, useState } from "react"
import { getAllArt } from "../../services/artworkSerive";
import "./art.css"

export const ArtList = ({ currentUser }) => {
    const [artwork, setArtwork] = useState([]);

    useEffect(() => {
        getAllArt().then((artworkArray) => {
            setArtwork(artworkArray)
        })
    }, []);

    {/* Filter Artwork by User */}
    useEffect(() => {
        const foundArtwork = artwork.filter((art) => art.galleryId === currentUser.id)
        setArtwork(foundArtwork)
     },[artwork]);

    { /* JSX to display Art in a List */ }
    return (
        <>
            <div class="masonry">
            {artwork.map((art) => {
                    return (
                    <div class="item">
                        <Card inverse>
                            <CardImg
                            alt="Card image cap"
                            src={art.image}
                            style={{
                                height: 270
                            }}
                            width="100%"
                            />
                            <CardImgOverlay>
                            <CardTitle tag="h5">
                                {art.name}
                            </CardTitle>
                            <CardText>
                                <small className="text-muted">
                                {art.description}
                                </small>
                            </CardText>
                            </CardImgOverlay>
                        </Card>
                    </div>
                            )
                    })}
                
            </div>
        </>
    )
}