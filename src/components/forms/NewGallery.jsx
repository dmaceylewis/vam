import { Link } from "react-router-dom"
import { Button, Col, Container, Row } from "reactstrap"

export const CreateNewGalleries = () => {
    

    return (
        <>
            <Container>
                <h2>Create a New Gallery for an Exiting Artist or a New Artist</h2>
                <h6>Select an option below</h6>
                <Row xs="2">
                    <Col className="bg-light border">
                                <Link to={`/create-gallery/existing-artist`}>
                                    <Button 
                                        block 
                                        color="primary" 
                                        style={{
                                            margin: 5
                                        }}
                                    >
                                        CREATE GALLERY FOR EXISTING ARTIST
                                    </Button>
                                </Link>
                    </Col>
                    <Col className="bg-light border">
                                <Link to={`/create-gallery/new-artist`}>
                                    <Button 
                                        block 
                                        color="primary" 
                                        style={{
                                            margin: 5
                                        }}
                                    >
                                        CREATE GALLERY FOR NEW ARTIST
                                    </Button>
                                </Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}