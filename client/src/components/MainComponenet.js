import React, { useEffect, useState } from 'react'
import AddImage from './AddImage';
import ViewImages from './ViewImages';
import axios from 'axios'

function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
        arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
}

const MainComponenet = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        async function fetchImages() {
            let response = await axios.get('/upload');
            let data = response.data;
            setImages(data);
        }
        fetchImages();
    }, [])
    return (
        <div className='container'>
            <AddImage />
            {images.map(img => {
                let imagePath = `data:${img.coverImageType};charset=utf-8;base64,${toBase64(img.coverImage.data)}`;
                return <ViewImages key={img._id} image={imagePath} />
            })}

        </div>
    )
}

export default MainComponenet
