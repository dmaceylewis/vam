// GET ALL GALLERIES FETCH CALL => see module Galleries.jsx
export const getAllGalleries = () => {
    return fetch("http://localhost:8088/galleries").then(res => res.json())
}