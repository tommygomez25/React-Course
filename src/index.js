// 1) Import the React and ReactDOM libraries 

import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import { Provider } from "./context/books";
import './index.css';

// 2) Get a reference to the div with ID root

const el = document.getElementById('root');

// 3) Tell React to take control of that element

const root = ReactDOM.createRoot(el);

// 4) Show the component to the screen

root.render(
    <Provider>
        <App />
    </Provider>
);