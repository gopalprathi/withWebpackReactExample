const loadingImages = (status) => ({type: 'LOADING_IMAGES', payload: status});
const fetchedImages = (imageData) => ({type: 'FETCHED_IMAGES', payload: imageData});

export {loadingImages, fetchedImages};