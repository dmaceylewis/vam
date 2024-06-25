// GET ALL ARTISTS FETCH CALL
export const getAllArtists = () => {
    return fetch("http://localhost:8088/artists").then(res => res.json())
}

// GET ARTIST'S GALLERY FETCH CALL => see module MyGalleries.jsx
export const getArtistGallery = (id) => {
    return fetch(`http://localhost:8088/galleries?artistId=${id}&_expand=artist`).then(res => res.json())
}

export const getAllGalleriesByUser = (id) => {
    return fetch(`http://localhost:8088/galleries?userId=${id}&_expand=artist&_embed=arts`).then(res => res.json())
}

export const createArtist = (artist) => {
    return fetch(`http://localhost:8088/artists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(artist)
    })
    .then((res) => {
        return res.json()
    })
    .then((artist) => {
        return artist.id
    })
}