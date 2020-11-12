import React from "react";
import s from "./Users.module.css";
import userIcon from "../../assets/img/user-icon.jpg";
import Preloader from "../common/preloader/Preloader";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {props.isFatching ? <Preloader /> : ""}
      {pages.map((page) => (
        <span
          className={page === props.currentPage ? s.selectedPage : ""}
          onClick={() => props.onPageChange(page)}
        >
          {page}
        </span>
      ))}
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <NavLink to={"profile/" + u.id}>
              <img
                src={u.photos.small ? u.photos.small : userIcon}
                alt="avatar"
                className={s.avatar}
              />
            </NavLink>
          </div>
          <div>
            {u.followed ? (
              <button
                onClick={() => {
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "8ef9d661-a0a6-4199-ba72-264a84528d4d"
                        }
                      }
                    )
                    .then((res) => {
                      if (res.data.resultCode === 0) {props.unfollow(u.id)};
                    })
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                  onClick={() => {
                    
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "8ef9d661-a0a6-4199-ba72-264a84528d4d"
                        }
                      }
                    )
                    .then((res) => {
                      if (res.data.resultCode === 0) props.follow(u.id);
                    });
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div>
            {u.name}
            {u.status}
            {/* {u.location.city}
                {u.location.country} */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
