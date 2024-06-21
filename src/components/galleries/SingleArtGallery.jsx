import { useEffect, useState } from "react"
import { getAllArt } from "../../services/artworkSerive";

export const SingleArtGallery = () => {
    

    return (
        <>
            <div className="vam-header">
            
                <article className="vam-title" >
                    <h1>{gallery.name}</h1>
                    <h2>{gallery.artist.name}</h2>
                </article>
              
            </div>
        </>
    )
}