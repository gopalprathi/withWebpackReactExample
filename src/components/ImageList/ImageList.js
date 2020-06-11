import './ImageList.css';
import ImageItem from '../ImageItem/ImageItem';
import React,{ useEffect } from 'react';

const ImageList = ({data}) => {
    useEffect(() => {
        console.log('ImageListHooks: componentDidMount');
    }, []);

    useEffect( ()=>{
        console.log("ImageListHooks: componentDidUpdate");
        return ( ()=>{
           console.log('ImageListHooks: componentWillUnmount');
        });
     }, [data]);

    if(data)
    {
        return(
            data.map(item => {
                {/* This function will draw the individual image. */}
                return (
                    <ImageItem key={item.id} imagedata={item}/>
                )
            })
        )
    }
}

export default ImageList;