// GET ALL ART FETCH CALL
export const getAllArt = () => {
    return fetch("http://localhost:8088/art").then(res => res.json())
}

// ADD NEW IMAGE TO GALLERY FETCH CALL => see module AddArtwork.jsx
export const createArt = (art) => {
    return fetch(`http://localhost:8088/art`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(art)
    })
}