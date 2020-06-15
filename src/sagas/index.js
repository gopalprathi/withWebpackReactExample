import {takeEvery, select, call, put} from 'redux-saga/effects';
import {fetchedImages, loadingImages} from '../action'
import Services from '../Services/Services';

const getPage = (state) => state.page

const scrollToBottom = () => window.scrollTo(0,document.querySelector(".container").scrollHeight);

function* handleLoadImages(){
    console.log('in generator');
    //yield put(loadingImages(true));
    const page = yield select(getPage);
    const imageData =  yield call(Services.getImages, page);
    console.log('images from generator '+imageData);
    yield put(fetchedImages(imageData))
    //yield put(loadingImages(false));
    yield call(scrollToBottom);
    
}

export default function* sagaWatcher(){
    yield takeEvery('LOAD_IMAGES', handleLoadImages);
}