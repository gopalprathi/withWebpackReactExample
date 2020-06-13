const initialState = {data: '', isLoading: true}

const rootreducer = (state=initialState, action) =>{
    switch(action.type){
        case 'LOADING_IMAGES':
            if(action.payload){
                return {...state, isLoading:true}
            }else{
                return {...state, isLoading:false}
            }
        
        case 'FETCHED_IMAGES':
            return {...state, data: action.payload}

        default: 
            return state;
            
    }
}

export default rootreducer;