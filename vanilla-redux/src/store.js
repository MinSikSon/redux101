import { createStore } from "redux";
import { createAction } from "@reduxjs/toolkit"

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

console.log(addToDo(), addToDo.type);
console.log(deleteToDo(), deleteToDo.type);

const reducer = (state = [], action) => {
    switch (action.type) {
        case addToDo.type:
            console.log(`reducer ADD`, action);
            return [{ text: action.payload, id: Date.now() }, ...state];
        case deleteToDo.type:
            console.log(`reducer DELETE`, action);
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo,
}

export default store;