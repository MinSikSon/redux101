import React from "react";
import Home from "../routes/Home";
import Detail from "../routes/Detail";
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;