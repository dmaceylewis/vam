import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Input } from "reactstrap";
import { createGallery } from "../../services/galleryService";
import { createArt } from "../../services/artworkSerive";
import { createArtist } from "../../services/artistService";


export const NewGalleryNewArtist = ({ currentUser }) => {
    const [newGallery, setNewGallery] = useState({
        name: ""
    });

    const [newArtInGallery, setNewArtInGallery] = useState({
        name: "",
        image: "",
        description: ""
    });

    const [newArtist, setNewArtist] = useState({
        name: "",
        artistStatement: ""
    });

    const navigate = useNavigate();

    {/* Save/Submit New Gallery Button Function */}
    // Needs to save information to galleries, art, and artists table in the database
    const handleSave = (event) => {
        event.preventDefault()
    
        const gallery = {
            name: newGallery.name,
            artistId: newGallery.artistId,
            userId: currentUser.id
        }
        createGallery(gallery).then((galleryId) => {
            if (galleryId) {
                const artSendToAPI = {
                    name: "",
                    image: "",
                    description: "",
                    galleryId: galleryId
                }
                createArt(artSendToAPI)
            }
        }).then(() => {
            
                const artistSendToAPI = {
                    name: "",
                    artistStatement: ""
                }
                createArtist(artistSendToAPI)
            
        })

        .then(() => {
            navigate("/my-galleries")
        })
    
      }

    { /* JSX to display Create New Gallery Form */ }
    return (
        <div className="form">
            <Breadcrumb style={{margin: 5}}>
                <BreadcrumbItem
                    href="/"
                    tag="a"
                >
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem
                    href="/create-gallery"
                    tag="a"
                >
                    New Gallery
                </BreadcrumbItem>
                <BreadcrumbItem
                    href="/create-gallery/new-artist"
                    tag="a"
                >
                    New Gallery for New Artist
                </BreadcrumbItem>
            </Breadcrumb>

            <Form className="article-form">
            <h1>Create Gallery</h1>
                <FormGroup>
                    <Input
                        id="exampleText"
                        name="text"
                        placeholder="Enter Gallery Name Here"
                        type="textarea"
                        onChange={(event) => {
                            const galleryCopy = { ...newGallery };
                            galleryCopy.name = event.target.value;
                            setNewGallery(galleryCopy);
                          }}
                    />
                </FormGroup>

                <FormGroup>
                    <Input
                        id="exampleText"
                        name="text"
                        placeholder="Enter Artist Name Here"
                        type="textarea"
                        onChange={(event) => {
                            const artistCopy = { ...newArtist };
                            artistCopy.name = event.target.value;
                            setNewArtist(artistCopy);
                          }}
                    />
                </FormGroup>

                <FormGroup>
                    <Input
                        id="exampleText"
                        name="text"
                        placeholder="Enter Artist Statement Here"
                        type="textarea"
                        onChange={(event) => {
                            const artistCopy = { ...newArtist };
                            artistCopy.artistStatement = event.target.value;
                            setNewArtist(artistCopy);
                          }}
                    />
                </FormGroup>

                <h2>New Image</h2>
                <FormGroup>
                    <Input
                        id="exampleUrl"
                        name="url"
                        placeholder="Enter artwork url here"
                        type="url"
                        onChange={(event) => {
                            const artCopy = { ...newArtInGallery };
                            artCopy.image = event.target.value;
                            setNewArtInGallery(artCopy);
                          }}
                    />
                </FormGroup>

                {/* Upload Artwork Form Input => stretch goal */}
                {/* <FormGroup>
                    <Label for="exampleFile">
                    Select File
                    </Label>
                    <Input
                    id="exampleFile"
                    name="file"
                    type="file"
                    />
                    <FormText>
                    Select artwork to be added to your gallery.
                    </FormText>
                </FormGroup> */}

                <FormGroup>
                    <Input
                        id="exampleText"
                        name="text"
                        placeholder="Enter artwork name here"
                        type="textarea"
                        onChange={(event) => {
                            const artCopy = { ...newArtInGallery };
                            artCopy.name = event.target.value;
                            setNewArtInGallery(artCopy);
                          }}
                    />
                </FormGroup>
                
                <FormGroup>
                    <Input
                        id="exampleText"
                        name="text"
                        placeholder="Enter artwork description here"
                        type="textarea"
                        onChange={(event) => {
                            const artCopy = { ...newArtInGallery };
                            artCopy.description = event.target.value;
                            setNewArtInGallery(artCopy);
                          }}
                    />
                </FormGroup>

                {/* Add Artwork Button */}
                {/* <Button color="primary" onClick={handleAddArtwork}>
                    Add Art
                </Button> */}

                
            </Form>

            {/* Submit Gallery Button */}
            <Button color="primary" onClick={handleSave}>
                Submit New Gallery
            </Button>
        </div>
    )
}