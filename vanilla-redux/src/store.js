import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
    return {
        type: ADD,
        text
    }
}

const deleteToDo = (id) => {
    return {
        type: DELETE,
        id
    }
}
const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, { text: action.text, id: Date.now() }];
        case DELETE:
            return state.filter(item => item.id !== action.id);
        default:
            return state;
    }
}

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo,
}

store.subscribe(addToDo);
store.subscribe(deleteToDo);

export default store;