import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import headerClasses from "./components/Header/Header.module.css"
import navbarClasses from "./components/Navbar/Navbar.module.css"
import dialogClasses from "./components/Dialogs/Dialogs.module.css"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const cssHeader = {
    className: headerClasses.header,
    logo: headerClasses.logo,
    headerData: {
        img1: 'https://www.rulez-t.info/uploads/posts/2017-10/1508283588_rulez-t_info-memy-dlya-ochen-vazhnyh-peregovorov-0.png'
    }
}

const cssNavbar = {
    navbar: navbarClasses.nav,
    navbarItem: navbarClasses.item,
    activeLink: navbarClasses.activeLink
}

const cssProfile = {
    profileData: {
        img1: "https://img.uslugio.com/img3/33/3d/333d332bafec42151557d5c1a8a2d10c.jpg",
        img2: "https://s.mediasole.ru/cache/content/data/images/1486/1486067/original.jpg"
    }
}

const cssDialogs = {
    dialogsContainer: dialogClasses.dialogsContainer,
    dialogsItems: dialogClasses.dialogsItems,
    dialog: dialogClasses.dialog,
    message: dialogClasses.message,
    messageContainer: dialogClasses.messageContainer
}

function App() {
    return (
        <div className={"app-wrapper"}>
            <Header styleHeader={cssHeader}/>
            <Navbar styleNavbar={cssNavbar}/>
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path='/profile' element={<Profile styleProfile={cssProfile}/>}/>
                    <Route path='/dialogs' element={<Dialogs styleDialogs={cssDialogs}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>

        </div>
    );
}


export default App;
