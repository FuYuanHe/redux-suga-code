import * as actionTypes from '../action-type'
const initialState = {number:0}
function counter(state=initialState,action){
    switch (action.type) {
        case actionTypes.ADD:
            return {number:state.number +1}
        // case actionTypes.ASYNCADD:
        //     return setTimeout({
        //         number:state.number +1
        //     },1000)
        default:
            return state;
    }
}

export  default counter