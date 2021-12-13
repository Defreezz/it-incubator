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
import Sidebar from "./components/SideBar/Sidebar";
import {StoreType} from "./redux/state";

type AppType = {
    store: StoreType
    //addPost: (newText: string) => void
}


function App(props: AppType) {
    const state = props.store.getState()
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route
                        path='/profile'
                        element={
                            <Profile
                                profilePage={state.profilePage}
                                dispatch={props.store.dispatch.bind(props.store)}

                            />}/>
                    <Route path='/dialogs' element={<Dialogs dialogsPage={state.dialogsPage}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/sidebar' element={<Sidebar sidebar={state.sidebar}/>}/>
                </Routes>
            </div>

        </div>
    );
}


export default App;
