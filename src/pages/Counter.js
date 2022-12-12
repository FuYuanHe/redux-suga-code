import React from "react";
import {connect} from 'react-redux'
import actionCreators from '../store/actionCreators/counter'

function Counter(props){
    console.log(props);
    return (
        <div>
            <p>{props.number}</p>
            <button onClick={props.add}>增加</button>
            <button onClick={props.asyncAdd}>异步</button>
        </div>
    )

}

export default connect(state => state.counter,actionCreators)(Counter)