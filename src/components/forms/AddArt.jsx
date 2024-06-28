{/* PURPOSE: Add Art to Gallery */}

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { 
    Breadcrumb, 
    BreadcrumbItem, 
    Button, 
    Card, 
    CardHeader, 
    Form, 
    FormGroup, 
    Input, 
    ListGroup, 
    ListGroupItem 
} from "reactstrap";
import { createArt } from "../../services/artworkSerive";


export const AddArt = ({ currentUser }) => {
    const [addedArt, setAddedArt] = useState([]);
    const { galleryId } = useParams();

    const [newArtInGallery, setNewArtInGallery] = useState({
        name: "",
        image: "",
        description: "",
        width: "",
        height: ""
    });


    {/* Add Artwork Button Function */}
    const handleAddArtwork = (event) => {
        event.preventDefault()

        const artSendToAPI = {
            name: newArtInGallery.name,
            image: newArtInGallery.image,
            description: newArtInGallery.description,
            width: parseInt(newArtInGallery.width),
            height: parseInt(newArtInGallery.height),
            galleryId: parseInt(galleryId)
        }
        setAddedArt((currentArray) => [...currentArray, artSendToAPI])
        createArt(artSendToAPI)
        .then(setNewArtInGallery({
                name: "",
                image: "",
                description: "",
                width: "",
                height: ""
            })
        )
     }

    // JSX to display Add New Art to Gallery Form
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
                <BreadcrumbItem
                >
                    {galleryId}
                </BreadcrumbItem>
        </Breadcrumb>

        
        <div className="form">
            <Form className="article-form">
            <h2>Add Artwork to Gallery</h2>
            <FormGroup>
                    <Input
                        id="exampleUrl"
                        name="url"
                        placeholder="Enter artwork url here"
                        type="url"
                        value={newArtInGallery.image}
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
                        value={newArtInGallery.name}
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
                        name="width"
                        placeholder="Enter artwork width here"
                        type="number"
                        value={newArtInGallery.width}
                        onChange={(event) => {
                            const artCopy = { ...newArtInGallery };
                            artCopy.width = event.target.value;
                            setNewArtInGallery(artCopy);
                            }}
                            />
                </FormGroup>

                <FormGroup>
                    <Input
                        id="exampleText"
                        name="height"
                        placeholder="Enter artwork height here"
                        type="number"
                        value={newArtInGallery.height}
                        onChange={(event) => {
                            const artCopy = { ...newArtInGallery };
                            artCopy.height = event.target.value;
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
                        value={newArtInGallery.description}
                        onChange={(event) => {
                            const artCopy = { ...newArtInGallery };
                            artCopy.description = event.target.value;
                            setNewArtInGallery(artCopy);
                            }}
                            />
                </FormGroup>

                {/* Add Artwork Button */}
                <Button color="info" onClick={handleAddArtwork}>
                    Add Art
                </Button>

                
            </Form>
            <br></br>

                    <Card
                    style={{
                        width: '18rem'
                        }}
                        >
                    <CardHeader>
                        Your Added Art
                    </CardHeader>
                    {addedArt.map((art) => {
                        return (
                            <ListGroup flush key={art.id}>
                            <ListGroupItem>
                                Artwork: {art.name}
                            </ListGroupItem>
                        </ListGroup>
                        )
                        }) }                   
                    </Card>

            {/* Submit Gallery Button */}
            <br></br>
            <h5 className="mb-2 text-muted">
                Click when you're finished adding art to the gallery
            </h5>
            <Link to={`/my-galleries`}>
            <Button color="primary">
                Save Art Gallery
            </Button>
            </Link>
        </div>
    </>
    )
}