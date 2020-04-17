const initialState = {
    smurf: [{
        name: 'loc',
        age: '',
        height: '',
        id: ''
    }]
}


export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_SMURF':
            return {
                ...state,
                smurf: action.payload
            }
        case 'REFRESH_SMURF':
            return {
                ...state,
                smurf: action.payload
            }
    }
    return state;
}