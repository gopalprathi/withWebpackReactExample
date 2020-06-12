import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Services from '../../Services/Services';
import ImageList from '../ImageList/ImageList';
import './Home.css';

export default class Home extends Component {
    state = {
        data: ''
    }

    componentDidMount(){
        Services.getImages().then(data => this.setState({data}));
    }

    componentWillUnmount(){
        alert("Logged out");
    }

    shouldComponentUpdate(){
        console.log("updating component");
        return true;
    }

    componentDidUpdate(){
        console.log("updated component");
    }

    deleteImageHandler = (id) => {
        Services.deleteImage(id).then(data => this.setState({data}));
    }

    render() {
        return (
            <>
                <Link to="/"><button className="primaryBtn">Logout</button></Link>
                <h1>Image Gallery</h1>
                <div className="container">
                    <ImageList data = {this.state.data}  deleteImageHandler={this.deleteImageHandler} />
                </div>
            </>
        );
    }
}
