// GET ALL ART FETCH CALL
export const getAllArt = () => {
    return fetch("http://localhost:8088/arts").then(res => res.json())
}

// GET ART BY ID FETCH CALL => see module Art.jsx
export const getArtById = (artId) => {
    return fetch(`http://localhost:8088/arts/${artId}`).then(res => res.json())
}

// ADD NEW IMAGE TO GALLERY FETCH CALL => see module CreateGallery.jsx
export const createArt = (art) => {
    return fetch(`http://localhost:8088/arts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(art)
    })
    .then(() => {
        return res.json()
    })
    .then((art) => {
        return art.id
    })
}