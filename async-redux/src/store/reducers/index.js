import {FETCH_CHARACTORDATA_START ,
FETCH_CHARACTORDATA_SUCCESS,
FETCH_CHARACTORDATA_FAILURE} from '../actions'


const initialState = {
    charactorArray: [] ,
    isLoading: false, 

}  

export const reducer = (state = initialState , action) => {
    switch(action.type){
        case FETCH_CHARACTORDATA_START :
            return{
                ...state ,
                isLoading : true
            }
        
        case FETCH_CHARACTORDATA_SUCCESS :
            return {
               ...state,
               isLoading : false
            }  
        default: 
        return state;
    }  
       
}

