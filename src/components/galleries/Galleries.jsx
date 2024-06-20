import "./galleries.css"
import { GalleriesList } from "./GalleryList.jsx";

{/* GALLERIES PAGE =>  ALL GALLERIES LIST */}
export const Galleries = ({ currentUser }) => {


    return (
        <>
           <div className="galleries">
                <article className="vam-gallereis">
                    <h1>
                        <span className="d-block p-2 text-bg-primary">
                            CURRENT VAM GALLERIES
                        </span>
                    </h1>
                </article>
                <GalleriesList currentUser={currentUser} />
            </div>
        </>
    )
}