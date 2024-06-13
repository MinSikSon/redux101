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
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
}

const store2 = createStore(reducer2);

const createToDo = toDo => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
};

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  // createToDo(toDo);
  store2.dispatch({ type: ADD_TODO, toDo });
}

form.addEventListener("submit", onSubmit);