import React from 'react'
const ViewImages = ({ image }) => {

    return (
        <div>
            <img className="img-fluid" src={image} alt="image" />
        </div>
    )
}

export default ViewImages
