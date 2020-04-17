import axios from 'axios';

export const fetchSmurf = () => {
    return dispatch => {
        axios.get('http://localhost:3333/smurfs')
        .then(res=>{
            console.log('inside smurf action ',res.data);
            dispatch({type: 'FETCH_SMURF', payload: res.data})
        });
    };
};
