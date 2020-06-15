const loadImages = () => ({type: 'LOAD_IMAGES'});
const loadingImages = (status) => ({type: 'LOADING_IMAGES', payload: status});
const fetchedImages = (imageData) => ({type: 'FETCHED_IMAGES', payload: imageData});

export {loadImages, loadingImages, fetchedImages};