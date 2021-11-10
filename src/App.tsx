import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import navbarClasses from "./components/Navbar/Navbar.module.css"
import profileClasses from "./components/Profile/Profile.module.css"
import headerClasses from "./components/Header/Header.module.css"


function App() {
    return (
        <div className={"app-wrapper"}>
            <Header className={headerClasses.header}/>
            <Navbar className={navbarClasses.nav} item={`${navbarClasses.item} ${navbarClasses.active}`}/>
            <Profile className={profileClasses.profile} item={profileClasses.item}/>

        </div>
    );
}


export default App;
