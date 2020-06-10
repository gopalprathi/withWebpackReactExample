import React, { Component, createRef } from 'react';
import './ImageItem.css';

export default class ImageItem extends Component {
    componentRef = createRef();

    removeImage =() => {
        this.componentRef.current.remove();
    }

    render() {
        return (
            (this.props.imagedata)?
            <figure className="imgContainer" ref={this.componentRef}> 
                <img src={this.props.imagedata.cover_photo.urls.small} alt={this.props.imagedata.cover_photo.alt_description} />
                <div className="imageInfoBar">
                    <span>{this.props.imagedata.cover_photo.likes} Likes</span>
                    <button className="imageDeleteBtn" onClick={()=>{this.removeImage()}}>Delete</button>
                </div>
            </figure>
            :null
        )
    }
}
