import axios from 'axios';
export const FETCH_CHARACTORDATA_START = 'FETCH_CHARACTORDATA_START';
export const FETCH_CHARACTORDATA_SUCCESS = 'FETCH_CHARACTORDATA_SUCCESS'
export const FETCH_CHARACTORDATA_FAILURE =  'FETCH_CHARACTORDATA_FAILURE'

export const getResponse = () => {
    return dispach => {
        dispach({ type : FETCH_CHARACTORDATA_START});
        axios.get(`https://rickandmortyapi.com/api/character/`)
        .then(res =>  dispach({type: FETCH_CHARACTORDATA_SUCCESS , payload: res.data.results}))
        .catch(err => dispach({type: FETCH_CHARACTORDATA_FAILURE , payload: err}))   
    }
}