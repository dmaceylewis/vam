import { useState } from "react";
import { Button, FormGroup, Input } from "reactstrap";
import { createArt } from "../../services/artworkSerive";

{/* Add Art to New Gallery FormGroup => part of CreateGalleries.jsx */}
export const AddArt = ({ currentUser }) => {
    const [newArtInGallery, setNewArtInGallery] = useState({
        name: "",
        image: "",
        description: ""
    });

    {/* Add Art to New Gallery Button Function */}
    // Needs to save information to art table in the database
    // Needs artistId and galleryId
    const handleAddArtwork = (event) => {
        event.preventDefault()
    
        const art = {
            name: newArtInGallery.name,
            image: newArtInGallery.image,
            description: newArtInGallery.description,
            userId: currentUser.id
        }
        createArt(art)
        }
    

    { /* JSX to display Add New Art to Gallery Form */ }
    return (
        <div>

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
                <Button color="primary" onClick={handleAddArtwork}>
                    Add Art
                </Button>
        </div>
    )
}

