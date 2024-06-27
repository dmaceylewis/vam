import { 
    Button, 
    Card, 
    CardSubtitle, 
    CardText, 
    CardTitle, 
    Col, 
    Row, 
    UncontrolledCarousel 
} from "reactstrap"
import "./home.css"
import { GalleriesList } from "../galleries/GalleryList"

export const Home = ({ currentUser }) => {
    return (
        <>
            <div className="vam-header">

                <article className="vam-title">
                    <h1>VAM</h1>
                    <h1>Virtual Art Museum</h1>
                </article>
            
            <UncontrolledCarousel
            items={[
                {
                altText: 'VAM',
                caption: 'Virtual Art Museum',
                key: 1,
                src: 'https://firebasestorage.googleapis.com/v0/b/vam-c9.appspot.com/o/IMG_5611.JPG?alt=media&token=d54cf561-a4fd-4630-9db8-0a38cd2df64a'
                },
                {
                altText: 'VAM',
                caption: 'Virtual Art Museum',
                key: 2,
                src: 'https://firebasestorage.googleapis.com/v0/b/vam-c9.appspot.com/o/IMG_5608.JPG?alt=media&token=de3507e9-754c-4c6d-b3df-f2cf1fb9f150'
                },
                {
                altText: 'VAM',
                caption: 'Virtual Art Museum',
                key: 3,
                src: 'https://firebasestorage.googleapis.com/v0/b/vam-c9.appspot.com/o/IMG_5610.JPG?alt=media&token=d77a5690-a36e-4e67-bc2a-a9558c2e7fa8'
                }
            ]}
            />
            <hr></hr>
            </div>

            <div className="about-vam">
            <Row xs="2">
                <Col sm="6">
                    <img src="https://firebasestorage.googleapis.com/v0/b/vam-c9.appspot.com/o/Black%20%26%20White%20Typography%20Creative%20Artist%20ArtDesign%20Logo%20.png?alt=media&token=a9587cbd-3027-486b-8e71-a7725c373b0e" 
                    className="rounded" alt="VAM Logo" />
                </Col>
                <Col sm="6">
                    <Card
                        body
                    >
                        <CardTitle tag="h3">
                        About VAM
                        </CardTitle>
                        <CardText>
                        VAM is a Virtual Art Museum that acts as a hub for artists to showcase their work year-round.
                        Artists can curate their digital galleries and explore other exhibits.
                        </CardText>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Scroll down to explore our current galleries
                        </CardSubtitle>
                    </Card>
                    <br></br>
                    <Card
                        body
                    >
                        <CardTitle tag="h4">
                        Join the VAM Community
                        </CardTitle>
                        <CardText>
                        Create an account and showcase your art with us!
                        </CardText>
                        <Button color="primary">
                        Register
                        </Button>
                    </Card>
                </Col>
            </Row>
            </div>

            <div className="galleries">
                <article className="vam-gallereis">
                    <h1>
                        <span className="d-block p-2 text-bg-primary">
                            EXPLORE VAM GALLERIES
                        </span>
                    </h1>
                </article>
                <GalleriesList currentUser={currentUser} />
            </div>
        </>
    )
}