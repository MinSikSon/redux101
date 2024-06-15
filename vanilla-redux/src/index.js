import { createStore } from "redux";

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// NOTE: 오타 방지를 위해서 type 을 별도로 정의해둠.
const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

console.log(countStore);

const onChange = () => {
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
}
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

/////////

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer2 = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      console.log(`action.id`, action.id);
      const newState = state.filter(toDo => toDo.id !== action.id);
      console.log(`state`, state);
      console.log(`newState`, newState);
      return newState;
    default:
      return state;
  }
}

const store2 = createStore(reducer2);

const onChange2 = () => {
  console.log(store2.getState());
}
store2.subscribe(onChange2);

const addToDo = text => {
  return { type: ADD_TODO, text };
}
const dispatchAddToDo = text => {
  store2.dispatch(addToDo(text));
}

const deleteToDo = (e) => {
  return { type: DELETE_TODO, id: Number(e.target.parentNode.id) };
}
const dispatchDeleteToDo = (e) => {
  store2.dispatch(deleteToDo(e));
}

const paintToDos = () => {
  const toDos = store2.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};
store2.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
}

form.addEventListener("submit", onSubmit);