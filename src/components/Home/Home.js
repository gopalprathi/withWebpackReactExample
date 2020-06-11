import React, { useState, useEffect } from 'react';
import Services from '../../Services/Services';
import {Link} from 'react-router-dom';
import ImageList from '../ImageList/ImageList';
import './Home.css';

const Home = () => {

    const [imageData, setData] = useState([]);

    useEffect(() => {
        console.log('HomeHooks: componentDidMount');
        Services.getImages().then(data => setData(data));
    }, []);

    useEffect(()=>{
        console.log("HomeHooks: componentDidUpdate");
        return ( ()=>{
           console.log('HomeHooks: componentWillUnmount');
        });
     }, [imageData]);
        
        if(imageData)
        {
            return(
                <>
                <Link to="/"><button className="primaryBtn">Logout</button></Link>
                <h1>Image Gallary</h1>
                <div className="container">
                    {/* This function will draw the listview of images. */}
                    <ImageList data={imageData}/>
                </div>
                </>
            )
        }
        else
        {
            return(
                <h1>No data present</h1>
            )
        }
}

export default Home;