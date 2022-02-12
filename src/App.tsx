import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import MyProfileContainer from "./components/MyProfile/MyProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/SideBar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {ProfileUserContainer} from "./components/ProfileUser/ProfileUserContainer";
import {Login} from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";
import {LoginContainer} from "./components/Login/LoginContainer";


function App() {
    return (
        <div className={"app-wrapper"}>
            <HeaderContainer/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path='/' element={<News/>}/>
                    <Route path='/login' element={<LoginContainer/>}/>

                    <Route path='/users' element={<UsersContainer/>}/>
                    <Route path='/myprofile' element={<MyProfileContainer/>}/>
                    <Route path='/profile/:userID' element={<ProfileUserContainer/>}/>
                    <Route path='/dialogs' element={<DialogsContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/sidebar' element={<Sidebar/>}/>
                </Routes>
            </div>



        </div>
    );
}


export default App;
