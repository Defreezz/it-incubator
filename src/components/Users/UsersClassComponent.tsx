import React from "react";
import {UsersComponentType} from "./UsersContainer";
import s from "./Users.module.css"
import axios from "axios";


const urlImg = "https://pbs.twimg.com/profile_images/378800000509207351/48400919aaca1bc39b8f691c7662c894.jpeg"

export class UsersClassComponent extends React.Component<UsersComponentType> {
       componentDidMount() {
           console.log("gadg")
        if (!this.props.users.length) {
            axios.get(`/users`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
        return (
            <div className={s.item}>
                {this.props.users.map(u =>
                    <div key={u.id}>
            <span>
                  <div><img src={u.photos.small ? u.photos.small : urlImg}/></div>
                  <div>
                      <button
                          onClick={() => this.props.toggleFollow(u.id)}>
                          {u.followed ? "Unfollow" : "Follow"}
                      </button>
                  </div>
            </span>
                        <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    {/*<div>{u.location.city}</div>*/}
                    {/*<div>{u.location.country}</div>*/}
                </span>
            </span>
                    </div>)}
            </div>
        )
    }
}