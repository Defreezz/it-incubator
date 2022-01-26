import {AppStateType} from "../../../redux/reduxStore";
import React from "react";
import {sendPostAC, UpdateInputPostAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

export type PostType = {
    id: string,
    message: string,
    likeCount: number
}

type MapStateToProps = {
    posts:PostType[]
    newInputText:string
}
type MapDispatchToProps = {
    onChange:(text:string) => void
    onClick:(text:string) => void
}
export type MyPostsComponentType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state:AppStateType):MapStateToProps => {
  return{
      posts:state.profilePage.posts,
      newInputText:state.profilePage.newInputPostText
  }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToProps => {
  return{
      onChange:(text:string) => {text && dispatch(UpdateInputPostAC(text))},
      onClick: (inputText:string) => {
          if(inputText)
              dispatch(sendPostAC())
          if(inputText)
              dispatch(UpdateInputPostAC(""))
      }
  }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)


export default MyPostsContainer