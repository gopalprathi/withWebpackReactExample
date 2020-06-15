const initialState = {data: [], page: 1, isLoading: true}

const rootreducer = (state=initialState, action) =>{
    switch(action.type){
        case 'LOADING_IMAGES':
            if(action.payload){
                return {...state, isLoading:true}
            }else{
                return {...state, isLoading:false}
            }
        
        case 'FETCHED_IMAGES':
            return {...state, page: state.page+1, data: state.data.concat(action.payload)}

        default: 
            return state;
            
    }
}

export default rootreducer;