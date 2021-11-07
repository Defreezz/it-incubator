import React from 'react';
import './App.css';
import './Star';
import Star from "./Star";

function App() {
    return (
        <div className="App">
            <h1>123</h1>
            <Rating/>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <Star/>
        </div>
    )
}

export default App;
