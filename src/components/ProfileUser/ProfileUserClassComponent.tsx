import {ProfileUserComponentType} from "./ProfileUserContainer";
import React, {PureComponent} from "react";
import {Preloader} from "../common/preloader/preloader";
import style from "./ProfileUser.module.css";
import defaultUserPhoto from "../../assets/defaulUserPhoto.jpg";
import {EditableSpan} from "../MyProfile/ProfileInfo/EditableSpan";


export class ProfileUserClassComponent extends PureComponent<ProfileUserComponentType> {
    protected userID: string;

    constructor(props: ProfileUserComponentType) {
        super(props);
        this.userID = this.props.router.params.userID
        this.props.getUserProfile(this.userID)
    }

    render() {
        if (!this.props.profile) {
            return <Preloader/>
        } else {
            return (
                <div>
                    <div>
                        <h1>{this.props.profile.fullName}</h1>
                    </div>
                    <div>
                        {this.props.profile.photos.large
                            ? <img alt={"avatar"} className={style.ava} src={this.props.profile.photos.large}/>
                            : <img alt={"avatar"} className={style.ava} src={defaultUserPhoto}/>
                        }
                    </div>

                    <div className={style.descriptionBox}>
                        <span><b>About me: </b> {this.props.profile.aboutMe}</span>
                        <br/>
                        <span><b>Status: </b>{this.props.profile.status}</span>
                    </div>
                </div>
            )
        }
    }
}
