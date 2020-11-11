import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  toggleIsFatchingAC,
} from "../../redux/users-reducer";
import axios from "axios";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFatching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((res) => {
        this.props.toggleIsFatching(false);
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  }
  onPageChange = (page) => {
    this.props.toggleIsFatching(true);
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`
      )
      .then((res) => {
        this.props.toggleIsFatching(false);
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        isFatching={this.props.isFatching}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFatching: state.usersPage.isFatching,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    setTotalUsersCount: (totalUsersCount) =>
      dispatch(setTotalUsersCountAC(totalUsersCount)),
    toggleIsFatching: (isFatching) => dispatch(toggleIsFatchingAC(isFatching)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
