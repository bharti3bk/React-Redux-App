import axios from 'axios';
export const FETCH_CHARACTORDATA_START = 'FETCH_CHARACTORDATA_START';
export const FETCH_CHARACTORDATA_SUCCESS = 'FETCH_CHARACTORDATA_SUCCESS'
export const FETCH_CHARACTORDATA_FAILURE =  'FETCH_CHARACTORDATA_FAILURE'


export const getResponse = () => {
    return dispach => {
        dispach({ type : FETCH_CHARACTORDATA_START});
       const results = axios.get(`https://rickandmortyapi.com/api/character/`)
       results.then(res => {
           console.log(res.data);
           dispach({type: FETCH_CHARACTORDATA_SUCCESS , payload: res.data})
           
       })
       .catch(error => {
           console.log(error)
           dispach({type: FETCH_CHARACTORDATA_FAILURE , payload: error.response})
       })
    
    }
}