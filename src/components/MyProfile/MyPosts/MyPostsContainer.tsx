import {AppStateType} from "../../../redux/reduxStore";
import React from "react";
import {sendPost} from "../../../redux/myProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {reset} from "redux-form";
import {resetForm} from "../../../redux/authReducer";

export type PostType = {
    id: string,
    message: string,
    likeCount: number
}

type MapStateToProps = {
    posts:PostType[]

}
type MapDispatchToProps = {
    sendPost:(text:string) => void
    resetForm:(formName:string) => void
}
export type MyPostsComponentType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state:AppStateType):MapStateToProps => {
  return{
      posts:state.myProfilePage.posts,

  }
}
const MyPostsContainer = connect(mapStateToProps, {sendPost,resetForm})(MyPosts)


export default MyPostsContainer