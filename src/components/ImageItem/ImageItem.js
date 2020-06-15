import './ImageItem.css';
import React from 'react';
import PropTypes from 'prop-types';

{/* This function will draw the individual image. */}
export default function ImageItem({imagedata}){

    const divRef = React.useRef()

    function removeImage(){
        divRef.current.remove();
    }

        return (
            (imagedata)?
            <figure className="imgContainer" ref={divRef}> 
                <img src={imagedata.urls.small} alt={imagedata.alt_description} />
                <div className="imageInfoBar">
                    <span>{imagedata.likes} Likes</span>
                    <button className="imageDeleteBtn" onClick={() => removeImage()}>Delete</button>
                </div>
            </figure>
            :null
        )
}

ImageItem.propTypes = {
    imagedata: PropTypes.object
  }