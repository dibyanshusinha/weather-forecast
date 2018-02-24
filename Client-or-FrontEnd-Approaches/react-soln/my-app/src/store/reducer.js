import * as actionTypes from './actions';

const initialState = {
    somedata: 100,
    someotherdata: null
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.FETCH:
            return {
                ...state,
                someotherdata: {
                    ...state.somedata,
                    [action.valueName]: state.somedata[action.valueName]+1
                }
            };
        default:
            return state;
    }
};


export default reducer;