import React from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';

function Detail(props) {
    const { id } = useParams();
    console.log(`Detail props`, props);
    console.log(`Detail id`, id);
    const { toDos } = props;
    return <h1>{toDos?.text}</h1>
}

const mapStateToProps = (state, ownProps) => {
    // ownProps 값을 불러올 수 있는 bug 있음.
    console.log(`Detail mapStateToProps: state, ownProps`, state, ownProps);
    return { toDos: state };
}

export default connect(mapStateToProps)(Detail);