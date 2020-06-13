import React, { useEffect } from 'react';
import Services from '../../Services/Services';
import {Link} from 'react-router-dom';
import ImageList from '../ImageList/ImageList';
import './Home.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadingImages, fetchedImages} from '../../action';

const Home = (props) => {
    useEffect(() => {
        props.loadingImages(true);
        Services.getImages().then(data => {
            props.loadingImages(false);
            props.fetchedImages(data)});
    }, []);
        
        if(!props.isLoading)
        {
            return(
                <>
                <Link to="/"><button className="primaryBtn">Logout</button></Link>
                <h1>Image Gallery</h1>
                {props.data?
                (<div className="container">
                    {/* This function will draw the listview of images. */}
                    <ImageList/>
                </div>):
                <h1>No data present</h1>
                }
                </>
            )
        }
        else
        {
            return(
                <h1>Loading....</h1>
            )
        }
}

Home.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    loadingImages: PropTypes.func,
    fetchedImages: PropTypes.func
  }

const mapStateToProps = ({data, isLoading}) => ({data, isLoading})
const mapDispatchToProps = {loadingImages, fetchedImages}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
