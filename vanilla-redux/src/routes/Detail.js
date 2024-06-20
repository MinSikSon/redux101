import React from 'react';
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';

function Detail(props) {
    const param = useParams();
    const { id } = param;
    console.log(`[Detail] props:`, props, `, param:`, param, `, id:`, id);
    return <h1>{`id: ${id}`}</h1>
}

const mapStateToProps = (state, ownProps) => {
    // ownProps 값을 불러올 수 있는 bug 있음.
    console.log(`[Detail mapStateToProps] state:`, state, `, ownProps:`, ownProps);
    return { toDos: state };
}

export default connect(mapStateToProps, null)(Detail);