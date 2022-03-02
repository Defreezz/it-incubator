import React from 'react';
import {connect} from "react-redux";
import {Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import MyProfileContainer from "./components/MyProfile/MyProfileContainer";
import {LoginContainer} from "./components/Login/LoginContainer";
import {AppStateType} from "./redux/reduxStore";
import {initializeApp} from "./redux/apReducer";
import {Preloader} from "./components/common/preloader/preloader";

const ProfileUserContainer = React.lazy(() => import('./components/ProfileUser/ProfileUserContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


class App extends React.Component<AppPropsType> {
   constructor(props:AppPropsType) {
       super(props);
       this.props.initializeApp()
   }



    render() {
        if (!this.props.isInit) {
            return <Preloader/>
        }

        return (
            <div className={"app-wrapper"}>
                <React.Suspense fallback={"...loading"}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={"app-wrapper-content"}>
                        <Routes>
                            <Route path='/login' element={<LoginContainer/>}/>
                            <Route path='/myprofile' element={<MyProfileContainer/>}/>
                            <Route path='/dialogs' element={<DialogsContainer/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/profile/:userID' element={<ProfileUserContainer/>}/>
                        </Routes>
                    </div>
                </React.Suspense>
            </div>
        );
    }
}

type AppPropsType = MapStateToProps & MapDispatchToProps
type MapStateToProps =
    {
        isInit: boolean
    }
type MapDispatchToProps =
    {
        initializeApp: () => void
    }
const mapStateToProps = (state: AppStateType): MapStateToProps => (
    {
        isInit: state.app.isInit
    }
)

export default connect(mapStateToProps,
    {
        initializeApp,
    }
)(App)