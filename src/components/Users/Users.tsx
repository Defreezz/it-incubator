import s from "./Users.module.css";
import React from "react";
import {UserType} from "../../redux/usersReducer";
import {createPaginator} from "../../utilits/paginator";
import {NavLink} from "react-router-dom";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    onPageChanged: (p: number) => void
    follow:(id:string,followed:boolean) => void
    followInProgress:string[]
}

export function Users({
                          currentPage,
                          totalUsersCount,
                          pageSize,
                          users,
                          onPageChanged,
                          follow,
                          followInProgress,
                      }: UsersType) {
    const urlImg = "https://pbs.twimg.com/profile_images/378800000509207351/48400919aaca1bc39b8f691c7662c894.jpeg"
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages: number[] = []

    pages.push(1)
    createPaginator(pages, pagesCount, currentPage)
    pages.push(pagesCount)
    // for (let i = 1; i<=pagesCount;i++){
    //     pages.push(i)
    // }
    return (
        <div className={s.item}>
            <div className={s.pages}>
                {pages.map((p, index) =>
                    <span key={index}
                          onClick={() => onPageChanged(p)}
                          className={(currentPage === p ? s.selectedPage : s.paginationPage)
                          }>{p} </span>)}
            </div>
            {users.map(u =>
                <div key={u.id}>
            <span>
                  <div>
                      <NavLink to={`/profile/`+ u.id }>
                          <img alt={""} src={u.photos.small ? u.photos.small : urlImg}/>
                      </NavLink>
                  </div>
                  <div>
                      <button disabled={followInProgress.some(id => id === u.id)}
                          onClick={() => follow(u.id,u.followed)}>
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