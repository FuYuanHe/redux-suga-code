import {createStore,applyMiddleware} from 'redux'
import createSagaMiddleare from 'redux-saga'
import rootSaga from './saga'
import reducer from './reducers'

const sagaMiddleware = createSagaMiddleare()
let store = applyMiddleware(sagaMiddleware)(createStore)(reducer)
sagaMiddleware.run(rootSaga)
export default store