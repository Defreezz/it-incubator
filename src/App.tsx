import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";






const cssProfile = {
    profileData: {
        img1: "https://img.uslugio.com/img3/33/3d/333d332bafec42151557d5c1a8a2d10c.jpg",
        img2: "https://s.mediasole.ru/cache/content/data/images/1486/1486067/original.jpg"
    }
}


function App() {
    return (
        <div className={"app-wrapper"}>
            <Header />
            <Navbar />
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path='/profile' element={<Profile styleProfile={cssProfile}/>}/>
                    <Route path='/dialogs' element={<Dialogs />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>

        </div>
    );
}


export default App;
