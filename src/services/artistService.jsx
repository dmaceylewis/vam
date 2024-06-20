// GET ALL ARTISTS FETCH CALL
export const getAllArtists = () => {
    return fetch("http://localhost:8088/artists").then(res => res.json())
}

// GET ARTIST'S GALLERY FETCH CALL => see module MyGalleries.jsx
export const getArtistGallery = (id) => {
    return fetch(`http://localhost:8088/galleries?artistId=${id}&_expand=artist`).then(res => res.json())
}

export const getAllGalleriesByUser = (id) => {
    return fetch(`http://localhost:8088/galleries?userId=${id}`).then(res => res.json())
}