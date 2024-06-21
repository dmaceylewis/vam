// GET ALL GALLERIES FETCH CALL => see module Galleries.jsx
export const getAllGalleries = () => {
    return fetch("http://localhost:8088/galleries").then(res => res.json())
}

// ADD NEW GALLERY TO MY GALLERY FETCH CALL => see module CreateGalleries.jsx
export const createGallery = (gallery) => {
    return fetch(`http://localhost:8088/galleries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(gallery)
    })
}


// export const createGallery = (id) => {
//     return fetch(`http://localhost:8088/galleries?userId=${id}&_embed=art&_expand=artist`, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(id)
//     })
// }