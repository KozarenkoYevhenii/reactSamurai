import React from "react";
import s from "./Users.module.css";
import userIcon from "../../assets/img/user-icon.jpg";
import Preloader from "../common/preloader/Preloader";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {props.isFetching ? <Preloader /> : ""}
      {pages.map((page) => (
        <span
          key={page}
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
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div>
            {u.name}
            {u.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
