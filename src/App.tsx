import React from 'react';
import './App.css';
import './components/Star';
import Rating from './components/Rating';
import Accordion from './components/Accordion';
import PageTitle from "./components/AppTitle";

function App() {
    return (
        <div className="App">
            <PageTitle title={"This is APP component"}/>
            <Accordion titleValue={"Типа меню"} collapsed={true}/>
            <Accordion titleValue={"Типа меню"} collapsed={false}/>
            <hr></hr>
            <Rating value={123}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}


export default App;
