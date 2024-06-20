import React from 'react';
import { connect } from 'react-redux';
// import { actionCreators } from '../store';
import { remove } from '../store';
import { Link } from 'react-router-dom';


function ToDo(props) {
    console.log(`ToDo props`, props);
    const { text, onButtonClick, id, ownProps } = props;
    return (
        <li>
            <Link to={`/${id}`} {...ownProps}>{text}</Link>
            <button onClick={onButtonClick}>DEL</button>
        </li>
    )
}

function mapStateToProps(state, ownProps) {
    console.log(`ToDo mapStateToProps: state, ownProps`, state, ownProps);
    return { toDos: state, ownProps: ownProps };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {
        // onButtonClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
        onButtonClick: () => dispatch(remove(ownProps.id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);