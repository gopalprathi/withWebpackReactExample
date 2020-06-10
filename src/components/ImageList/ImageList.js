import React from 'react';
import ImageItem from '../ImageItem/ImageItem';
import './ImageList.css';

const ImageList = ({data, deleteImageHandler}) => {
    //console.log(data);
    if(data !== ''){
        return(
            data.map(item => {
                return (
                    <ImageItem key={item.id} imagedata={item} deleteImageHandler={deleteImageHandler} />
                )
            })
        )
    }
    return null
}

export default ImageList;