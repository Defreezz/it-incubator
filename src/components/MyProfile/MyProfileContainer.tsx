import {connect} from "react-redux";
import {MyProfileClassComponent} from "./MyProfileClassComponent";
import React from "react";
import {AppStateType} from "../../redux/reduxStore";
import {WithAuthRedirectComponent} from "../../utilits/withAuthRedirectComponent";
import {compose} from "redux";


export type MapDispatchToProps = {

}
type MapStateToPropsType = {

}

export type ProfileComponentType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {}
}


export default compose<typeof React.Component>(
    //WithAuthRedirectComponent,
    connect(mapStateToProps,
        { })
)(MyProfileClassComponent)

