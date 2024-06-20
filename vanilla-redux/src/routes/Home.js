import React from "react";
import { connect } from "react-redux";
// import { actionCreators } from "../store";
import { add } from "../store";
import ToDo from "../components/ToDo";
// import { HashRouter as Router, Route } from "react-router-dom";

function Home({ toDos, ...rest }) {
    console.log(`toDos`, toDos);
    console.log(`rest`, rest);
    const [text, setText] = React.useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        if ("" !== text) {
            rest.addToDo(text);
        }
        setText("");
    }

    return <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} />
            <button type="submit">Add</button>
        </form>
        <ul>
            {toDos?.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
        </ul>
    </>
}

// store.getState()
const mapStateToProps = (state, ownProps) => {
    console.log(`Home mapStateToProps state, ownProps`, state, ownProps);
    return { toDos: state, id: ownProps.id };
}

// store.dispatch()
const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(`[Home mapDispatchToProps] ownProps`, ownProps);
    return {
        // addToDo: (text) => dispatch(actionCreators.addToDo(text))
        addToDo: (text) => dispatch(add(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);