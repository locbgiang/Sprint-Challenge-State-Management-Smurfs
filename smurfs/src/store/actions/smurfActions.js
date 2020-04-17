import axios from 'axios';

export const fetchSmurf = () => {
    return dispatch => {
        axios.get('http://localhost:3333/smurfs')
        .then(res=>{
            dispatch({type: 'FETCH_SMURF', payload: res.data})
        });
    };
};

export const postSmurf = (newSmurf) => {
    return dispatch => {
        console.log('inside action', newSmurf)
        axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res=>{
            dispatch({type: 'REFRESH_SMURF', payload: res.data})
        });
    }
}