import * as actionTypes from '../action-type'
const actionCreators = {
    add(){
        return {type:actionTypes.ADD}
    },
    asyncAdd(){
        console.log('hahhah');
        return {type:actionTypes.ASYNCADD}
    }
}

export default actionCreators