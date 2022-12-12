/* eslint-disable require-yield*/
import * as actionTypes from './action-type'
import {put,take} from 'redux-saga/effects'

function delay(time){
    return new Promise((resolve) => {
        setTimeout(resolve,time)
    })
}
// 最终执行的saga
function * workerSaga(){
    // 可以在这里加上异步逻辑
    // 如果yield 后面跟的是一个异步函数，则会等待这个异步执行完再继续
    yield delay(1000)
    yield put({type:actionTypes.ADD})
}

// 监听saga 负责监听向仓库派发的动作，如果有，则执行workerSaga
function * watcherSaga(){
    // take只会执行一次
    yield take(actionTypes.ASYNCADD)
    yield workerSaga()
}

// 根saga
function * rootSaga(){
    // 负责传递
    yield watcherSaga()
}

export default rootSaga