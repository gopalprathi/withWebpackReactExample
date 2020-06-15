import './ImageList.css';
import ImageItem from '../ImageItem/ImageItem';
import React,{ useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const ImageList = ({data}) => {
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

ImageList.propTypes = {
    data: PropTypes.array
}

const mapStateToProps = ({data}) => ({data});

export default connect(mapStateToProps,null)(ImageList);