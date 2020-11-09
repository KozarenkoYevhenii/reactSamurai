import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import userIcon from "../../assets/img/user-icon.jpg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }
  onPageChange = (page) => {
    this.props.setCurrentPage(page)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        console.log(res);
      });
  }
  render() {
    const pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        {pages.map((page) => (
          <span
            className={page === this.props.currentPage ? s.selectedPage : ""}
            onClick={() => this.onPageChange(page)}
          >
            {page}
          </span>
        ))}
        {this.props.users.map((u) => (
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
                <button onClick={() => this.props.unfollow(u.id)}>
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(u.id);
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
}

export default Users;
