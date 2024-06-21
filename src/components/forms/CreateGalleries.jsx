import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { createGallery } from "../../services/galleryService";
import { AddArt } from "./AddArtwork";


export const NewGallery = ({ currentUser }) => {
    const [newGallery, setNewGallery] = useState({
        name: ""
    });

    const navigate = useNavigate();

    {/* Save/Submit New Gallery Button Function */}
    // Needs to save information to galleries, art, and artists table in the database
    // Needs artistId and userId
    const handleSave = (event) => {
        event.preventDefault()
    
        const gallery = {
            name: newGallery.name,
            artistId: newGallery.artistId,
            userId: currentUser.id
        }
        createGallery(gallery).then(() => {
            navigate("/my-galleries")
        })
    
      }

    { /* JSX to display Create New Gallery Form */ }
    return (
        <div className="form">
            <Form className="article-form">
            <h1>Create Your Gallery</h1>
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
                        // onChange={(event) => {
                        //     const artistCopy = { ...newGallery };
                        //     artistCopy.name = event.target.value;
                        //     setNewArtist(artistCopy);
                        //   }}
                    />
                </FormGroup>

                {/* Add Artwork Form => see module AddArtwork.jsx */}
                <AddArt currentUser={currentUser} />

                
            </Form>

            {/* Submit Gallery Button */}
            <Button color="primary" onClick={handleSave}>
                Submit New Gallery
            </Button>
        </div>
    )
}

