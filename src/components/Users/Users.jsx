import React from "react";
import s from "./Users.module.css";
import userIcon from "../../assets/img/user-icon.jpg";
import Preloader from "../common/preloader/Preloader";

const Users = (props) => {

    const pagesCount = Math.ceil(
      props.totalUsersCount / props.pageSize
    );
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
  }
    return (
      <div>
        {props.isFatching ? <Preloader /> : "" }
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
              <img
                src={u.photos.small ? u.photos.small : userIcon}
                alt="avatar"
                className={s.avatar}
              />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>
                  Unfollow
                </button>
              ) : (
                <button
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
              {/* {u.location.city}
                {u.location.country} */}
            </div>
          </div>
        ))}
      </div>
    );
  
}

export default Users;
