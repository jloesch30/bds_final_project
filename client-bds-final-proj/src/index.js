import React from 'react';
import ReactDom from 'react-dom';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import App from './App';

ReactDom.render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
            </Routes>
        </BrowserRouter>,
    document.getElementById("root")
);