import { Link } from "react-router-dom"
import { 
    Button,
    Card, 
    CardBody, 
    CardGroup, 
    CardImg,
    CardTitle,
    Col,
    Row
} from "reactstrap"
import "./galleries.css"
import { getAllGalleries } from "../../services/galleryService.jsx"
import { useEffect, useState } from "react";
import "../home/home.css"
import { Gallery } from "./Gallery.jsx";

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
            <Row xs="2">

                {allGalleries.map((gallery) => {
                    return (
                        <Gallery key={gallery.id} gallery={gallery} allGalleries={allGalleries}/>
                    )
                    })}
                
            </Row>
        </>
    )
}