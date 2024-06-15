import React from "react";
// import { HashRouter as Router, Route } from "react-router-dom";

function Home() {
    const [text, setText] = React.useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        console.log(text);
        setText("");
    }

    return <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} />
            <button type="submit">Add</button>
        </form>
        <ul></ul>
    </>
}

export default Home;