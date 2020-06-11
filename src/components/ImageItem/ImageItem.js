import './ImageItem.css';
import React from 'react';

{/* This function will draw the individual image. */}
export default function ImageItem({imagedata}){

    const divRef = React.useRef()

    function removeImage(){
        divRef.current.remove();
    }

        return (
            (imagedata)?
            <figure className="imgContainer" ref={divRef}> 
                <img src={imagedata.cover_photo.urls.small} alt={imagedata.cover_photo.alt_description} />
                <div className="imageInfoBar">
                    <span>{imagedata.cover_photo.likes} Likes</span>
                    <button className="imageDeleteBtn" onClick={() => removeImage()}>Delete</button>
                </div>
            </figure>
            :null
        )
}