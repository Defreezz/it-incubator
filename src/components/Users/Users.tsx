import React from "react";
import {UsersComponentType} from "./UsersContainer";
import s from "./Users.module.css"
import axios from "axios";

export function Users({users, setUsers, toggleFollow}: UsersComponentType) {
    const urlImg = "https://pbs.twimg.com/profile_images/378800000509207351/48400919aaca1bc39b8f691c7662c894.jpeg"

    if(!users.length){//БУДЕТ ФИКСИТьСЯ классовой компонентой
        //иди в UsersClassComponent

        // setUsers([
        //     {id:v1(),photoUrl:urlImg, followed:false, fullName:"Artiom",status:"asd",location:{city:"Minsk", country:"Belarus"}},
        //     {id:v1(),photoUrl:urlImg, followed:true, fullName:"Alex",status:"kek",location:{city:"Moscow", country:"Russia"}},
        //     {id:v1(),photoUrl:urlImg, followed:false, fullName:"Svea",status:"asd",location:{city:"Minsk", country:"Belarus"}}
        // ])
        axios.get(`/users`)
            .then(response => {
                setUsers(response.data.items)
            })
    }

        const toggleFollowCallback = (id: string) => toggleFollow(id)
        const userPageElement = users.map(u =>
            <div key={u.id}>
            <span>
                  <div><img src={u.photos.small?u.photos.small:urlImg}/></div>
                  <div>
                      <button
                          onClick={() => toggleFollowCallback(u.id)}>
                          {u.followed?"Unfollow":"Follow"}
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
            </div>)

    return (
        <div className={s.item}>
            {userPageElement}
        </div>
    )

}
