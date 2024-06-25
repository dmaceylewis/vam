import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    Breadcrumb, 
    BreadcrumbItem, 
    Button, 
    Col, 
    Form, 
    FormGroup, 
    Input, 
    Label 
} from "reactstrap";
import { createGallery } from "../../services/galleryService";
import { createArt } from "../../services/artworkSerive";
import { getAllArtists } from "../../services/artistService";


export const NewGalleryExistingArtist = ({ currentUser }) => {
    const [artists, setArtists] = useState([]);
    const [chosenArtist, setChosenArtist] = useState({});

    useEffect(() => {
        getAllArtists().then((galleryArray) => {
            setArtists(galleryArray)
        })
    }, []);

    {/* Select Artist Dropdown Function */}
    const handleArtistChoice = (changeEvent) => {
        if (changeEvent.target.id === "artists") {
           setChosenArtist(parseInt(changeEvent.target.value))
        }
     }
     document.addEventListener("change", handleArtistChoice)


    const [newGallery, setNewGallery] = useState({
        name: ""
    });

    const [newArtInGallery, setNewArtInGallery] = useState({
        name: "",
        image: "",
        description: ""
    });

    const navigate = useNavigate();

    {/* Save/Submit New Gallery for EXISTING ARTIST Button Function */}
    // Needs to save information to galleries and art table in the database
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
                    name: newArtInGallery.name,
                    image: newArtInGallery.image,
                    description: newArtInGallery.description,
                    galleryId: galleryId
                }
                createArt(artSendToAPI)
            }
        })

        .then(() => {
            navigate("/my-galleries")
        })
    
      }


    { /* JSX to display Create New Gallery for Existing Artist Form */ }
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
                    href="/create-gallery/existing-artist"
                    tag="a"
                >
                    New Gallery for Existing Artist
                </BreadcrumbItem>
            </Breadcrumb>

            <Form className="article-form">
            <h1>Create Your Gallery</h1>

                <FormGroup row>
                    <Col >
                                <Input
                                id="artists"
                                name="select"
                                type="select"
                                onChange={(event) => {
                                    const artistCopy = { ...newGallery };
                                    artistCopy.artistId = event.target.value;
                                    setNewGallery(artistCopy);
                                  }}
                                >
                                    <option value= '0'>
                                        Select Artist...
                                    </option>

                                {artists.map((artist) => {
                                     return (
                                    <option key={artist.id} value= {artist.id}>
                                        {artist.name}
                                    </option>
                                    )
                                    })}
                                </Input>
                    </Col>
                </FormGroup>
                
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

